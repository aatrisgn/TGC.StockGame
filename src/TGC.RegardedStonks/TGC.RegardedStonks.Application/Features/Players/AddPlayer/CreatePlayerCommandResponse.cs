using TGC.Communication.cqrs;

namespace TGC.RegardedStonks.Application.Features.Players.AddPlayer;

public class CreatePlayerCommandResponse : BaseResponse
{
	public Guid Id { get; set; }
}