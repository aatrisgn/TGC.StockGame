namespace TGC.RegardedStonks.Application.Repositories;

public interface IPlayerRepository
{
	public Task<Guid> AddAsync(string username, Guid oid, string profilePicture, CancellationToken cancellationToken = default);
	Task UpdateUsernameAsync(Guid id, string username, CancellationToken cancellationToken = default);
	Task<int> SaveChangesAsync(CancellationToken cancellationToken = default);
}