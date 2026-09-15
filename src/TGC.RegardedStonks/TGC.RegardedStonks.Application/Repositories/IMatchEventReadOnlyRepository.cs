using TGC.RegardedStonks.Domain.Entities;

namespace TGC.RegardedStonks.Application.Repositories;

public interface IMatchEventReadOnlyRepository
{
	Task<IMatchEventEntity?> GetByIdAsync(Guid id, CancellationToken cancellationToken = default);
}