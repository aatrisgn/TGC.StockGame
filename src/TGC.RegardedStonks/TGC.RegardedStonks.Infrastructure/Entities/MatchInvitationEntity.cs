using TGC.RegardedStonks.Domain.Enums;

namespace TGC.RegardedStonks.Infrastructure.Entities;

public class MatchInvitationEntity : BaseEntity
{
	public Guid StockMatchId { get; set; }
	public StockMatchEntity StockMatch { get; set; }
	public Guid PlayerId { get; set; }
	public PlayerEntity Player { get; set; }
	public Guid InviterId { get; set; }
	public PlayerEntity Inviter { get; set; }
	public MatchInvitationStatus Status { get; set; }
}