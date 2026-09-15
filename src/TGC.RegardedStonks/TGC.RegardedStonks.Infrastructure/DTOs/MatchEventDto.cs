using TGC.RegardedStonks.Domain.Entities;
using TGC.RegardedStonks.Domain.Enums;
using TGC.RegardedStonks.Infrastructure.Entities;

namespace TGC.RegardedStonks.Infrastructure.DTOs;

public class MatchEventDto : IMatchEventEntity
{
	public Guid Id { get; set; }
	public DateTimeOffset Created { get; set; }
	public DateTimeOffset? LastEdited { get; set; }
	public Guid CreatedBy { get; set; }
	public Guid UpdatedBy { get; set; }
	public bool Active { get; set; }
	public Guid StockMatchId { get; set; }
	public MatchEventType EventType { get; set; }
	public string Payload { get; set; }

	public static IMatchEventEntity FromEntity(MatchEventEntity matchEvent)
	{
		return new MatchEventDto()
		{
			Id = matchEvent.Id,
			Created = matchEvent.Created,
			LastEdited = matchEvent.LastEdited,
			CreatedBy = matchEvent.CreatedBy,
			UpdatedBy = matchEvent.UpdatedBy,
			Active = matchEvent.Active,
			StockMatchId = matchEvent.StockMatchId,
			EventType = matchEvent.EventType,
			Payload = matchEvent.Payload
		};
	}
}