using TGC.RegardedStonks.Domain.Entities;

namespace TGC.RegardedStonks.Application.Repositories;

public interface IMatchInvitationReadOnlyRepository
{
	public Task<bool> ExistsAsync(Guid invitationId);
	public Task<bool> ExistsAsync(Guid playerId, Guid matchId);
	public Task<IEnumerable<IMatchInvitationEntity>> GetAllByMatchId(Guid matchId, CancellationToken cancellationToken = default);
	public Task<IEnumerable<IMatchInvitationEntity>> GetAllByPlayerId(Guid playerId, CancellationToken cancellationToken = default);
	public Task<IEnumerable<IMatchInvitationEntity>> GetAllByInvitedBy(Guid invitedBy, CancellationToken cancellationToken = default);
}