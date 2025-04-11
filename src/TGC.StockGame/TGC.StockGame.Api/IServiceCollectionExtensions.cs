using TGC.StockGame.Core.DataLayer;
using TGC.StockGame.Core.Game;

namespace TGC.StockGame.Api;

public static class IServiceCollectionExtensions
{
	public static IServiceCollection AddStockGameApi(this IServiceCollection services)
	{
		services.AddScoped<IGameService, GameService>();

		services.AddScoped<IGameRepository, GameRepository>();

		services.AddScoped<IAssetFactory, AssetFactory>();
		services.AddScoped<IAssetProgressionService, AssetProgressionService>();

		return services;
	}
}
