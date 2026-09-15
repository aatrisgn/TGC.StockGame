using TGC.RegardedStonks.Domain.Entities;
using TGC.RegardedStonks.Domain.Enums;

namespace TGC.RegardedStonks.Domain;

public class StockMatch :IStockMatchEntity
{
	public Guid Id { get; set; }
	public DateTimeOffset Created { get; set; }
	public DateTimeOffset? LastEdited { get; set; }
	public Guid CreatedBy { get; set; }
	public Guid UpdatedBy { get; set; }
	public bool Active { get; set; }
	public string Name { get; set; }
	public MatchStatus Status { get; set; }
	public DateTimeOffset? EndDateTime { get; set; }
	public decimal StartingCapital { get; set; }
	public List<IStockCompanyEntity> StockCompanies { get; set; }
	public List<IPlayerEntity> Players { get; set; }
	public List<IPlayerPortfolio> PlayerPortfolios { get; set; }
	public List<IMatchEventEntity> MatchEvents { get; set; }
}