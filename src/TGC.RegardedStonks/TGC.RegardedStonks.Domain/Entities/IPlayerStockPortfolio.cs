namespace TGC.RegardedStonks.Domain.Entities;

public interface IPlayerStockPortfolio : IBaseEntity
{
	public Guid PlayerPortfolioId { get; set; }
	public Guid StockCompanyId { get; set; }
	public int Quantity { get; set; }
}
