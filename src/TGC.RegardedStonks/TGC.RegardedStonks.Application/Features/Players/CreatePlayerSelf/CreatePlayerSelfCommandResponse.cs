using TGC.Communication.cqrs;

namespace TGC.RegardedStonks.Application.Features.Players.CreatePlayerSelf;

public class CreatePlayerSelfCommandResponse : BaseResponse
{
	public Guid Id { get; set; }
}
