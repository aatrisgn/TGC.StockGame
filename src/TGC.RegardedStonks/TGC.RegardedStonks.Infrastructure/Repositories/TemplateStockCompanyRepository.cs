using Microsoft.EntityFrameworkCore;
using TGC.RegardedStonks.Application.Repositories;
using TGC.RegardedStonks.Infrastructure.Entities;
using TGC.RegardedStonks.Infrastructure.Persistence;

namespace TGC.RegardedStonks.Infrastructure.Repositories;

public class TemplateStockCompanyRepository : ITemplateStockCompanyRepository
{
	private readonly RegardedStonksWriteDbContext _context;

	public TemplateStockCompanyRepository(RegardedStonksWriteDbContext context)
	{
		_context = context;
	}

	public async Task<Guid> AddAsync(
		string name,
		string shortName,
		string description,
		decimal price,
		int availableStocks,
		Guid createdBy,
		int? totalStocks = null,
		decimal? lastReportedRevenue = null,
		decimal? lastReportedProfit = null,
		decimal? longTermDebt = null,
		decimal? shortTermDebt = null,
		decimal? liquidAssets = null,
		decimal? nonLiquidAssets = null,
		CancellationToken cancellationToken = default)
	{
		var entity = new TemplateStockCompanyEntity
		{
			Id = Guid.NewGuid(),
			Name = name,
			ShortName = shortName,
			Description = description,
			Price = price,
			AvailableStocks = availableStocks,
			TotalStocks = totalStocks ?? availableStocks,
			LastReportedRevenue = lastReportedRevenue,
			LastReportedProfit = lastReportedProfit,
			LongTermDebt = longTermDebt,
			ShortTermDebt = shortTermDebt,
			LiquidAssets = liquidAssets,
			NonLiquidAssets = nonLiquidAssets,
			Created = DateTimeOffset.UtcNow,
			CreatedBy = createdBy,
			Active = true
		};

		await _context.TemplateStockCompanies.AddAsync(entity, cancellationToken);

		return entity.Id;
	}

	public Task<int> SaveChangesAsync(CancellationToken cancellationToken = default) =>
		_context.SaveChangesAsync(cancellationToken);
}
