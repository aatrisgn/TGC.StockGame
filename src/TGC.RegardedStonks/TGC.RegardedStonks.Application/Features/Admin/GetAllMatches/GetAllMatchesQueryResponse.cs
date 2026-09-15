using TGC.Communication.cqrs;
using TGC.RegardedStonks.Domain.Entities;

namespace TGC.RegardedStonks.Application.Features.Admin.GetAllMatches;

public class GetAllMatchesQueryResponse : BaseResponse
{
	public required List<IStockMatchEntity> Matches { get; set; }
}