using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TGC.RegardedStonks.Infrastructure.Entities;

namespace TGC.RegardedStonks.Infrastructure.Persistence.Configurations;

public class PlayerPortfolioEntityConfiguration : IEntityTypeConfiguration<PlayerPortfolioEntity>
{
	public void Configure(EntityTypeBuilder<PlayerPortfolioEntity> builder)
	{
		builder.ToTable("player_portfolios");

		builder.HasKey(x => x.Id);

		builder.Property(x => x.Cash)
			.HasColumnType("decimal(18,2)")
			.IsRequired();

		builder.Property(x => x.Status)
			.IsRequired();

		builder.HasOne(x => x.StockMatch)
			.WithMany(x => x.PlayerPortfolios)
			.HasForeignKey(x => x.StockMatchId)
			.OnDelete(DeleteBehavior.Cascade)
			.IsRequired();

		builder.HasOne(x => x.Player)
			.WithMany(x => x.PlayerPortfolios)
			.HasForeignKey(x => x.PlayerId)
			.OnDelete(DeleteBehavior.Cascade)
			.IsRequired();

		builder.HasIndex(x => new { x.StockMatchId, x.PlayerId }).IsUnique();

		builder.HasIndex(x => x.Active);
	}
}
