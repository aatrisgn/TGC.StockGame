using TGC.Communication.cqrs;
using TGC.RegardedStonks.Application.Repositories;
using TGC.RegardedStonks.Domain.Enums;

namespace TGC.RegardedStonks.Application.Features.Matches.CreateMatch;

public class CreateMatchCommandHandler : BaseCommandHandler<CreateMatchCommand, CreateMatchCommandResponse>, ICommandHandler
{
	private readonly IMatchEventRepository _matchEventRepository;
	private readonly IMatchRepository _matchRepository;
	public CreateMatchCommandHandler(IMatchEventRepository matchEventRepository, IMatchRepository matchRepository)
	{
		_matchEventRepository = matchEventRepository;
		_matchRepository = matchRepository;
	}
	
	public async Task<IResult<ICommandResponse>> Handle<TCommand>(TCommand command) where TCommand : ICommand
	{
		var parsedCommand = GetTypedCommand(command);

		var newMatchId = await _matchRepository.AddAsync(parsedCommand.Name, parsedCommand.StartingCapital);
		var newId = await _matchEventRepository.AddAsync(newMatchId, MatchEventType.Created, parsedCommand.Name);

		await _matchRepository.SaveChangesAsync();
		await _matchEventRepository.SaveChangesAsync();

		var response = new CreateMatchCommandResponse
		{
			Id = newId,
			Name = parsedCommand.Name
		};
		return AsOk(response);
	}
}