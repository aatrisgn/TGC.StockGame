namespace TGC.RegardedStonks.Application.Repositories;

public interface ITemplateStockCompanyRepository
{
	Task<Guid> AddAsync(
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
		CancellationToken cancellationToken = default);

	Task<int> SaveChangesAsync(CancellationToken cancellationToken = default);
}
