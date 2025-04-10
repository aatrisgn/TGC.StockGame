using TGC.StockGame.Core.Game;

namespace TGC.StockGame.Api.Game;

public record GameRequest
{
	public string Name { get; set; } = "";
	public IEnumerable<PlayerRequest> Players { get; set; } = [];
}
