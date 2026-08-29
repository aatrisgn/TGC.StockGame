using TGC.RegardedStonks.Application.Repositories.Entities;

namespace TGC.RegardedStonks.Infrastructure.Entities;

public class StockCompanyEntity : BaseEntity
{
	public string Name { get; set; } = string.Empty;
	public string ShortName { get; set; } = string.Empty;
	public string Description { get; set; } = string.Empty;
	public decimal Price { get; set; }
	public int AvailableStocks { get; set; }
	public int TotalStocks { get; set; }
	public decimal? LastReportedRevenue { get; set; }
	public decimal? LastReportedProfit { get; set; }
	public decimal? LongTermDebt { get; set; }
	public decimal? ShortTermDebt { get; set; }
	public decimal? LiquidAssets { get; set; }
	public decimal? NonLiquidAssets { get; set; }
	public bool Bankrupt { get; set; }
	public Guid StockMatchId { get; set; }
	public StockMatchEntity StockMatch { get; set; }
	public List<PlayerStockPortfolioEntity> PlayerStockPortfolios { get; set; } = [];
}
