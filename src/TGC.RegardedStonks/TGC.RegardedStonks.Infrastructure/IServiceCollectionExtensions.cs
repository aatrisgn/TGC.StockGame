using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using TGC.RegardedStonks.Application.Features.Players;
using TGC.RegardedStonks.Application.Repositories;
using TGC.RegardedStonks.Infrastructure.Authentication;
using TGC.RegardedStonks.Infrastructure.Events;
using TGC.RegardedStonks.Infrastructure.Persistence;
using TGC.RegardedStonks.Infrastructure.ReadOnlyRepositories;
using TGC.RegardedStonks.Infrastructure.Repositories;
using TGC.RegardedStonks.Infrastructure.Seeding;

namespace TGC.RegardedStonks.Infrastructure;

public static class IServiceCollectionExtensions
{
	private const string ConnectionStringName = "RegardedStonks";

	public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
	{
		var connectionString = configuration.GetConnectionString(ConnectionStringName)
			?? throw new InvalidOperationException($"Connection string '{ConnectionStringName}' was not found.");

		services.AddDbContext<RegardedStonksWriteDbContext>(options => options.UseNpgsql(connectionString));
		services.AddDbContext<RegardedStonksReadOnlyDbContext>(options => options.UseNpgsql(connectionString));

		services.AddScoped<TemplateStockCompanySeeder>();
		services.AddHostedService<TemplateStockCompanySeedingHostedService>();

		services.AddHostedService<MatchEventNotificationListenerService>();

		services.AddRepositories();
		services.AddAuthenticationInfrastructure(configuration);

		return services;
	}

	private static IServiceCollection AddRepositories(this IServiceCollection services)
	{
		
		services.AddScoped<IMatchReadOnlyRepository, StockMatchReadOnlyRepository>();
		services.AddScoped<IMatchEventReadOnlyRepository, MatchEventReadOnlyRepository>();
		services.AddScoped<ITemplateStockCompanyReadOnlyRepository, TemplateStockCompanyReadOnlyRepository>();
		services.AddScoped<IPlayerReadOnlyRepository, PlayerReadOnlyRepository>();

		services.AddScoped<IMatchEventRepository, MatchEventRepository>();
		services.AddScoped<IMatchRepository, StockMatchRepository>();
		services.AddScoped<ITemplateStockCompanyRepository, TemplateStockCompanyRepository>();
		services.AddScoped<IPlayerRepository, PlayerRepository>();
		
		
		return services;
	}

	private static IServiceCollection AddAuthenticationInfrastructure(this IServiceCollection services, IConfiguration configuration)
	{
		services.AddHttpContextAccessor();
		
		services.AddScoped<IUserContextService, UserContextService>();
		
		services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
			.AddJwtBearer(jwtOptions =>
			{
				jwtOptions.Authority = configuration.GetSection("AzureAd").GetValue<string>("authority");
				jwtOptions.Audience = configuration.GetSection("AzureAd").GetValue<string>("audience");
			});
		
		var requireAuthPolicy = new AuthorizationPolicyBuilder()
			.RequireAuthenticatedUser()
			.Build();

		services.AddAuthorizationBuilder()
			.SetFallbackPolicy(requireAuthPolicy);
		
		return services;
	}
}
