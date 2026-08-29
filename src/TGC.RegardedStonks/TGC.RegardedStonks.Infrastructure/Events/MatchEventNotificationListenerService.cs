using System.Linq;
using System.Reflection;
using System.Threading.Channels;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Npgsql;
using TGC.RegardedStonks.Application.Events;
using TGC.RegardedStonks.Application.Repositories;
using TGC.RegardedStonks.Infrastructure.Persistence;

namespace TGC.RegardedStonks.Infrastructure.Events;

/// <summary>
/// Holds a dedicated Postgres LISTEN connection open on "match_events_channel" (populated by a DB
/// trigger on match_events, see the AddMatchEventsNotifyTrigger migration) and dispatches each
/// notified row to the registered <see cref="IMatchEventHandler"/>s.
///
/// Design-time tools (dotnet-ef, the API's Kiota/OpenAPI-doc generation build step) fully boot this
/// host - including hosted services - via HostFactoryResolver on every build. Guard on the entry
/// assembly, same as TemplateStockCompanySeedingHostedService, so this only actually listens for the
/// real API process.
/// </summary>
internal sealed class MatchEventNotificationListenerService : BackgroundService
{
	private const string ChannelName = "match_events_channel";
	private const string ConnectionStringName = "RegardedStonks";

	private readonly IServiceScopeFactory _scopeFactory;
	private readonly IConfiguration _configuration;
	private readonly ILogger<MatchEventNotificationListenerService> _logger;

	// Notification callbacks must stay synchronous and cheap, so they hand payloads off to this
	// channel instead of awaiting handler work directly on the Npgsql notification thread.
	private readonly Channel<string> _pendingNotifications = Channel.CreateBounded<string>(
		new BoundedChannelOptions(1000) { FullMode = BoundedChannelFullMode.DropOldest });

	public MatchEventNotificationListenerService(
		IServiceScopeFactory scopeFactory,
		IConfiguration configuration,
		ILogger<MatchEventNotificationListenerService> logger)
	{
		_scopeFactory = scopeFactory;
		_configuration = configuration;
		_logger = logger;
	}

	protected override async Task ExecuteAsync(CancellationToken stoppingToken)
	{
		if (Assembly.GetEntryAssembly()?.GetName().Name != "TGC.RegardedStonks.Api")
		{
			return;
		}

		await Task.WhenAll(
			ListenLoopAsync(stoppingToken),
			ConsumeNotificationsAsync(stoppingToken));
	}

	private async Task ListenLoopAsync(CancellationToken stoppingToken)
	{
		var connectionString = _configuration.GetConnectionString(ConnectionStringName)
			?? throw new InvalidOperationException($"Connection string '{ConnectionStringName}' was not found.");

		while (!stoppingToken.IsCancellationRequested)
		{
			try
			{
				await using var connection = new NpgsqlConnection(connectionString);
				await connection.OpenAsync(stoppingToken);

				connection.Notification += (_, args) => _pendingNotifications.Writer.TryWrite(args.Payload);

				await using (var listenCommand = new NpgsqlCommand($"LISTEN {ChannelName};", connection))
				{
					await listenCommand.ExecuteNonQueryAsync(stoppingToken);
				}

				_logger.LogInformation("Listening for match event notifications on '{ChannelName}'.", ChannelName);

				while (!stoppingToken.IsCancellationRequested)
				{
					await connection.WaitAsync(stoppingToken);
				}
			}
			catch (OperationCanceledException) when (stoppingToken.IsCancellationRequested)
			{
				break;
			}
			catch (Exception ex)
			{
				_logger.LogError(ex, "match_events listener connection failed, retrying in 5s.");
				await Task.Delay(TimeSpan.FromSeconds(5), stoppingToken);
			}
		}
	}

	private async Task ConsumeNotificationsAsync(CancellationToken stoppingToken)
	{
		try
		{
			await foreach (var payload in _pendingNotifications.Reader.ReadAllAsync(stoppingToken))
			{
				try
				{
					await DispatchAsync(payload, stoppingToken);
				}
				catch (Exception ex)
				{
					_logger.LogError(ex, "Failed to dispatch match event notification with payload '{Payload}'.", payload);
				}
			}
		}
		catch (OperationCanceledException) when (stoppingToken.IsCancellationRequested)
		{
		}
	}

	private async Task DispatchAsync(string payload, CancellationToken cancellationToken)
	{
		if (!Guid.TryParse(payload, out var matchEventId))
		{
			_logger.LogWarning("Received match event notification with unparsable payload '{Payload}'.", payload);
			return;
		}

		using var scope = _scopeFactory.CreateScope();
		var matchReadOnlyRepository = scope.ServiceProvider.GetRequiredService<IMatchEventReadOnlyRepository>();

		var matchEvent = await matchReadOnlyRepository.GetByIdAsync(matchEventId, cancellationToken);

		if (matchEvent is null)
		{
			return;
		}

		var handlers = scope.ServiceProvider.GetServices<IMatchEventHandler>()
			.Where(h => h.Accepts(matchEvent.EventType));

		foreach (var handler in handlers)
		{
			await handler.HandleAsync(matchEvent, cancellationToken);
		}
	}
}
