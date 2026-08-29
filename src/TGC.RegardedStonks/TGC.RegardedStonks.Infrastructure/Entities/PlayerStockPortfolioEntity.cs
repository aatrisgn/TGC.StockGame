using TGC.RegardedStonks.Application.Repositories.Entities;

namespace TGC.RegardedStonks.Infrastructure.Entities;

public class PlayerStockPortfolioEntity : BaseEntity
{
	public Guid PlayerPortfolioId { get; set; }
	public Guid StockCompanyId { get; set; }
	public int Quantity { get; set; }
	public PlayerPortfolioEntity PlayerPortfolio { get; set; }
	public StockCompanyEntity StockCompany { get; set; }
}
