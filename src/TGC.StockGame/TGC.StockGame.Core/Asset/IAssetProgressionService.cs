namespace TGC.StockGame.Core.Game;

public interface IAssetProgressionService
{
	Task ProgressStockAsync(AssetEntity stock, int iteration);
	Task ProgessInflationAsync(GameEntity gameToProgress, int iteration);
	Task ProgessInterestRateAsync(GameEntity gameToProgress, int iteration);
	Task ProgessMortgageIndexAsync(GameEntity gameToProgress, int iteration);
}