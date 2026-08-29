using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TGC.RegardedStonks.Infrastructure.Entities;

namespace TGC.RegardedStonks.Infrastructure.Persistence.Configurations;

public class PlayerStockPortfolioEntityConfiguration : IEntityTypeConfiguration<PlayerStockPortfolioEntity>
{
	public void Configure(EntityTypeBuilder<PlayerStockPortfolioEntity> builder)
	{
		builder.ToTable("player_stock_portfolios");

		builder.HasKey(x => x.Id);

		builder.Property(x => x.Quantity)
			.IsRequired();

		builder.HasOne(x => x.PlayerPortfolio)
			.WithMany(x => x.PlayerStockPortfolios)
			.HasForeignKey(x => x.PlayerPortfolioId)
			.OnDelete(DeleteBehavior.Cascade)
			.IsRequired();

		builder.HasOne(x => x.StockCompany)
			.WithMany(x => x.PlayerStockPortfolios)
			.HasForeignKey(x => x.StockCompanyId)
			.OnDelete(DeleteBehavior.Cascade)
			.IsRequired();

		builder.HasIndex(x => new { x.PlayerPortfolioId, x.StockCompanyId }).IsUnique();

		builder.HasIndex(x => x.Active);
	}
}
