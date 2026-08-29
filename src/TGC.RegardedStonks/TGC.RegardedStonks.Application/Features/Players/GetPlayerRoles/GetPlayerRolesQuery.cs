using TGC.Communication.cqrs;

namespace TGC.RegardedStonks.Application.Features.Players.GetPlayerRoles;

public record GetPlayerRolesQuery : BaseQuery
{
	public static GetPlayerRolesQuery Empty()
	{
		return new GetPlayerRolesQuery();
	}
}