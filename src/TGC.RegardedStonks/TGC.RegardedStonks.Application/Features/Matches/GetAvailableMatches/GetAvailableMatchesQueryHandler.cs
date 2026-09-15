using TGC.Communication.cqrs;
using TGC.RegardedStonks.Application.Repositories;

namespace TGC.RegardedStonks.Application.Features.Matches.GetAvailableMatches;

public class GetAvailableMatchesQueryHandler : BaseQueryHandler<GetAvailableMatchesQuery, GetAvailableMatchesQueryResponse>, IQueryHandler
{
	private readonly IMatchReadOnlyRepository _matchRepository;
	public GetAvailableMatchesQueryHandler(IMatchReadOnlyRepository matchRepository)
	{
		_matchRepository = matchRepository;
	}
	
	public async Task<IResult<IQueryResponse>> Handle<TQuery>(TQuery query) where TQuery : IQuery
	{
		var matches = await _matchRepository.GetAllAvailableForUserAsync();
		
		var response = new GetAvailableMatchesQueryResponse
		{
			Matches = matches
		};

		return AsOk(response);
	}
}