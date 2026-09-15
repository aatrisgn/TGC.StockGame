using TGC.RegardedStonks.Domain.Entities;

namespace TGC.RegardedStonks.Domain;

public class StockCompanyEntity : IStockCompanyEntity
{
	public Guid Id { get; set; }
	public DateTimeOffset Created { get; set; }
	public DateTimeOffset? LastEdited { get; set; }
	public Guid CreatedBy { get; set; }
	public Guid UpdatedBy { get; set; }
	public bool Active { get; set; }
	public string Name { get; set; }
	public string ShortName { get; set; }
	public string Description { get; set; }
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
}