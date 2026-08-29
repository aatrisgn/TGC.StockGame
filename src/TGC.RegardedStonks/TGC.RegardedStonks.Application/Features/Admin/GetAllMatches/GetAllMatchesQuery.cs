using TGC.Communication.cqrs;

namespace TGC.RegardedStonks.Application.Features.Admin.GetAllMatches;

public record GetAllMatchesQuery : BaseQuery
{
	public static GetAllMatchesQuery Empty()
	{
		return new GetAllMatchesQuery();
	}
}