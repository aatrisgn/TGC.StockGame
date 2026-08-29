using TGC.Communication.cqrs;

namespace TGC.RegardedStonks.Application.Features.Players.GetPlayerDetailsSelf;

public record GetPlayerDetailsSelfQuery : BaseQuery
{
	public static GetPlayerDetailsSelfQuery Empty()
	{
		return new GetPlayerDetailsSelfQuery();
	}
}
