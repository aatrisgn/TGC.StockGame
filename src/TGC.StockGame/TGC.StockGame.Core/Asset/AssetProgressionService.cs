namespace TGC.StockGame.Core.Game;

public class AssetProgressionService : IAssetProgressionService
{
	private readonly Random random;
	
	public AssetProgressionService()
	{
		random = new Random();
	}
	
	public Task ProgressStockAsync(AssetEntity stock, int iteration)
	{
		// Should be changed to other distribution
		var upDown = random.Next(1, 3);
		int priceChange = random.Next(1, 11);
		
		// Fetch previous price by index. Could be better
		var previousPrice = stock.AssetData.Single(a => a.Iteration == (iteration - 1)).PriceIndex;
		
		// 50/50 whether price goes up or down. 1/10 distribution of price change.
		float newPrice = 100;
		if (previousPrice > 0)
		{
			newPrice = previousPrice + GetProgressionFactor();
		}
		
		stock.AssetData.Add(new AssetPrice
		{
			Iteration = iteration,
			PriceIndex = (int)Math.Round(newPrice)
		});
		
		return Task.CompletedTask;
	}

	public Task ProgessInflationAsync(GameEntity gameToProgress, int iteration)
	{
		return Task.CompletedTask;
	}

	public Task ProgessInterestRateAsync(GameEntity gameToProgress, int iteration)
	{
		return Task.CompletedTask;
	}

	public Task ProgessMortgageIndexAsync(GameEntity gameToProgress, int iteration)
	{
		return Task.CompletedTask;
	}

	private float GetProgressionFactor()
	{
		var upDown = random.Next(1, 3);
		int priceChange = random.Next(1, 101);

		int progressionFactor = priceChange switch
		{
			< 30 => 10,
			< 60 => 20,
			< 80 => 30,
			< 90 => 40,
			>= 90 => 50
		};

		return CalculateProgressionFactor(progressionFactor, upDown);
	}

	private float CalculateProgressionFactor(int priceChange, int upDown)
	{
		return upDown == 1 ? priceChange : priceChange * -1;
	}
}