using TGC.StockGame.Core.Game;
using TGC.StockGame.Core.Presentation;

namespace TGC.StockGame.Api.Game;

public class GameRequest : IGameRequest
{
	public string Name { get; set; }
	public IEnumerable<PlayerRequest> Players { get; set; }
}
