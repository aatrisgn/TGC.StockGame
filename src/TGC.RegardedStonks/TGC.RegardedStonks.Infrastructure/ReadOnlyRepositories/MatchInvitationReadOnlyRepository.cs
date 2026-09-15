using TGC.RegardedStonks.Application.Repositories;
using TGC.RegardedStonks.Domain.Entities;

namespace TGC.RegardedStonks.Infrastructure.ReadOnlyRepositories;

public class MatchInvitationReadOnlyRepository : IMatchInvitationReadOnlyRepository
{
	public Task<bool> ExistsAsync(Guid invitationId)
	{
		throw new NotImplementedException();
	}

	public Task<bool> ExistsAsync(Guid playerId, Guid matchId)
	{
		throw new NotImplementedException();
	}

	public Task<IEnumerable<IMatchInvitationEntity>> GetAllByMatchId(Guid matchId, CancellationToken cancellationToken = default)
	{
		throw new NotImplementedException();
	}

	public Task<IEnumerable<IMatchInvitationEntity>> GetAllByPlayerId(Guid playerId, CancellationToken cancellationToken = default)
	{
		throw new NotImplementedException();
	}

	public Task<IEnumerable<IMatchInvitationEntity>> GetAllByInvitedBy(Guid invitedBy, CancellationToken cancellationToken = default)
	{
		throw new NotImplementedException();
	}
}