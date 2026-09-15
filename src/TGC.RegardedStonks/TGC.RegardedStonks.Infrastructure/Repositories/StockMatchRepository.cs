using Microsoft.EntityFrameworkCore;
using TGC.RegardedStonks.Application.Features.Players;
using TGC.RegardedStonks.Application.Repositories;
using TGC.RegardedStonks.Domain.Entities;
using TGC.RegardedStonks.Infrastructure.Entities;
using TGC.RegardedStonks.Infrastructure.Persistence;

namespace TGC.RegardedStonks.Infrastructure.Repositories;

public class StockMatchRepository : IMatchRepository
{
	private readonly RegardedStonksWriteDbContext _context;
	private readonly IUserContextService _userContextService;

	public StockMatchRepository(RegardedStonksWriteDbContext context, IUserContextService userContextService)
	{
		_context = context;
		_userContextService = userContextService;
	}

	public async Task<Guid> AddAsync(string name, decimal startingCapital, CancellationToken cancellationToken = default)
	{
		var entity = new StockMatchEntity
		{
			Id = Guid.NewGuid(),
			Name = name,
			StartingCapital = startingCapital,
			Created = DateTimeOffset.UtcNow,
			CreatedBy = _userContextService.GetUserId(),
			Active = true
		};

		await _context.StockMatches.AddAsync(entity, cancellationToken);

		return entity.Id;
	}
	
	public async Task<Guid> AddAsync(IStockMatchEntity matchEntity, CancellationToken cancellationToken = default)
	{
		var efEntity = StockMatchEntity.FromDomain(matchEntity);
		
		efEntity.Created = DateTimeOffset.UtcNow;
		efEntity.CreatedBy = _userContextService.GetUserId();
		efEntity.UpdatedBy= _userContextService.GetUserId();
		efEntity.LastEdited = DateTimeOffset.UtcNow;
		efEntity.Active = true;
		efEntity.Id = Guid.NewGuid();

		await _context.StockMatches.AddAsync(efEntity, cancellationToken);

		return efEntity.Id;
	}

	public async Task UpdateAsync(Guid id, string name, CancellationToken cancellationToken = default)
	{
		var entity = await _context.StockMatches.FirstOrDefaultAsync(x => x.Id == id, cancellationToken)
			?? throw new KeyNotFoundException($"Stock match '{id}' was not found.");

		entity.Name = name;
		entity.LastEdited = DateTimeOffset.UtcNow;
		entity.UpdatedBy = _userContextService.GetUserId();
	}

	public async Task<bool> DeleteAsync(Guid id, CancellationToken cancellationToken = default)
	{
		var entity = await _context.StockMatches.FirstOrDefaultAsync(x => x.Id == id, cancellationToken);
		
		if(entity == null) return false;
		
		entity.Active = false;
		entity.LastEdited = DateTimeOffset.UtcNow;
		entity.UpdatedBy = _userContextService.GetUserId();
		
		return true;
	}

	public Task<int> SaveChangesAsync(CancellationToken cancellationToken = default) =>
		_context.SaveChangesAsync(cancellationToken);
}
