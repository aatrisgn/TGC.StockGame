using TGC.RegardedStonks.Domain.Enums;

namespace TGC.RegardedStonks.Api.Contracts;

public class UpdateMatchInvitationRequest
{
	public MatchInvitationStatus Status { get; set; }
}