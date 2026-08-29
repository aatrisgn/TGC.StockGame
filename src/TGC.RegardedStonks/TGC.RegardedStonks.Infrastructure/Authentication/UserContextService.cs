using System.Security.Claims;
using Microsoft.AspNetCore.Http;
using Microsoft.Identity.Web;
using TGC.RegardedStonks.Application.Features.Players;

namespace TGC.RegardedStonks.Infrastructure.Authentication;

public class UserContextService : IUserContextService
{
	private readonly IHttpContextAccessor _httpContextAccessor;
	
	private Guid _userId = Guid.Empty;
	private string _userName;
	private IDictionary<string, bool> _userRoles = new Dictionary<string, bool>();
	
	public UserContextService(IHttpContextAccessor httpContextAccessor)
	{
		_httpContextAccessor = httpContextAccessor;
	}
	
	public IDictionary<string, bool> GetUserRoles()
	{
		if(_userRoles.Any()) return _userRoles;
		var roles = _httpContextAccessor.HttpContext?.User?.FindFirst(ClaimTypes.Role)?.Value;
		//Whatever --> change
		var mappedRoles = roles?.Split(',')?.ToDictionary(role => role, role => true) ?? new Dictionary<string, bool>();
		
		_userRoles = mappedRoles;

		return mappedRoles;
	}

	public IList<string> GetUserRolesAsList()
	{
		var roles = _httpContextAccessor.HttpContext?.User?.FindFirst(ClaimTypes.Role)?.Value;
		return roles?.Split(',') ?? Array.Empty<string>();
	}

	public bool UserIsAdmin()
	{
		var roles = GetUserRoles();
		return roles.ContainsKey("MatchAdmin"); //Move this magic string to constant somewhere
	}

	public Guid GetUserId()
	{
		if(_userId != Guid.Empty) return _userId;
		var oid = _httpContextAccessor.HttpContext?.User?.FindFirst(ClaimConstants.ObjectId);
		
		var userId = Guid.Parse(oid?.Value ?? string.Empty);

		return userId;
	}

	public string GetUserName()
	{
		if (!string.IsNullOrEmpty(_userName)) return _userName;
		_userName = _httpContextAccessor.HttpContext?.User?.FindFirst(ClaimConstants.Name)?.Value ?? string.Empty;
		return _userName;
	}
}