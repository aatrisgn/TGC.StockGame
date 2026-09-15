using TGC.Communication.cqrs;
using TGC.RegardedStonks.Domain.Enums;

namespace TGC.RegardedStonks.Application.Features.Matches.CreateMatchEvent;

public record CreateMatchEventCommand : BaseCommand
{
	public Guid StockMatchId { get; set; }
	public MatchEventType EventType { get; set; }
	public string Payload { get; set; }
}
