namespace TGC.StockGame.Core.Presentation;

public class GameRequest
{
	public string Name { get; set; }
	public IEnumerable<PlayerRequest> Players { get; set; }
}