using TGC.Communication.cqrs;
using TGC.RegardedStonks.Application.Repositories;

namespace TGC.RegardedStonks.Application.Features.Players.GetAllPlayers;

public class GetAllPlayersQueryHandler: BaseQueryHandler<GetAllPlayersQuery>, IQueryHandler
{
	private readonly IPlayerReadOnlyRepository _playerRepository;
	public GetAllPlayersQueryHandler(IPlayerReadOnlyRepository playerRepository)
	{
		_playerRepository = playerRepository;
	}
	
	public async Task<IResult<IQueryResponse>> Handle<TQuery>(TQuery query) where TQuery : IQuery
	{
		var allPlayers = await _playerRepository.GetAllAsync();

		return Result<GetAllPlayersQueryResponse>.AsOk(new GetAllPlayersQueryResponse
		{
			Players = allPlayers.ToList()
		});
	}
}