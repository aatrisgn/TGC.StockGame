namespace TGC.StockGame.Core.Game;

public class AssetFactory : IAssetFactory
{
	private static string[] startStockNames = ["Tropical Fruits", "Kangaroo Travel", "Nanotec technologies", "Hollywood studios", "Deepwater Shipping", "Wheels Automotive"];
	private static int[] startStockPrices = [1000000, 2000000, 5000000, 10000000, 15000000, 20000000];
	public AssetEntity? BuildStartAsset(string inflation, int indexPrice = 100)
	{
		return new AssetEntity
		{
			AssetName = inflation,
			IndexPrice = indexPrice,
			CurrentPrice = indexPrice,
			PreviousPrice = indexPrice,
			AssetData =
			[
				new AssetPrice
				{
					Iteration = 0,
					PriceIndex = 100
				}
			]
		};
	}

	public AssetEntity[] BuildStartStocks()
	{
		var assets = new AssetEntity[startStockNames.Length];

		for (var i = 0 ; i < startStockNames.Length ; i++)
		{
			assets[i] = BuildStartAsset(startStockNames[i], startStockPrices[i]);
		}
		
		return assets;
	}
}