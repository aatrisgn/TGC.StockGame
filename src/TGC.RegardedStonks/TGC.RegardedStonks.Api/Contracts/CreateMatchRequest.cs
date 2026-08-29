using TGC.RegardedStonks.Application.Features.Matches.CreateMatch;

namespace TGC.RegardedStonks.Api.Contracts;

public record CreateMatchRequest
{
	public string Name { get; set; }
	public decimal StartingCapital { get; set; }

	public static CreateMatchCommand ToCommand(CreateMatchRequest request)
	{
		return new CreateMatchCommand()
		{
			Name = request.Name,
			StartingCapital = request.StartingCapital
		};
	}
}