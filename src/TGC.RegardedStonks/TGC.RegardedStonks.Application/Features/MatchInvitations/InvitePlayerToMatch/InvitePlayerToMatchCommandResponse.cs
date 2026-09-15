using TGC.Communication.cqrs;

namespace TGC.RegardedStonks.Application.Features.Matches.InvitePlayerToMatch;

public class InvitePlayerToMatchCommandResponse : BaseResponse
{
	public Guid InvitationId { get; set; }
}