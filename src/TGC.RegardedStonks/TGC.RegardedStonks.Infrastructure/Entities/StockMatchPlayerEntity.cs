namespace TGC.RegardedStonks.Infrastructure.Entities;

public class StockMatchPlayerEntity : BaseEntity
{
	public Guid StockMatchId { get; set; }
	public Guid PlayerId { get; set; }
	public DateTimeOffset JoinedAt { get; set; } = DateTimeOffset.UtcNow;

	public StockMatchEntity StockMatch { get; set; }
	public PlayerEntity Player { get; set; }
}
