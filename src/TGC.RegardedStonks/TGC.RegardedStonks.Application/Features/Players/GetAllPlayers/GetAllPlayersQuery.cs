using TGC.Communication.cqrs;

namespace TGC.RegardedStonks.Application.Features.Players.GetAllPlayers;

public record GetAllPlayersQuery : BaseQuery
{
	public static GetAllPlayersQuery Empty()
	{
		return new GetAllPlayersQuery();
	}
}