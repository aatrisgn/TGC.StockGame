using TGC.RegardedStonks.Application.Repositories.Entities;
using TGC.RegardedStonks.Infrastructure.Entities;

namespace TGC.RegardedStonks.Infrastructure.DTOs;

public class PlayerDto : IPlayerEntity
{
	public Guid Id { get; set; }
	public DateTimeOffset Created { get; set; }
	public DateTimeOffset? LastEdited { get; set; }
	public Guid CreatedBy { get; set; }
	public Guid UpdatedBy { get; set; }
	public bool Active { get; set; }
	public Guid Oid { get; set; }
	public string Username { get; set; }
	public string ProfilePicture { get; set; }

	public static IPlayerEntity FromEntity(PlayerEntity locatedPlayer)
	{
		return new PlayerDto()
		{
			Id = locatedPlayer.Id,
			Created = locatedPlayer.Created,
			LastEdited = locatedPlayer.LastEdited,
			CreatedBy = locatedPlayer.CreatedBy,
			UpdatedBy = locatedPlayer.UpdatedBy,
			Active = locatedPlayer.Active,
			Oid = locatedPlayer.Oid,
			Username = locatedPlayer.Username,
			ProfilePicture = locatedPlayer.ProfilePicture
		};
	}
}