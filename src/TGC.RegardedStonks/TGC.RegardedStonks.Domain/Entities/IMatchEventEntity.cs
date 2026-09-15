using TGC.RegardedStonks.Domain.Enums;

namespace TGC.RegardedStonks.Domain.Entities;

public interface IMatchEventEntity : IBaseEntity
{
	public Guid StockMatchId { get; set; }
	public MatchEventType EventType { get; set; }
	public string Payload { get; set; }
}
