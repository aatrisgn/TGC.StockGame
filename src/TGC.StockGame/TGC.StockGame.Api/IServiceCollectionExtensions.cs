using TGC.StockGame.Core.DataLayer;
using TGC.StockGame.Core.Game;

namespace TGC.StockGame.Api;

public static class IServiceCollectionExtensions
{
	public static IServiceCollection AddStockGameApi(this IServiceCollection services)
	{
		services.AddOpenApiDocument(document =>
		{
			document.Title = "TGC.StockGame API Spec";
			document.Description = "API for exposing data to Angular Client. Be aware this API is not ready for consumption by third-party. Breaking changes can occur without notice.";
		});

		services.AddScoped<IGameService, GameService>();

		services.AddScoped<IGameRepository, GameRepository>();

		services.AddScoped<IAssetFactory, AssetFactory>();
		services.AddScoped<IAssetProgressionService, AssetProgressionService>();

		services.AddCors(options =>
		{
			options.AddPolicy(name: "ALLOW_DEVELOPMENT_CORS_ORIGINS_POLICY",
				builder =>
				{
					builder.WithOrigins("*")
						.AllowAnyMethod()
						.AllowAnyHeader();
				});
		});

		return services;
	}
}
