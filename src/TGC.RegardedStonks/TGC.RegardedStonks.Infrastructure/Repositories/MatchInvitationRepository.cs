using TGC.RegardedStonks.Application.Repositories;
using TGC.RegardedStonks.Domain.Entities;
using TGC.RegardedStonks.Domain.Enums;
using TGC.RegardedStonks.Infrastructure.Entities;
using TGC.RegardedStonks.Infrastructure.Persistence;

namespace TGC.RegardedStonks.Infrastructure.Repositories;

public class MatchInvitationRepository : IMatchInvitationRepository
{
	private readonly RegardedStonksReadOnlyDbContext _context;

	public MatchInvitationRepository(RegardedStonksReadOnlyDbContext context)
	{
		_context = context;
	}
	
	public async Task<Guid> AddAsync(Guid playerId, Guid invitedBy, Guid matchId, CancellationToken cancellationToken = default)
	{
		var newInvitation = new MatchInvitationEntity
		{
			Id = Guid.NewGuid(),
			Status = MatchInvitationStatus.Invited,
			PlayerId = playerId,
			StockMatchId = matchId,
			InviterId = invitedBy,
			Created = DateTimeOffset.UtcNow,
			CreatedBy = invitedBy,
			UpdatedBy = invitedBy,
			LastEdited = DateTimeOffset.UtcNow,
			Active = true
		};
		
		await _context.MatchInvitations.AddAsync(newInvitation, cancellationToken);
		return newInvitation.Id;
	}

	public Task<Guid> AddAsync(IMatchInvitationEntity invitationEntity)
	{
		throw new NotImplementedException();
	}

	public Task<bool> AcceptAsync(Guid invitationId)
	{
		throw new NotImplementedException();
	}

	public Task<bool> DeclineAsync(Guid invitationId)
	{
		throw new NotImplementedException();
	}
	
	public Task<int> SaveChangesAsync(CancellationToken cancellationToken = default) =>
		_context.SaveChangesAsync(cancellationToken);
}