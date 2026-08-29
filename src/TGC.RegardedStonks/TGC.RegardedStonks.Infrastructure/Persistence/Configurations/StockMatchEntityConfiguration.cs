using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TGC.RegardedStonks.Infrastructure.Entities;

namespace TGC.RegardedStonks.Infrastructure.Persistence.Configurations;

public class StockMatchEntityConfiguration : IEntityTypeConfiguration<StockMatchEntity>
{
	public void Configure(EntityTypeBuilder<StockMatchEntity> builder)
	{
		builder.ToTable("stock_matches");

		builder.HasKey(x => x.Id);

		builder.Property(x => x.Name)
			.IsRequired()
			.HasMaxLength(200);

		builder.Property(x => x.Created)
			.IsRequired();

		builder.Property(x => x.StartingCapital)
			.HasColumnType("decimal(18,2)")
			.IsRequired();

		builder.Property(x => x.Active)
			.IsRequired();

		builder.HasIndex(x => x.Active);

		builder.HasMany(x => x.Players)
			.WithMany(x => x.StockMatches)
			.UsingEntity<StockMatchPlayerEntity>(
				j => j.HasOne(sp => sp.Player)
					.WithMany(p => p.StockMatchPlayers)
					.HasForeignKey(sp => sp.PlayerId)
					.OnDelete(DeleteBehavior.Cascade),
				j => j.HasOne(sp => sp.StockMatch)
					.WithMany(m => m.StockMatchPlayers)
					.HasForeignKey(sp => sp.StockMatchId)
					.OnDelete(DeleteBehavior.Cascade)
			);
	}
}
