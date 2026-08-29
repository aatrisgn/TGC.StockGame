using TGC.Communication.cqrs;
using TGC.RegardedStonks.Application.Repositories;

namespace TGC.RegardedStonks.Application.Features.Matches.CreateMatchEvent;

public class CreateMatchEventCommandHandler : BaseCommandHandler<CreateMatchEventCommand, CreateMatchEventCommandResponse>, ICommandHandler
{
	private readonly IMatchEventRepository _matchEventRepository;

	public CreateMatchEventCommandHandler(IMatchEventRepository matchEventRepository)
	{
		_matchEventRepository = matchEventRepository;
	}

	public async Task<IResult<ICommandResponse>> Handle<TCommand>(TCommand command) where TCommand : ICommand
	{
		var parsedCommand = GetTypedCommand(command);

		var newId = await _matchEventRepository.AddAsync(parsedCommand.StockMatchId, parsedCommand.EventType, parsedCommand.Payload);
		await _matchEventRepository.SaveChangesAsync();

		var response = new CreateMatchEventCommandResponse
		{
			Id = newId
		};
		return AsOk(response);
	}
}
