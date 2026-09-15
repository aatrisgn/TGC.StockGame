using Microsoft.EntityFrameworkCore;
using TGC.RegardedStonks.Domain.Entities;
using TGC.RegardedStonks.Domain.Enums;

namespace TGC.RegardedStonks.Infrastructure.Entities;

public class StockMatchEntity : BaseEntity
{
	public string Name { get; set; } = string.Empty;
	public MatchStatus Status { get; set; }
	public DateTimeOffset? EndDateTime { get; set; }
	public decimal StartingCapital { get; set; }
	public List<StockCompanyEntity> StockCompanies { get; set; } = [];
	public List<StockMatchPlayerEntity> StockMatchPlayers { get; set; } = [];
	public List<PlayerEntity> Players { get; set; } = [];
	public List<PlayerPortfolioEntity> PlayerPortfolios { get; set; } = [];
	public List<MatchEventEntity> MatchEvents { get; set; } = [];
	public List<MatchInvitationEntity> Invitations { get; set; } = [];

	public static StockMatchEntity FromDomain(IStockMatchEntity matchEntity)
	{
		return new StockMatchEntity
		{
			Name = matchEntity.Name,
			EndDateTime = matchEntity.EndDateTime,
			StartingCapital = matchEntity.StartingCapital,
			StockCompanies = matchEntity.StockCompanies.Select(StockCompanyEntity.FromDomain).ToList(),
		};
	}
}
