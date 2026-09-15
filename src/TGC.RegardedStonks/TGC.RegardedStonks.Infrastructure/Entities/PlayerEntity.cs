
namespace TGC.RegardedStonks.Infrastructure.Entities;

public class PlayerEntity : BaseEntity
{
	public Guid Oid { get; set; }
	public string Username { get; set; }
	public string ProfilePicture { get; set; }
	public List<MatchInvitationEntity> Invitations { get; set; } = [];
	public List<StockMatchPlayerEntity> StockMatchPlayers { get; set; } = [];
	public List<StockMatchEntity> StockMatches { get; set; } = [];
	public List<PlayerPortfolioEntity> PlayerPortfolios { get; set; } = [];
}