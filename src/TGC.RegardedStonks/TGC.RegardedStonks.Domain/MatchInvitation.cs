using TGC.RegardedStonks.Domain.Entities;
using TGC.RegardedStonks.Domain.Enums;

namespace TGC.RegardedStonks.Domain;

public class MatchInvitation : IMatchInvitationEntity
{
	public Guid Id { get; set; }
	public DateTimeOffset Created { get; set; }
	public DateTimeOffset? LastEdited { get; set; }
	public Guid CreatedBy { get; set; }
	public Guid UpdatedBy { get; set; }
	public bool Active { get; set; }
	public Guid StockMatchId { get; set; }
	public Guid PlayerId { get; set; }
	public Guid AuthorId { get; set; }
	public MatchStatus Status { get; set; }
}