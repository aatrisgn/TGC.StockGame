using TGC.Communication.cqrs;

namespace TGC.RegardedStonks.Application.Features.Players.GetPlayerRoles;

public class GetPlayerRolesQueryHandler : BaseQueryHandler<GetPlayerRolesQuery>, IQueryHandler
{
	private readonly IUserContextService _userContextService;

	public GetPlayerRolesQueryHandler(IUserContextService userContextService)
	{
		_userContextService = userContextService;
	}

	public async Task<IResult<IQueryResponse>> Handle<TQuery>(TQuery query) where TQuery : IQuery
	{
		var results = _userContextService.GetUserRolesAsList();
		var response = new GetPlayerRolesQueryResponse
		{
			Roles = results.ToList()
		};
		
		return Result<GetPlayerRolesQueryResponse>.AsOk(response);
	}
}