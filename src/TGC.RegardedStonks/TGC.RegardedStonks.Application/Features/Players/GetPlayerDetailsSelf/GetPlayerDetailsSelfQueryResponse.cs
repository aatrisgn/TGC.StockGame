using TGC.Communication.cqrs;

namespace TGC.RegardedStonks.Application.Features.Players.GetPlayerDetailsSelf;

public class GetPlayerDetailsSelfQueryResponse : BaseResponse
{
	public Guid Id { get; set; }
	public Guid Oid { get; set; }
	public string Username { get; set; }
	public string ProfilePicture { get; set; }
	public bool Active { get; set; }
}
