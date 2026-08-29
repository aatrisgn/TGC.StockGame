using TGC.RegardedStonks.Application.Repositories.Entities;

namespace TGC.RegardedStonks.Application.Repositories;

public interface IPlayerReadOnlyRepository
{
	public Task<IPlayerEntity?> GetByUsernameAsync(string username);
	public Task<IPlayerEntity?> GetByIdAsync(Guid id);
	public Task<IList<IPlayerEntity>> GetAllAsync();
	Task<bool> ExistsByOidAsync(Guid oid);
	Task<IPlayerEntity?> GetByOidAsync(Guid oid);
}