namespace TGC.StockGame.Core.Game;

public class AssetEntity
{
	public string AssetName { get; set; }
	public int IndexPrice { get; set; }
	public int CurrentPrice { get; set; }
	public int PreviousPrice { get; set; }
	public int LastPriceChange => CurrentPrice - PreviousPrice;
	public int MarketCap10 => GetPercentageMarketCap(10);
	public int MarketCap20 => GetPercentageMarketCap(20);
	public int MarketCap50 => GetPercentageMarketCap(50);
	public int MarketCap100 => GetPercentageMarketCap(100);
	
	public IList<AssetPrice> AssetData { get; set; }

	private int GetPercentageMarketCap(int percentage)
	{
		return CurrentPrice * percentage;
	}
}