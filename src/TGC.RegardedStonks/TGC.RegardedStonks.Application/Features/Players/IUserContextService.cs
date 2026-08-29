namespace TGC.RegardedStonks.Application.Features.Players;

public interface IUserContextService
{
	IDictionary<string, bool> GetUserRoles();
	IList<string> GetUserRolesAsList();
	bool UserIsAdmin();
	Guid GetUserId();
	string GetUserName();
}