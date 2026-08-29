using Microsoft.EntityFrameworkCore;
using TGC.RegardedStonks.Infrastructure.Entities;

namespace TGC.RegardedStonks.Infrastructure.Persistence;

public abstract class RegardedStonksDbContextBase : DbContext
{
	protected RegardedStonksDbContextBase(DbContextOptions options) : base(options)
	{
	}

	public DbSet<StockMatchEntity> StockMatches => Set<StockMatchEntity>();
	public DbSet<StockCompanyEntity> StockCompanies => Set<StockCompanyEntity>();
	public DbSet<PlayerEntity> Players => Set<PlayerEntity>();
	public DbSet<TemplateStockCompany> TemplateStockCompanies => Set<TemplateStockCompany>();
	public DbSet<PlayerPortfolioEntity> PlayerPortfolios => Set<PlayerPortfolioEntity>();
	public DbSet<PlayerStockPortfolioEntity> PlayerStockPortfolios => Set<PlayerStockPortfolioEntity>();
	public DbSet<MatchEventEntity> MatchEvents => Set<MatchEventEntity>();

	protected override void OnModelCreating(ModelBuilder modelBuilder)
	{
		modelBuilder.ApplyConfigurationsFromAssembly(typeof(RegardedStonksDbContextBase).Assembly);
		base.OnModelCreating(modelBuilder);
	}
}
