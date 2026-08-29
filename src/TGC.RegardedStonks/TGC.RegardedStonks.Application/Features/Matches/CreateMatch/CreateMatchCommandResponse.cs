using TGC.Communication.cqrs;

namespace TGC.RegardedStonks.Application.Features.Matches.CreateMatch;

public class CreateMatchCommandResponse : BaseResponse
{
	public Guid Id { get; set; }
	public string Name { get; set; }
}