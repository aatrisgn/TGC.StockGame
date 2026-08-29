using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TGC.RegardedStonks.Infrastructure.Entities;

namespace TGC.RegardedStonks.Infrastructure.Persistence.Configurations;

public class MatchEventEntityConfiguration : IEntityTypeConfiguration<MatchEventEntity>
{
	public void Configure(EntityTypeBuilder<MatchEventEntity> builder)
	{
		builder.ToTable("match_events");

		builder.HasKey(x => x.Id);

		builder.Property(x => x.EventType)
			.IsRequired();

		builder.Property(x => x.Payload)
			.IsRequired(false)
			.HasColumnType("jsonb");

		builder.HasOne(x => x.StockMatch)
			.WithMany(x => x.MatchEvents)
			.HasForeignKey(x => x.StockMatchId)
			.IsRequired(false)
			.OnDelete(DeleteBehavior.Cascade);

		builder.HasIndex(x => x.StockMatchId);

		builder.HasIndex(x => x.Active);
	}
}
