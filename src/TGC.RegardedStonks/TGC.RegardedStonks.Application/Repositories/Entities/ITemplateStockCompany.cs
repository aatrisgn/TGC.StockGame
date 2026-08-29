namespace TGC.RegardedStonks.Application.Repositories.Entities;

public interface ITemplateStockCompany : IBaseEntity
{
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
}