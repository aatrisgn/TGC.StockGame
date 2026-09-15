using TGC.RegardedStonks.Domain.Entities;

namespace TGC.RegardedStonks.Application.Repositories;

public interface IMatchInvitationRepository
{
	public Task<Guid> AddAsync(Guid playerId, Guid invitedBy, Guid matchId, CancellationToken cancellationToken = default);
	public Task<Guid> AddAsync(IMatchInvitationEntity invitationEntity);
	public Task<bool> AcceptAsync(Guid invitationId);
	public Task<bool> DeclineAsync(Guid invitationId);
	public Task<int> SaveChangesAsync(CancellationToken cancellationToken = default);
}