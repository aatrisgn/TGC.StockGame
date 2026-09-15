using TGC.RegardedStonks.Domain.Enums;

namespace TGC.RegardedStonks.Infrastructure.Entities;

public class PlayerPortfolioEntity : BaseEntity
{
	public Guid StockMatchId { get; set; }
	public Guid PlayerId { get; set; }
	public decimal Cash { get; set; }
	public PortfolioStatus Status { get; set; }
	public DateTimeOffset? PrisonReleaseAt { get; set; }
	public StockMatchEntity StockMatch { get; set; }
	public PlayerEntity Player { get; set; }
	public List<PlayerStockPortfolioEntity> PlayerStockPortfolios { get; set; } = [];
}
