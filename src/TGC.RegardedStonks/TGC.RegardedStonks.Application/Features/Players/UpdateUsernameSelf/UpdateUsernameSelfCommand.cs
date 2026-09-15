using TGC.Communication.cqrs;

namespace TGC.RegardedStonks.Application.Features.Players.UpdateUsernameSelf;

public record UpdateUsernameSelfCommand : BaseCommand
{
	public string Username { get; set; }
}
