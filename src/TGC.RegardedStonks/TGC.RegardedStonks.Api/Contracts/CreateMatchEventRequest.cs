using System.Text.Json;
using TGC.RegardedStonks.Application.Features.Matches.CreateMatchEvent;
using TGC.RegardedStonks.Domain.Enums;

namespace TGC.RegardedStonks.Api.Contracts;

public record CreateMatchEventRequest
{
	public MatchEventType EventType { get; set; }
	public JsonElement Payload { get; set; }

	public static CreateMatchEventCommand ToCommand(CreateMatchEventRequest request, Guid stockMatchId)
	{
		return new CreateMatchEventCommand
		{
			StockMatchId = stockMatchId,
			EventType = request.EventType,
			Payload = request.Payload.GetRawText()
		};
	}
}
