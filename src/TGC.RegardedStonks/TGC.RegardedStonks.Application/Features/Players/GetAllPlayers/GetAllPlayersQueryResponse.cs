using TGC.Communication.cqrs;
using TGC.RegardedStonks.Application.Repositories.Entities;

namespace TGC.RegardedStonks.Application.Features.Players.GetAllPlayers;

public class GetAllPlayersQueryResponse : BaseResponse
{
	public List<IPlayerEntity> Players { get; set; }
}