using TGC.RegardedStonks.Domain.Entities;
using TGC.RegardedStonks.Infrastructure.Entities;

namespace TGC.RegardedStonks.Infrastructure.DTOs;

public class TemplateStockCompanyDto : ITemplateStockCompany
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

	public static ITemplateStockCompany FromEntity(TemplateStockCompanyEntity relevantStockMatch)
	{
		return new TemplateStockCompanyDto
		{
			Id = relevantStockMatch.Id,
			Created = relevantStockMatch.Created,
			LastEdited = relevantStockMatch.LastEdited,
			CreatedBy = relevantStockMatch.CreatedBy,
			UpdatedBy = relevantStockMatch.UpdatedBy,
			Active = relevantStockMatch.Active,
			Name = relevantStockMatch.Name,
			ShortName = relevantStockMatch.ShortName,
			Description = relevantStockMatch.Description,
			Price = relevantStockMatch.Price,
			NonLiquidAssets = relevantStockMatch.NonLiquidAssets,
			LiquidAssets = relevantStockMatch.LiquidAssets,
			ShortTermDebt = relevantStockMatch.ShortTermDebt,
			LastReportedRevenue = relevantStockMatch.LastReportedRevenue,
			LastReportedProfit = relevantStockMatch.LastReportedProfit,
			LongTermDebt = relevantStockMatch.LongTermDebt,
			AvailableStocks = relevantStockMatch.AvailableStocks,
			TotalStocks = relevantStockMatch.TotalStocks
		};
	}
}