using TGC.RegardedStonks.Domain.Enums;

namespace TGC.RegardedStonks.Application.Repositories.Entities;

public interface IPlayerPortfolio : IBaseEntity
{
	public Guid StockMatchId { get; set; }
	public Guid PlayerId { get; set; }
	public decimal Cash { get; set; }
	public PortfolioStatus Status { get; set; }
	public DateTimeOffset? PrisonReleaseAt { get; set; }
}
