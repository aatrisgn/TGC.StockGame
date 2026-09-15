using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TGC.RegardedStonks.Infrastructure.Entities;

namespace TGC.RegardedStonks.Infrastructure.Persistence.Configurations;

public class TemplateStockCompanyEntityConfiguration : IEntityTypeConfiguration<TemplateStockCompanyEntity>
{
	public void Configure(EntityTypeBuilder<TemplateStockCompanyEntity> builder)
	{
		builder.ToTable("template_stock_companies");

		builder.HasKey(x => x.Id);

		builder.Property(x => x.Name)
			.IsRequired()
			.HasMaxLength(200);

		builder.Property(x => x.ShortName)
			.IsRequired()
			.HasMaxLength(10);

		builder.Property(x => x.Description)
			.IsRequired()
			.HasMaxLength(500);

		builder.Property(x => x.Price)
			.HasColumnType("decimal(18,2)");

		builder.Property(x => x.LastReportedRevenue)
			.HasColumnType("decimal(18,2)");

		builder.Property(x => x.LastReportedProfit)
			.HasColumnType("decimal(18,2)");

		builder.Property(x => x.LongTermDebt)
			.HasColumnType("decimal(18,2)");

		builder.Property(x => x.ShortTermDebt)
			.HasColumnType("decimal(18,2)");

		builder.Property(x => x.LiquidAssets)
			.HasColumnType("decimal(18,2)");

		builder.Property(x => x.NonLiquidAssets)
			.HasColumnType("decimal(18,2)");

		builder.HasIndex(x => x.Name)
			.IsUnique();

		builder.HasIndex(x => x.Active);
	}
}
