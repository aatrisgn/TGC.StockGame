namespace TGC.RegardedStonks.Infrastructure.Entities;

public abstract class BaseEntity
{
	public Guid Id { get; set; }
	public DateTimeOffset Created { get; set; } = DateTimeOffset.UtcNow;
	public DateTimeOffset? LastEdited { get; set; }
	public Guid CreatedBy { get; set; }
	public Guid UpdatedBy { get; set; }
	public bool Active { get; set; } = true;
}
