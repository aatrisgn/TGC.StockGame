using Microsoft.EntityFrameworkCore;

namespace TGC.RegardedStonks.Infrastructure.Persistence;

public class RegardedStonksReadOnlyDbContext : RegardedStonksDbContextBase
{
	public RegardedStonksReadOnlyDbContext(DbContextOptions<RegardedStonksReadOnlyDbContext> options) : base(options)
	{
		ChangeTracker.QueryTrackingBehavior = QueryTrackingBehavior.NoTracking;
		ChangeTracker.AutoDetectChangesEnabled = false;
	}

	public override int SaveChanges(bool acceptAllChangesOnSuccess) =>
		throw new InvalidOperationException($"{nameof(RegardedStonksReadOnlyDbContext)} is read-only and cannot persist changes.");

	public override Task<int> SaveChangesAsync(bool acceptAllChangesOnSuccess, CancellationToken cancellationToken = default) =>
		throw new InvalidOperationException($"{nameof(RegardedStonksReadOnlyDbContext)} is read-only and cannot persist changes.");
}
