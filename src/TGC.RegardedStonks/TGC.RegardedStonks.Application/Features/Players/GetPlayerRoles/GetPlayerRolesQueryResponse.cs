using TGC.Communication.cqrs;

namespace TGC.RegardedStonks.Application.Features.Players.GetPlayerRoles;

public class GetPlayerRolesQueryResponse : IQueryResponse
{
	public required List<string> Roles { get; set; }
}