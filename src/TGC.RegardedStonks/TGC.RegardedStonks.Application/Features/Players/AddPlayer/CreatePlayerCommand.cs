using TGC.Communication.cqrs;

namespace TGC.RegardedStonks.Application.Features.Players.AddPlayer;

public class CreatePlayerCommand : BaseCommand
{
	public string UserName { get; set; }
	public Guid Oid { get; set; }
}