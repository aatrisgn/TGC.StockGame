using TGC.Communication.cqrs;

namespace TGC.RegardedStonks.Application.Features.Matches.CreateMatch;

public record CreateMatchCommand : BaseCommand
{
	public string Name { get; set; }
	public decimal StartingCapital { get; set; }
}