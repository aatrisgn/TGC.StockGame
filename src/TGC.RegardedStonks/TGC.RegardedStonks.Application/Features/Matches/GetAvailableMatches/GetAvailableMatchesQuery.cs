using TGC.Communication.cqrs;

namespace TGC.RegardedStonks.Application.Features.Matches.GetAvailableMatches;

public record GetAvailableMatchesQuery : BaseQuery
{
	public static GetAvailableMatchesQuery Empty()
	{
		return new GetAvailableMatchesQuery();
	}
}