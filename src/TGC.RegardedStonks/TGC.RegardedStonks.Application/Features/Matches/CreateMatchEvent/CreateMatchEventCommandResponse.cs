using TGC.Communication.cqrs;
using TGC.RegardedStonks.Domain.Enums;

namespace TGC.RegardedStonks.Application.Features.Matches.CreateMatchEvent;

public class CreateMatchEventCommandResponse : BaseResponse
{
	public Guid Id { get; set; }
	public string Name { get; set; }
}
