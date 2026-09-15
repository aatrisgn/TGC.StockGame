using System.Text.RegularExpressions;
using TGC.Communication.cqrs;
using TGC.RegardedStonks.Domain;
using TGC.RegardedStonks.Domain.Entities;

namespace TGC.RegardedStonks.Application.Features.Matches.GetAvailableMatches;

public class GetAvailableMatchesQueryResponse : BaseResponse
{
	public IList<IStockMatchEntity> Matches { get; set; }
	public IList<IStockCompanyEntity> Companies { get; set; }
}