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
		// Fetch previous price by index. Could be better
		var previousPrice = stock.AssetData.Single(a => a.Iteration == (iteration - 1)).PriceIndex;
		
		// 50/50 whether price goes up or down. 1/10 distribution of price change.
		int newPrice = (int)Math.Round(previousPrice + GetProgressionFactor());
		if (previousPrice <= 0)
		{
			newPrice = 100;
		}

		if (previousPrice >= 250 && newPrice >= 250)
		{
			newPrice = 250;
		}

		if (newPrice >= 250)
		{
			newPrice = 250;
		}
		
		stock.PreviousPrice = stock.CurrentPrice;
		stock.CurrentPrice = (int)(((float)newPrice / 100) * stock.IndexPrice);
		
		stock.AssetData.Add(new AssetPrice
		{
			Iteration = iteration,
			PriceIndex = newPrice
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
			< 35 => 0,
			< 65 => 10,
			< 85 => 20,
			< 92 => 30,
			< 97 => 40,
			>= 97 => 50
		};

		return CalculateProgressionFactor(progressionFactor, upDown);
	}

	private float CalculateProgressionFactor(int priceChange, int upDown)
	{
		return upDown == 1 ? priceChange : priceChange * -1;
	}
}