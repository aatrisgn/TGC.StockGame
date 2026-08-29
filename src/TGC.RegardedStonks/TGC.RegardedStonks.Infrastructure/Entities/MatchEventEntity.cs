using TGC.RegardedStonks.Domain.Enums;

namespace TGC.RegardedStonks.Infrastructure.Entities;

public class MatchEventEntity : BaseEntity
{
	public Guid StockMatchId { get; set; }
	public MatchEventType EventType { get; set; }
	public string Payload { get; set; } = string.Empty;
	public StockMatchEntity StockMatch { get; set; }
}
