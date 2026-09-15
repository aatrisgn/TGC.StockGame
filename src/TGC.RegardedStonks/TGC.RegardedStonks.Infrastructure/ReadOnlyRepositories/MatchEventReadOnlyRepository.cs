using Microsoft.EntityFrameworkCore;
using TGC.RegardedStonks.Application.Repositories;
using TGC.RegardedStonks.Domain.Entities;
using TGC.RegardedStonks.Infrastructure.DTOs;
using TGC.RegardedStonks.Infrastructure.Persistence;

namespace TGC.RegardedStonks.Infrastructure.ReadOnlyRepositories;

public class MatchEventReadOnlyRepository : IMatchEventReadOnlyRepository
{
	private readonly RegardedStonksReadOnlyDbContext _context;

	public MatchEventReadOnlyRepository(RegardedStonksReadOnlyDbContext context)
	{
		_context = context;
	}
	
	public async Task<IMatchEventEntity?> GetByIdAsync(Guid id, CancellationToken cancellationToken = default)
	{
		var matchEvent = await _context.MatchEvents
			.FirstOrDefaultAsync(m => m.Id == id, cancellationToken);
		
		return matchEvent != null ? MatchEventDto.FromEntity(matchEvent) : null ;
	}
}