using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TGC.RegardedStonks.Infrastructure.Entities;

namespace TGC.RegardedStonks.Infrastructure.Persistence.Configurations;

public class PlayerEntityConfiguration : IEntityTypeConfiguration<PlayerEntity>
{
	public void Configure(EntityTypeBuilder<PlayerEntity> builder)
	{
		builder.ToTable("players");

		builder.HasKey(x => x.Id);

		builder.Property(x => x.Oid)
			.IsRequired()
			.HasMaxLength(100);

		builder.Property(x => x.Username)
			.IsRequired()
			.HasMaxLength(100);

		builder.Property(x => x.ProfilePicture)
			.IsRequired();

		builder.HasIndex(x => x.Oid).IsUnique();

		builder.HasIndex(x => x.Username).IsUnique();

		builder.HasIndex(x => x.Active);
	}
}
