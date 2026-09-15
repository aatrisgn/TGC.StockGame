using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TGC.RegardedStonks.Infrastructure.Entities;

namespace TGC.RegardedStonks.Infrastructure.Persistence.Configurations;

public class MatchInvitationEntityConfiguration : IEntityTypeConfiguration<MatchInvitationEntity>
{
	public void Configure(EntityTypeBuilder<MatchInvitationEntity> builder)
	{
		builder.ToTable("match_invitations");

		builder.HasKey(x => x.Id);

		builder.Property(x => x.Status)
			.IsRequired();


		builder.HasOne(x => x.StockMatch)
			.WithMany(x => x.Invitations)
			.HasForeignKey(x => x.StockMatchId)
			.IsRequired()
			.OnDelete(DeleteBehavior.Cascade);

		builder.HasOne(x => x.Player)
			.WithMany(x => x.Invitations)
			.HasForeignKey(x => x.PlayerId)
			.IsRequired()
			.OnDelete(DeleteBehavior.Cascade);

		builder.HasIndex(x => x.StockMatchId);

		builder.HasIndex(x => x.Active);
	}
}