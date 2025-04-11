namespace TGC.StockGame.Core.Game;

public class GameEntity
{
	public Guid Id { get; set; }
	public IEnumerable<Guid> Users { get; set; } 
	public string Name { get; set; }
	public IEnumerable<PlayerEntity> Players { get; set; }
	public int Iteration { get; set; }
	public AssetEntity[] Stocks { get; set; }
	public AssetEntity? Inflation { get; set; }
	public AssetEntity? InterestRate { get; set; }
	public AssetEntity? MortgageIndex { get; set; }
}