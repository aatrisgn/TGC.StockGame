using TGC.StockGame.Core.Game;

namespace TGC.StockGame.Core.DataLayer;

public class GameRepository : IGameRepository
{
	private static readonly List<GameEntity> GameStore = new List<GameEntity>();
	public Task<IEnumerable<GameEntity>> GetAllGamesAsync()
	{
		return Task.FromResult(GameStore.AsEnumerable());
	}

	public Task<GameEntity?> GetGameByIdAsync(Guid id)
	{
		var specificGame = GameStore.SingleOrDefault(g => g.Id == id);
		return Task.FromResult(specificGame);
	}

	public Task<GameEntity> SaveGameAsync(GameEntity newGame)
	{
		GameStore.Add(newGame);
		return Task.FromResult(newGame);
	}
}