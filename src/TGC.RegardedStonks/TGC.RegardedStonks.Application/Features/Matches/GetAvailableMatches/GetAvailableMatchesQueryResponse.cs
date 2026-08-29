using System.Text.RegularExpressions;
using TGC.Communication.cqrs;
using TGC.RegardedStonks.Application.Repositories.Entities;
using TGC.RegardedStonks.Domain;

namespace TGC.RegardedStonks.Application.Features.Matches.GetAvailableMatches;

public class GetAvailableMatchesQueryResponse : BaseResponse
{
	public IList<IStockMatchEntity> Matches { get; set; }
	public IList<IStockCompany> Companies { get; set; }
}