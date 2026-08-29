using Microsoft.Extensions.Logging;
using TGC.RegardedStonks.Application.Repositories.Entities;
using TGC.RegardedStonks.Domain.Enums;

namespace TGC.RegardedStonks.Application.Events;

/// <summary>
/// Reference reaction that proves the LISTEN/NOTIFY pipeline works end-to-end.
/// Real reactions (updating portfolios, notifying clients, etc.) are separate features
/// that implement <see cref="IMatchEventHandler"/> alongside this one.
/// </summary>
public class LoggingMatchEventHandler : IMatchEventHandler
{
	private readonly ILogger<LoggingMatchEventHandler> _logger;

	public LoggingMatchEventHandler(ILogger<LoggingMatchEventHandler> logger)
	{
		_logger = logger;
	}

	public bool Accepts(MatchEventType eventType) => true;

	public Task HandleAsync(IMatchEventEntity matchEventEntity, CancellationToken cancellationToken)
	{
		_logger.LogInformation(
			"Reacted to match event {MatchEventId} of type {EventType} for match {StockMatchId}",
			matchEventEntity.Id, matchEventEntity.EventType, matchEventEntity.StockMatchId);
		return Task.CompletedTask;
	}
}
