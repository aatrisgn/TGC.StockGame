using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TGC.RegardedStonks.Infrastructure.Entities;

namespace TGC.RegardedStonks.Infrastructure.Persistence.Configurations;

public class StockMatchPlayerEntityConfiguration : IEntityTypeConfiguration<StockMatchPlayerEntity>
{
	public void Configure(EntityTypeBuilder<StockMatchPlayerEntity> builder)
	{
		builder.ToTable("stock_match_players");

		builder.HasKey(x => x.Id);

		builder.Property(x => x.JoinedAt)
			.IsRequired();

		builder.HasIndex(x => new { x.StockMatchId, x.PlayerId }).IsUnique();
	}
}
