namespace TGC.StockGame.Core.Presentation;

public interface IGameRequest
{
	string Name { get; set; }
	IEnumerable<IPlayerRequest> Players { get; set; }
}