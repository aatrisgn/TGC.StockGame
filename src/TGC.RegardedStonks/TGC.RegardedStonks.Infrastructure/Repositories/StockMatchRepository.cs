using Microsoft.EntityFrameworkCore;
using TGC.RegardedStonks.Application.Features.Players;
using TGC.RegardedStonks.Application.Repositories;
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

	public async Task UpdateAsync(Guid id, string name, CancellationToken cancellationToken = default)
	{
		var entity = await _context.StockMatches.FirstOrDefaultAsync(x => x.Id == id, cancellationToken)
			?? throw new KeyNotFoundException($"Stock match '{id}' was not found.");

		entity.Name = name;
		entity.LastEdited = DateTimeOffset.UtcNow;
		entity.UpdatedBy = _userContextService.GetUserId();
	}

	public async Task DeleteAsync(Guid id, CancellationToken cancellationToken = default)
	{
		var entity = await _context.StockMatches.FirstOrDefaultAsync(x => x.Id == id, cancellationToken)
			?? throw new KeyNotFoundException($"Stock match '{id}' was not found.");

		entity.Active = false;
		entity.LastEdited = DateTimeOffset.UtcNow;
		entity.UpdatedBy = _userContextService.GetUserId();
	}

	public Task<int> SaveChangesAsync(CancellationToken cancellationToken = default) =>
		_context.SaveChangesAsync(cancellationToken);
}
