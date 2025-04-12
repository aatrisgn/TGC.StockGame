using TGC.StockGame.Core.Presentation;

namespace TGC.StockGame.Core.Game;

public interface IGameService
{
	Task<GameResponse> NewGameAsync(GameRequest gameSpecification);
	Task<IEnumerable<GameResponse>> GetAllGamesAsync();
	Task<GameProgressResponse> ProgressGameAsync(Guid id);
	Task<GameResponse> GetGameByIdAsync(Guid id);
}