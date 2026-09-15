using TGC.Communication.cqrs;

namespace TGC.RegardedStonks.Application.Features.Matches.UpdateMatchInvitation;

public class UpdateMatchInvitationCommandHandler : BaseCommandHandler<UpdateMatchInvitationCommand, UpdateMatchInvitationCommandResponse>, ICommandHandler
{
	public Task<IResult<ICommandResponse>> Handle<TCommand>(TCommand command) where TCommand : ICommand
	{
		throw new NotImplementedException();
	}
}