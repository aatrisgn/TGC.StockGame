using TGC.RegardedStonks.Domain.Entities;
using TGC.RegardedStonks.Domain.Enums;

namespace TGC.RegardedStonks.Application.Events;

public interface IMatchEventHandler
{
	bool Accepts(MatchEventType eventType);
	Task HandleAsync(IMatchEventEntity matchEventEntity, CancellationToken cancellationToken);
}
