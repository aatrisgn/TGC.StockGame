using TGC.Communication.cqrs;

namespace TGC.RegardedStonks.Application.Features.Matches.DeactivateMatch;

public record DeactivateMatchCommand: BaseCommand
{
	public Guid Id { get; set; }

	public static DeactivateMatchCommand ForId(Guid id)
	{
		return new DeactivateMatchCommand {Id = id};
	}
}