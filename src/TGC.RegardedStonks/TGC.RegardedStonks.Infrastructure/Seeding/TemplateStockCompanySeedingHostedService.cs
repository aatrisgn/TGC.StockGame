using System.Reflection;
using Microsoft.Extensions.Hosting;

namespace TGC.RegardedStonks.Infrastructure.Seeding;

/// <summary>
/// Runs template stock company seeding once the host actually starts serving requests.
/// Note: design-time tools (dotnet-ef, and this project's own GenerateOpenApiDocuments build
/// step via dotnet-getdocument) load and fully execute this app's host - including registered
/// IHostedService.StartAsync calls - via HostFactoryResolver on every `dotnet build`/`dotnet ef`
/// invocation. Guard on the entry assembly so seeding only actually runs for the real API process.
/// </summary>
internal sealed class TemplateStockCompanySeedingHostedService : IHostedService
{
	private readonly IServiceProvider _services;

	public TemplateStockCompanySeedingHostedService(IServiceProvider services)
	{
		_services = services;
	}

	public Task StartAsync(CancellationToken cancellationToken)
	{
		if (Assembly.GetEntryAssembly()?.GetName().Name != "TGC.RegardedStonks.Api")
		{
			return Task.CompletedTask;
		}

		return _services.SeedTemplateStockCompaniesAsync(cancellationToken);
	}

	public Task StopAsync(CancellationToken cancellationToken) => Task.CompletedTask;
}
