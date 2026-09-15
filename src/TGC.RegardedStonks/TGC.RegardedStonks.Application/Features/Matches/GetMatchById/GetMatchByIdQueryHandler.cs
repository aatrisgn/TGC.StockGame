using TGC.Communication.cqrs;
using TGC.RegardedStonks.Application.Repositories;

namespace TGC.RegardedStonks.Application.Features.Matches.GetMatchById;

public class GetMatchByIdQueryHandler : BaseQueryHandler<GetMatchByIdQuery, GetMatchByIdQueryResponse>, IQueryHandler
{
	private readonly IMatchReadOnlyRepository _matchRepository;
	public GetMatchByIdQueryHandler(IMatchReadOnlyRepository matchRepository)
	{
		_matchRepository = matchRepository;
	}
	
	public async Task<IResult<IQueryResponse>> Handle<TQuery>(TQuery query) where TQuery : IQuery
	{
		var parsedQuery = GetTypedQuery(query);
		var matchEntity = await _matchRepository.GetByIdAsync(parsedQuery.Id);

		if (matchEntity == null)
		{
			return AsNotFound("No match found with id: " + parsedQuery.Id + "");
		}
		
		var response = new GetMatchByIdQueryResponse
		{
			Match = matchEntity
		};

		return AsOk(response);
	}
}