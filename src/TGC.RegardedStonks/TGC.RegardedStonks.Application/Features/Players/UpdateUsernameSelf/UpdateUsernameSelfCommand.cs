using TGC.Communication.cqrs;

namespace TGC.RegardedStonks.Application.Features.Players.UpdateUsernameSelf;

public class UpdateUsernameSelfCommand : BaseCommand
{
	public string Username { get; set; }
}
