using TGC.StockGame.Core.Game;

namespace TGC.StockGame.Core.Presentation;

public class GameResponse
{
	public Guid Id { get; set; }
	public string Name { get; set; }
	public IEnumerable<PlayerEntity> Players { get; set; }
	public AssetEntity[] Stocks { get; set; }
	public AssetEntity? Inflation { get; set; }
	public AssetEntity? InterestRate { get; set; }
	public AssetEntity? MortgageIndex { get; set; }
	public int Iteration { get; set; }
	public static GameResponse FromEntity(GameEntity newGame)
	{
		return new GameResponse
		{
			Name = newGame.Name,
			Inflation = newGame.Inflation,
			Players = newGame.Players,
			InterestRate = newGame.InterestRate,
			MortgageIndex = newGame.MortgageIndex,
			Stocks = newGame.Stocks,
			Iteration = newGame.Iteration
		};
	}
}