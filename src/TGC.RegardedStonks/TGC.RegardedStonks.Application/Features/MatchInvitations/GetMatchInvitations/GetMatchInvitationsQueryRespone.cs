using TGC.Communication.cqrs;
using TGC.RegardedStonks.Domain.Entities;

namespace TGC.RegardedStonks.Application.Features.MatchInvitations.GetMatchInvitations;

public class GetMatchInvitationsQueryRespone : BaseResponse
{
	public IEnumerable<IMatchInvitationEntity> Invitations { get; set; }
}