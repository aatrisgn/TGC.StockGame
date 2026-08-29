namespace TGC.RegardedStonks.Application.Repositories.Entities;

public interface IPlayerEntity: IBaseEntity
{
	public Guid Oid { get; set; }
	public string Username { get; set; }
	public string ProfilePicture { get; set; }
}