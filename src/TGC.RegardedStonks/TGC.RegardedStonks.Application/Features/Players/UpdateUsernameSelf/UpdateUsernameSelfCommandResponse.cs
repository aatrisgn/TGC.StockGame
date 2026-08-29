using TGC.Communication.cqrs;

namespace TGC.RegardedStonks.Application.Features.Players.UpdateUsernameSelf;

public class UpdateUsernameSelfCommandResponse : BaseResponse
{
	public Guid Id { get; set; }
	public string Username { get; set; }
}
