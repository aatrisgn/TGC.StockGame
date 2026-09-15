using TGC.Communication.cqrs;
using TGC.RegardedStonks.Domain.Entities;

namespace TGC.RegardedStonks.Application.Features.Players.GetAllPlayers;

public class GetAllPlayersQueryResponse : BaseResponse
{
	public List<IPlayerEntity> Players { get; set; }
}