using TGC.RegardedStonks.Application.Repositories.Entities;

namespace TGC.RegardedStonks.Application.Repositories;

public interface IMatchReadOnlyRepository
{
	Task<IList<IStockMatchEntity>> GetAllAsync(CancellationToken cancellationToken = default);
	
	Task<IList<IStockMatchEntity>> GetAllAvailableForUserAsync(CancellationToken cancellationToken = default);

	Task<IStockMatchEntity?> GetByIdAsync(Guid id, CancellationToken cancellationToken = default);
}