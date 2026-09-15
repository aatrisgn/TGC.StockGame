using TGC.Communication.cqrs;
using TGC.RegardedStonks.Application.Repositories;

namespace TGC.RegardedStonks.Application.Features.Players.GetPlayerDetailsSelf;

public class GetPlayerDetailsSelfQueryHandler : BaseQueryHandler<GetPlayerDetailsSelfQuery, GetPlayerDetailsSelfQueryResponse>, IQueryHandler
{
	private readonly IUserContextService _userContextService;
	private readonly IPlayerReadOnlyRepository _playerReadOnlyRepository;

	public GetPlayerDetailsSelfQueryHandler(IUserContextService userContextService, IPlayerReadOnlyRepository playerReadOnlyRepository)
	{
		_userContextService = userContextService;
		_playerReadOnlyRepository = playerReadOnlyRepository;
	}

	public async Task<IResult<IQueryResponse>> Handle<TQuery>(TQuery query) where TQuery : IQuery
	{
		var oid = _userContextService.GetUserId();
		var playerEntity = await _playerReadOnlyRepository.GetByOidAsync(oid);

		if (playerEntity == null)
		{
			return AsNotFound("No player found");
		}

		var response = new GetPlayerDetailsSelfQueryResponse
		{
			Id = playerEntity.Id,
			Oid = playerEntity.Oid,
			Username = playerEntity.Username,
			ProfilePicture = playerEntity.ProfilePicture,
			Active = playerEntity.Active
		};

		return AsOk(response);
	}
}
