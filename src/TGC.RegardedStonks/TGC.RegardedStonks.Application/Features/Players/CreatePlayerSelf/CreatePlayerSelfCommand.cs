using TGC.Communication.cqrs;

namespace TGC.RegardedStonks.Application.Features.Players.CreatePlayerSelf;

public class CreatePlayerSelfCommand : BaseCommand
{
	public static CreatePlayerSelfCommand Empty()
	{
		return new CreatePlayerSelfCommand();
	}
}
