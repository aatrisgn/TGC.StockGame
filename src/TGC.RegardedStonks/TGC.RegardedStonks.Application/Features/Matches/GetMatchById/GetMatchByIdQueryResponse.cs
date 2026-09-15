using TGC.Communication.cqrs;
using TGC.RegardedStonks.Domain.Entities;

namespace TGC.RegardedStonks.Application.Features.Matches.GetMatchById;

public class GetMatchByIdQueryResponse : BaseResponse
{
	public IStockMatchEntity Match { get; set; }
}