using Microsoft.EntityFrameworkCore;
using TGC.RegardedStonks.Application.Repositories;
using TGC.RegardedStonks.Application.Repositories.Entities;
using TGC.RegardedStonks.Infrastructure.Persistence;

namespace TGC.RegardedStonks.Infrastructure.ReadOnlyRepositories;

public class TemplateStockCompanyReadOnlyRepository : ITemplateStockCompanyReadOnlyRepository
{
	private readonly RegardedStonksReadOnlyDbContext _context;

	public TemplateStockCompanyReadOnlyRepository(RegardedStonksReadOnlyDbContext context)
	{
		_context = context;
	}

	public async Task<IList<ITemplateStockCompany>> GetAllAsync(CancellationToken cancellationToken = default)
	{
		var entities = await _context.TemplateStockCompanies
			.Where(x => x.Active)
			.ToListAsync(cancellationToken);

		return entities.Cast<ITemplateStockCompany>().ToList();
	}

	public async Task<IReadOnlySet<string>> GetExistingNamesAsync(CancellationToken cancellationToken = default)
	{
		var names = await _context.TemplateStockCompanies
			.Select(x => x.Name)
			.ToListAsync(cancellationToken);

		return names.ToHashSet();
	}
}
