namespace TGC.RegardedStonks.Api.Contracts;

public record CreatePlayerRequest
{
	public string UserName { get; set; }
	public Guid Oid { get; set; }
}