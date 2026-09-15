using TGC.RegardedStonks.Domain.Entities;
using TGC.RegardedStonks.Domain.Enums;
using TGC.RegardedStonks.Infrastructure.Entities;

namespace TGC.RegardedStonks.Infrastructure.DTOs;

public class StockMatchDto : IStockMatchEntity
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

	public static IStockMatchEntity FromEntity(StockMatchEntity relevantStockMatch)
	{
		return new StockMatchDto
		{
			Id = relevantStockMatch.Id,
			Name = relevantStockMatch.Name,
			Created = relevantStockMatch.Created,
			LastEdited = relevantStockMatch.LastEdited,
			CreatedBy = relevantStockMatch.CreatedBy,
			UpdatedBy = relevantStockMatch.UpdatedBy,
			Active = relevantStockMatch.Active,
			Status = relevantStockMatch.Status,
			EndDateTime = relevantStockMatch.EndDateTime,
			StartingCapital = relevantStockMatch.StartingCapital,
			Players = relevantStockMatch.Players.Select(PlayerDto.FromEntity).ToList(),
			StockCompanies = relevantStockMatch.StockCompanies.Select(StockCompanyDto.FromEntity).ToList()
		};
	}
}