using TGC.Communication.cqrs;

namespace TGC.RegardedStonks.Application.Features.MatchInvitations.GetMatchInvitations;

public record GetMatchInvitationsQuery : BaseQuery
{
	public Guid MatchId { get; set; }
	public static GetMatchInvitationsQuery ForMatch(Guid matchId)
	{
		return new GetMatchInvitationsQuery {MatchId = matchId};
	}
}