using TGC.RegardedStonks.Domain.Enums;

namespace TGC.RegardedStonks.Domain.Entities;

public interface IMatchInvitationEntity : IBaseEntity
{
	Guid StockMatchId { get; set; }
	Guid PlayerId { get; set; }
	Guid AuthorId { get; set; }
	MatchStatus Status { get; set; }
}