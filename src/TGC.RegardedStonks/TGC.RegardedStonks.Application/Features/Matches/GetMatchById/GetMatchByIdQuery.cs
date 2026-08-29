using TGC.Communication.cqrs;

namespace TGC.RegardedStonks.Application.Features.Matches.GetMatchById;

public record GetMatchByIdQuery : BaseQuery
{
	public Guid Id { get; set; }
	public static GetMatchByIdQuery ForId(Guid id)
	{
		return new GetMatchByIdQuery {Id = id};
	}
}