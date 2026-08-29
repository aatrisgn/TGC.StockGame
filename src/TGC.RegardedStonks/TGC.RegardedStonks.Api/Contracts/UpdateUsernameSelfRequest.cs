using TGC.RegardedStonks.Application.Features.Players.UpdateUsernameSelf;

namespace TGC.RegardedStonks.Api.Contracts;

public record UpdateUsernameSelfRequest
{
	public string Username { get; set; }

	public static UpdateUsernameSelfCommand ToCommand(UpdateUsernameSelfRequest request)
	{
		return new UpdateUsernameSelfCommand()
		{
			Username = request.Username
		};
	}
}
