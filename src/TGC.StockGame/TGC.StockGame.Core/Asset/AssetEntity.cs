namespace TGC.StockGame.Core.Game;

public class AssetEntity
{
	public string AssetName { get; set; }
	public IEnumerable<AssetPrice> AssetData { get; set; }
}