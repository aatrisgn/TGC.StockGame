using TGC.Communication.cqrs;
using TGC.RegardedStonks.Application.Features.Players;
using TGC.RegardedStonks.Application.Repositories;

namespace TGC.RegardedStonks.Application.Features.Matches.DeactivateMatch;

public class DeactivateMatchCommandHandler : BaseCommandHandler<DeactivateMatchCommand, DeactivateMatchCommandResponse>, ICommandHandler
{
	private readonly IMatchRepository _matchRepository;
	private readonly IMatchReadOnlyRepository _matchReadOnlyRepository;
	private readonly IUserContextService _userContextService;
	
	public DeactivateMatchCommandHandler(IMatchRepository matchRepository, IMatchReadOnlyRepository matchReadOnlyRepository, IUserContextService userContextService)
	{
		_matchRepository = matchRepository;
		_matchReadOnlyRepository = matchReadOnlyRepository;
		_userContextService = userContextService;
	}
	
	public async Task<IResult<ICommandResponse>> Handle<TCommand>(TCommand command) where TCommand : ICommand
	{
		var parsedCommand = this.GetTypedCommand(command);

		var locatedMatchToDelete = await _matchReadOnlyRepository.GetByIdAsync(parsedCommand.Id);

		if (locatedMatchToDelete == null || locatedMatchToDelete.CreatedBy != _userContextService.GetUserId())
		{
			return AsNotFound("No matching entity was found.");
		}

		var deleted = await _matchRepository.DeleteAsync(parsedCommand.Id);
		await _matchRepository.SaveChangesAsync();

		if( deleted)
			return AsNoContent();
		
		return AsBadRequest("Could not delete the match.");
	}
}