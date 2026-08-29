using TGC.Communication.cqrs;

namespace TGC.RegardedStonks.Application.Features.Players.GetPlayerDetails;

public record GetPlayerDetailsQuery : BaseQuery
{
	public Guid Id { get; set; }
	public static GetPlayerDetailsQuery ForId(Guid id)
	{
		return new GetPlayerDetailsQuery {Id = id};
	}
}