using TGC.RegardedStonks.Domain.Entities;
using TGC.RegardedStonks.Infrastructure.Entities;

namespace TGC.RegardedStonks.Infrastructure.DTOs;

public class StockCompanyDto : IStockCompanyEntity
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

	public static IStockCompanyEntity FromEntity(StockCompanyEntity stockCompanyEntity)
	{
		return new StockCompanyDto
		{
			Name = stockCompanyEntity.Name,
			ShortName = stockCompanyEntity.ShortName,
			Description = stockCompanyEntity.Description,
			Price = stockCompanyEntity.Price,
			AvailableStocks = stockCompanyEntity.AvailableStocks,
			TotalStocks = stockCompanyEntity.TotalStocks,
			LastReportedRevenue = stockCompanyEntity.LastReportedRevenue,
			LastReportedProfit = stockCompanyEntity.LastReportedProfit,
			LongTermDebt = stockCompanyEntity.LongTermDebt,
			ShortTermDebt = stockCompanyEntity.ShortTermDebt,
			LiquidAssets = stockCompanyEntity.LiquidAssets,
			NonLiquidAssets = stockCompanyEntity.NonLiquidAssets,
			Bankrupt = stockCompanyEntity.Bankrupt,
			StockMatchId = stockCompanyEntity.StockMatchId
		};
	}
}