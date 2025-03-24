namespace TGC.StockGame.Core.Game;

public interface IAssetFactory
{
	AssetEntity? BuildStartAsset(string inflation);
	AssetEntity[] BuildStartStocks();
}