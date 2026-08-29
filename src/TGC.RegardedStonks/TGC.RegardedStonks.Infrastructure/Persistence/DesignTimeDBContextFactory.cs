using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace TGC.RegardedStonks.Infrastructure.Persistence;

public class DesignTimeDBContextFactory : IDesignTimeDbContextFactory<RegardedStonksWriteDbContext>
{
	public RegardedStonksWriteDbContext CreateDbContext(string[] args)
	{
		var optionsBuilder = new DbContextOptionsBuilder<RegardedStonksWriteDbContext>();
		optionsBuilder.UseNpgsql("Host=localhost;Port=5432;Database=regardedstonks;Username=postgres;Password=mysecretpassword");

		return new RegardedStonksWriteDbContext(optionsBuilder.Options);
	}
}