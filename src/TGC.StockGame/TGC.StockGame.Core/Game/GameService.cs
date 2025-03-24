using TGC.StockGame.Core.Presentation;

namespace TGC.StockGame.Core.Game;

public class GameService : IGameService
{
	private readonly IAssetFactory _assetFactory;
	
	public GameService(IAssetFactory assetFactory)
	{
		_assetFactory = assetFactory;
	}
	
	public GameEntity NewGame(IGameRequest gameSpecification)
	{
		var newGame = new GameEntity();

		newGame.Name = gameSpecification.Name;
		newGame.Players = gameSpecification.Players.Select(p => new PlayerEntity { Name = p.Name });

		newGame.Inflation = _assetFactory.BuildStartAsset("Inflation");
		newGame.MortgageIndex = _assetFactory.BuildStartAsset("Mortgage Index");
		newGame.InterestRate = _assetFactory.BuildStartAsset("Interest Rate");
		
		newGame.Stocks = _assetFactory.BuildStartStocks();
		
		return newGame;
	}
}