using TGC.StockGame.Core.Game;
using TGC.StockGame.Core.Presentation;

namespace TGC.StockGame.Core.DataLayer;

public interface IGameRepository
{
	Task<IEnumerable<GameEntity>> GetAllGamesAsync();
	Task<GameEntity?> GetGameByIdAsync(Guid id);
	Task<GameEntity> SaveGameAsync(GameEntity newGame);
}