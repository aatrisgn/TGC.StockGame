using TGC.RegardedStonks.Domain.Enums;

namespace TGC.RegardedStonks.Application.Repositories;

public interface IMatchEventRepository
{
	Task<Guid> AddAsync(Guid stockMatchId, MatchEventType eventType, string matchName,
		CancellationToken cancellationToken = default);
	Task<int> SaveChangesAsync(CancellationToken cancellationToken = default);
}
