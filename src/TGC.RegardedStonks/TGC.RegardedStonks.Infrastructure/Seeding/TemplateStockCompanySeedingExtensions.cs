using Microsoft.Extensions.DependencyInjection;

namespace TGC.RegardedStonks.Infrastructure.Seeding;

public static class TemplateStockCompanySeedingExtensions
{
	/// <summary>
	/// Idempotently inserts any of the seed template stock companies missing from the database.
	/// Call once at startup, after the DI container is built.
	/// </summary>
	public static async Task SeedTemplateStockCompaniesAsync(this IServiceProvider services, CancellationToken cancellationToken = default)
	{
		using var scope = services.CreateScope();
		var seeder = scope.ServiceProvider.GetRequiredService<TemplateStockCompanySeeder>();
		await seeder.SeedAsync(cancellationToken);
	}
}
