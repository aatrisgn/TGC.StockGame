namespace TGC.StockGame.Core.Game;

public class AssetFactory : IAssetFactory
{
	private static string[] startStockNames = ["Tropical Fruits", "Kangaroo Travel", "Nanotec technologies", "Hollywood studios", "Deepwater Shipping", "Wheels Automotive"
	];
	public AssetEntity? BuildStartAsset(string inflation)
	{
		return new AssetEntity
		{
			AssetName = inflation,
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
			assets[i] = BuildStartAsset(startStockNames[i]);
		}
		
		return assets;
	}
}