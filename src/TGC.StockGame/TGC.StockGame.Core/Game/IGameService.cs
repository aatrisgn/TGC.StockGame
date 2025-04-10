using TGC.StockGame.Core.Presentation;

namespace TGC.StockGame.Core.Game;

public interface IGameService
{
	GameEntity NewGame(GameRequest gameSpecification);
}