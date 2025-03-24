using TGC.StockGame.Core.Presentation;

namespace TGC.StockGame.Core.Game;

public class PlayerRequest : IPlayerRequest
{
	public string? Name { get; set; }
}
