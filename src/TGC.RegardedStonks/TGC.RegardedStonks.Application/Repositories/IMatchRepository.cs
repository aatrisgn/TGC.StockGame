namespace TGC.RegardedStonks.Application.Repositories;

public interface IMatchRepository
{
	Task<Guid> AddAsync(string name, decimal startingCapital, CancellationToken cancellationToken = default);

	Task UpdateAsync(Guid id, string name, CancellationToken cancellationToken = default);

	Task DeleteAsync(Guid id, CancellationToken cancellationToken = default);

	Task<int> SaveChangesAsync(CancellationToken cancellationToken = default);
}