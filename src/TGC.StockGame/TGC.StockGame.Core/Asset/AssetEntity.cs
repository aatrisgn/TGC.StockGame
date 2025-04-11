namespace TGC.StockGame.Core.Game;

public class AssetEntity
{
	public string AssetName { get; set; }
	public int CurrentPrice { get; set; }
	public int PreviousPrice { get; set; }
	public IList<AssetPrice> AssetData { get; set; }
}