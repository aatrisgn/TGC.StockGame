using TGC.RegardedStonks.Application.Repositories.Entities;

namespace TGC.RegardedStonks.Application.Repositories;

public interface ITemplateStockCompanyReadOnlyRepository
{
	Task<IList<ITemplateStockCompany>> GetAllAsync(CancellationToken cancellationToken = default);

	Task<IReadOnlySet<string>> GetExistingNamesAsync(CancellationToken cancellationToken = default);
}
