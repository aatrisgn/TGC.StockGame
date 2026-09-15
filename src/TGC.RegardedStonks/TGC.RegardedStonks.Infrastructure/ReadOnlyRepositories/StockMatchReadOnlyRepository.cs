using Microsoft.EntityFrameworkCore;
using TGC.RegardedStonks.Application.Features.Players;
using TGC.RegardedStonks.Application.Repositories;
using TGC.RegardedStonks.Domain.Entities;
using TGC.RegardedStonks.Infrastructure.DTOs;
using TGC.RegardedStonks.Infrastructure.Persistence;

namespace TGC.RegardedStonks.Infrastructure.ReadOnlyRepositories;

public class StockMatchReadOnlyRepository : IMatchReadOnlyRepository
{
	private readonly RegardedStonksReadOnlyDbContext _context;
	private readonly IUserContextService _userContextService;

	public StockMatchReadOnlyRepository(RegardedStonksReadOnlyDbContext context, IUserContextService userContextService)
	{
		_context = context;
		_userContextService = userContextService;
	}

	public async Task<IList<IStockMatchEntity>> GetAllAsync(CancellationToken cancellationToken = default)
	{
		var entities = await _context.StockMatches
			.Where(x => x.Active)
			.ToListAsync(cancellationToken);

		return entities.Select(StockMatchDto.FromEntity).ToList();
	}

	public async Task<IList<IStockMatchEntity>> GetAllAvailableForUserAsync(CancellationToken cancellationToken = default)
	{
		var userOid = _userContextService.GetUserId();
		
		var relevantMatches = await _context.StockMatches
			.Where(x => x.Active && (
				x.CreatedBy == userOid || x.Players.Any(p => p.Oid == userOid)
				)).ToListAsync(cancellationToken);

		return relevantMatches.Select(StockMatchDto.FromEntity).ToList();
	}

	public async Task<IStockMatchEntity?> GetByIdAsync(Guid id, CancellationToken cancellationToken = default)
	{
		var userOid = _userContextService.GetUserId();
		
		var relevantStockMatch = await _context.StockMatches
			.Where(x => x.Active && x.Id == id && (
				x.CreatedBy == userOid || x.Players.Any(p => p.Oid == userOid)
			))
			.Include(x => x.StockCompanies)
			.FirstOrDefaultAsync(cancellationToken);
		
		return relevantStockMatch != null ? StockMatchDto.FromEntity(relevantStockMatch) : null ;
	}

	public Task<bool> ExistsAsync(Guid matchId)
	{
		throw new NotImplementedException();
	}
}
