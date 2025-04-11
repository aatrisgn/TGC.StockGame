namespace TGC.StockGame.Core.Game;

public interface IAssetFactory
{
	AssetEntity? BuildStartAsset(string inflation, int indexPrice = 100);
	AssetEntity[] BuildStartStocks();
}