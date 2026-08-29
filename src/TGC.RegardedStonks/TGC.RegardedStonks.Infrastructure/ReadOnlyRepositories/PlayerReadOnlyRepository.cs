using Microsoft.EntityFrameworkCore;
using TGC.RegardedStonks.Application.Repositories;
using TGC.RegardedStonks.Application.Repositories.Entities;
using TGC.RegardedStonks.Infrastructure.DTOs;
using TGC.RegardedStonks.Infrastructure.Persistence;

namespace TGC.RegardedStonks.Infrastructure.ReadOnlyRepositories;

public class PlayerReadOnlyRepository : IPlayerReadOnlyRepository
{
	private readonly RegardedStonksReadOnlyDbContext _context;
	
	public PlayerReadOnlyRepository(RegardedStonksReadOnlyDbContext context)
	{
		_context = context;
	}
	
	public async Task<IPlayerEntity?> GetByUsernameAsync(string username)
	{
		var locatedPlayer = await _context.Players.FirstOrDefaultAsync(p => p.Username == username);
		return locatedPlayer != null ? PlayerDto.FromEntity(locatedPlayer) : null;
	}

	public async Task<IPlayerEntity?> GetByIdAsync(Guid id)
	{
		var locatedPlayer = await _context.Players.FirstOrDefaultAsync(p => p.Id == id);
		return locatedPlayer != null ? PlayerDto.FromEntity(locatedPlayer) : null;
	}

	public async Task<IList<IPlayerEntity>> GetAllAsync()
	{
		var allPlayers = await _context.Players.ToListAsync();
		return allPlayers.Select(PlayerDto.FromEntity).ToList();
	}

	public async Task<bool> ExistsByOidAsync(Guid oid)
	{
		var locatedPlayer = await _context.Players.AnyAsync(p => p.Oid == oid);
		return locatedPlayer;
	}

	public async Task<IPlayerEntity?> GetByOidAsync(Guid oid)
	{
		var locatedPlayer = await _context.Players.FirstOrDefaultAsync(p => p.Oid == oid);
		return locatedPlayer != null ? PlayerDto.FromEntity(locatedPlayer) : null;
	}
}