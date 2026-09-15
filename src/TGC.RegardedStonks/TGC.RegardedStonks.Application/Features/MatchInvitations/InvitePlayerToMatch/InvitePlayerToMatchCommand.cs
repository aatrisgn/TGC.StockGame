using TGC.Communication.cqrs;

namespace TGC.RegardedStonks.Application.Features.Matches.InvitePlayerToMatch;

public record InvitePlayerToMatchCommand : BaseCommand
{
	public Guid PlayerId { get; set; }
	public Guid MatchId { get; set; }
	public static InvitePlayerToMatchCommand ForPlayerId(Guid playerId, Guid matchId)
	{
		return new InvitePlayerToMatchCommand
		{
			PlayerId = playerId,
			MatchId = matchId
		};
	}
}