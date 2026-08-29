using System.Text.Json;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using TGC.RegardedStonks.Application.Features.Players;
using TGC.RegardedStonks.Application.Repositories;
using TGC.RegardedStonks.Domain.Enums;
using TGC.RegardedStonks.Infrastructure.Entities;
using TGC.RegardedStonks.Infrastructure.Persistence;

namespace TGC.RegardedStonks.Infrastructure.Repositories;

public class MatchEventRepository : IMatchEventRepository
{
	private readonly RegardedStonksWriteDbContext _context;
	private readonly ILogger<MatchEventRepository> _logger;
	private readonly IUserContextService _userContextService;

	public MatchEventRepository(RegardedStonksWriteDbContext context, ILogger<MatchEventRepository> logger, IUserContextService userContextService)
	{
		_context = context;
		_logger = logger;
		 _userContextService = userContextService;
	}

	public async Task<Guid> AddAsync(Guid stockMatchId, MatchEventType eventType, string matchName, CancellationToken cancellationToken = default)
	{
		var entity = new MatchEventEntity
		{
			Id = Guid.NewGuid(),
			StockMatchId = stockMatchId,
			EventType = eventType,
			Payload = JsonSerializer.Serialize(string.Empty),
			Created = DateTimeOffset.UtcNow,
			CreatedBy = _userContextService.GetUserId(),
			Active = true
		};
		await _context.MatchEvents.AddAsync(entity, cancellationToken);
		return entity.Id;
	}

	public Task<int> SaveChangesAsync(CancellationToken cancellationToken = default) =>
		_context.SaveChangesAsync(cancellationToken);
}
