namespace TGC.RegardedStonks.Application.Repositories.Entities;

public interface IBaseEntity
{
	Guid Id { get; set; }
	DateTimeOffset Created { get; set; }
	DateTimeOffset? LastEdited { get; set; }
	Guid CreatedBy { get; set; }
	Guid UpdatedBy { get; set; }
	bool Active { get; set; }
}
