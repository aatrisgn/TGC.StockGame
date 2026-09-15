using TGC.Communication.cqrs;
using TGC.RegardedStonks.Application.Features.Matches.InvitePlayerToMatch;
using TGC.RegardedStonks.Application.Features.Players;
using TGC.RegardedStonks.Application.Repositories;

namespace TGC.RegardedStonks.Application.Features.MatchInvitations.InvitePlayerToMatch;

public class InvitePlayerToMatchCommandHandler: BaseCommandHandler<InvitePlayerToMatchCommand, InvitePlayerToMatchCommandResponse>, ICommandHandler
{
	private readonly IMatchInvitationRepository _matchInvitationRepository;
	private readonly IMatchReadOnlyRepository _matchReadOnlyRepository;
	private readonly IUserContextService _userContextService;
	
	public InvitePlayerToMatchCommandHandler(IMatchInvitationRepository matchInvitationRepository, IMatchReadOnlyRepository matchReadOnlyRepository, IUserContextService userContextService)
	{
		_matchInvitationRepository = matchInvitationRepository;
		_matchReadOnlyRepository = matchReadOnlyRepository;
		 _userContextService = userContextService;
	}
	
	public async Task<IResult<ICommandResponse>> Handle<TCommand>(TCommand command) where TCommand : ICommand
	{
		var parsedCommand = this.GetTypedCommand(command);
		
		var currentUserId = _userContextService.GetUserId();
		var match = await _matchReadOnlyRepository.GetByIdAsync(parsedCommand.MatchId);

		if (match == null || match.CreatedBy != currentUserId)
		{
			return AsNotFound("No match found with id: " + parsedCommand.MatchId + "");
		}
		
		var result = await _matchInvitationRepository.AddAsync(parsedCommand.PlayerId, currentUserId, parsedCommand.MatchId);
		await _matchInvitationRepository.SaveChangesAsync();
		
		return AsOk(new InvitePlayerToMatchCommandResponse
		{
			InvitationId = result
		});
	}
}