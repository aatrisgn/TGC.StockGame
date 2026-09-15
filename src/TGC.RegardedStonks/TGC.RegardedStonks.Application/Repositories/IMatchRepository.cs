using TGC.RegardedStonks.Domain.Entities;

namespace TGC.RegardedStonks.Application.Repositories;

public interface IMatchRepository
{
	Task<Guid> AddAsync(string name, decimal startingCapital, CancellationToken cancellationToken = default);
	Task<Guid> AddAsync(IStockMatchEntity matchEntity, CancellationToken cancellationToken = default);

	Task UpdateAsync(Guid id, string name, CancellationToken cancellationToken = default);

	Task<bool> DeleteAsync(Guid id, CancellationToken cancellationToken = default);

	Task<int> SaveChangesAsync(CancellationToken cancellationToken = default);
}