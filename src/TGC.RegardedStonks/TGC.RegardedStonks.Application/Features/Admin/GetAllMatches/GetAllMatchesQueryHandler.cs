using TGC.Communication.cqrs;
using TGC.RegardedStonks.Application.Repositories;

namespace TGC.RegardedStonks.Application.Features.Admin.GetAllMatches;

public class GetAllMatchesQueryHandler:  BaseQueryHandler<GetAllMatchesQuery>, IQueryHandler
{
	private readonly IMatchReadOnlyRepository _matchRepository;
	public GetAllMatchesQueryHandler(IMatchReadOnlyRepository matchRepository)
	{
		_matchRepository = matchRepository;
	}
	
	public async Task<IResult<IQueryResponse>> Handle<TQuery>(TQuery query) where TQuery : IQuery
	{
		var results = await _matchRepository.GetAllAsync();
		return Result<GetAllMatchesQueryResponse>.AsOk(new GetAllMatchesQueryResponse
		{
			Matches = results.ToList()
		});
	}
}