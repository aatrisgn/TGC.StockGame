using TGC.StockGame.Core.DataLayer;
using TGC.StockGame.Core.Presentation;

namespace TGC.StockGame.Core.Game;

public class GameService : IGameService
{
	private readonly IAssetFactory _assetFactory;
	private readonly IGameRepository _gameRepository;
	private readonly IAssetProgressionService _assetProgressionService;
	
	public GameService(IAssetFactory assetFactory, IGameRepository gameRepository, IAssetProgressionService assetProgressionService)
	{
		_assetFactory = assetFactory;
		_gameRepository = gameRepository;
		_assetProgressionService = assetProgressionService;
	}

	public async Task<GameResponse> NewGameAsync(GameRequest gameSpecification)
	{
		var newGame = new GameEntity();
		
		newGame.Id = Guid.NewGuid();

		newGame.Name = gameSpecification.Name;
		newGame.Players = gameSpecification.Players.Select(p => new PlayerEntity { Name = p.Name });

		newGame.Inflation = _assetFactory.BuildStartAsset("Inflation");
		newGame.MortgageIndex = _assetFactory.BuildStartAsset("Mortgage Index");
		newGame.InterestRate = _assetFactory.BuildStartAsset("Interest Rate");
		
		newGame.Stocks = _assetFactory.BuildStartStocks();
		
		var savedGame = await _gameRepository.SaveGameAsync(newGame);
		
		return GameResponse.FromEntity(savedGame);
	}

	public async Task<IEnumerable<GameResponse>> GetAllGamesAsync()
	{
		var allGames = await _gameRepository.GetAllGamesAsync();
		return allGames.Select(GameResponse.FromEntity);
	}

	public async Task<GameResponse> ProgressGameAsync(Guid id)
	{
		GameEntity gameToProgress = await _gameRepository.GetGameByIdAsync(id);
		
		gameToProgress.Iteration++;

		foreach (var stock in gameToProgress.Stocks)
		{
			await _assetProgressionService.ProgressStockAsync(stock, gameToProgress.Iteration);
		}
		
		await _assetProgressionService.ProgessInflationAsync(gameToProgress, gameToProgress.Iteration);
		await _assetProgressionService.ProgessInterestRateAsync(gameToProgress, gameToProgress.Iteration);
		await _assetProgressionService.ProgessMortgageIndexAsync(gameToProgress, gameToProgress.Iteration);

		return GameResponse.FromEntity(gameToProgress);
	}

	public async Task<GameResponse> GetGameByIdAsync(Guid id)
	{
		var singleGame = await _gameRepository.GetGameByIdAsync(id);
		return GameResponse.FromEntity(singleGame);
	}
}