using TGC.Communication.cqrs;
using TGC.RegardedStonks.Domain.Enums;

namespace TGC.RegardedStonks.Application.Features.Matches.UpdateMatchInvitation;

public record UpdateMatchInvitationCommand : BaseCommand
{
	public Guid MatchId { get; set; }
	public MatchInvitationStatus InvitationStatus { get; set; }
	public static UpdateMatchInvitationCommand Create(Guid id, MatchInvitationStatus status)
	{
		return new UpdateMatchInvitationCommand()
		{
			InvitationStatus = status,
			MatchId = id
		};
	}
}