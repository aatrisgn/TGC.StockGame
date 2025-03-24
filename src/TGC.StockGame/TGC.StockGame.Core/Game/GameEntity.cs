namespace TGC.StockGame.Core.Game;

public class GameEntity
{
	public string Name { get; set; }
	public IEnumerable<PlayerEntity> Players { get; set; }
	
	public AssetEntity[] Stocks { get; set; }
	public AssetEntity? Inflation { get; set; }
	public AssetEntity? InterestRate { get; set; }
	public AssetEntity? MortgageIndex { get; set; }
}