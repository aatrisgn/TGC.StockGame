using TGC.RegardedStonks.Domain.Enums;

namespace TGC.RegardedStonks.Domain.Entities;

public interface IStockMatchEntity : IBaseEntity
{
	string Name { get; set; }
	public MatchStatus Status { get; set; }
	public DateTimeOffset? EndDateTime { get; set; }
	public decimal StartingCapital { get; set; }
	public List<IStockCompanyEntity> StockCompanies { get; set; }
	public List<IPlayerEntity> Players { get; set; }
	public List<IPlayerPortfolio> PlayerPortfolios { get; set; }
	public List<IMatchEventEntity> MatchEvents { get; set; }
}