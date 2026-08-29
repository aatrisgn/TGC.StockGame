using Microsoft.EntityFrameworkCore;

namespace TGC.RegardedStonks.Infrastructure.Persistence;

public class RegardedStonksWriteDbContext : RegardedStonksDbContextBase
{
	public RegardedStonksWriteDbContext(DbContextOptions<RegardedStonksWriteDbContext> options) : base(options)
	{
	}
	
	protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		=> optionsBuilder.UseNpgsql("Host=localhost;Port=5432;Database=regardedstonks;Username=postgres;Password=mysecretpassword;Include Error Detail=true");
}
