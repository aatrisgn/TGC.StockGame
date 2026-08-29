using Microsoft.EntityFrameworkCore;
using TGC.RegardedStonks.Application.Features.Players;
using TGC.RegardedStonks.Application.Repositories;
using TGC.RegardedStonks.Infrastructure.Entities;
using TGC.RegardedStonks.Infrastructure.Persistence;

namespace TGC.RegardedStonks.Infrastructure.Repositories;

public class PlayerRepository : IPlayerRepository
{
	private readonly RegardedStonksWriteDbContext _context;
	private readonly IUserContextService _userContextService;

	public PlayerRepository(RegardedStonksWriteDbContext context, IUserContextService userContextService)
	{
		_context = context;
		_userContextService = userContextService;
	}

	public async Task<Guid> AddAsync(string username, Guid oid, string profilePicture, CancellationToken cancellationToken = default)
	{
		var entity = new PlayerEntity()
		{
			Id = Guid.NewGuid(),
			Username = username,
			Oid = oid,
			ProfilePicture = profilePicture,
			Active = true,
			Created = DateTimeOffset.UtcNow,
			CreatedBy = _userContextService.GetUserId()
		};
		
		await _context.Players.AddAsync(entity, cancellationToken);
		return entity.Id;
	}

	public async Task UpdateUsernameAsync(Guid id, string username, CancellationToken cancellationToken = default)
	{
		var entity = await _context.Players.FirstAsync(p => p.Id == id, cancellationToken);
		entity.Username = username;
	}

	public Task<int> SaveChangesAsync(CancellationToken cancellationToken = default) =>
		_context.SaveChangesAsync(cancellationToken);
}