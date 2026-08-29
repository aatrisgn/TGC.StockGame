using TGC.Communication.cqrs;
using TGC.RegardedStonks.Application.Repositories;

namespace TGC.RegardedStonks.Application.Features.Players.UpdateUsernameSelf;

public class UpdateUsernameSelfCommandHandler : BaseCommandHandler<UpdateUsernameSelfCommand, UpdateUsernameSelfCommandResponse>, ICommandHandler
{
	private readonly IUserContextService _userContextService;
	private readonly IPlayerRepository _playerRepository;
	private readonly IPlayerReadOnlyRepository _playerReadOnlyRepository;

	public UpdateUsernameSelfCommandHandler(IUserContextService userContextService, IPlayerRepository playerRepository, IPlayerReadOnlyRepository playerReadOnlyRepository)
	{
		_userContextService = userContextService;
		_playerRepository = playerRepository;
		_playerReadOnlyRepository = playerReadOnlyRepository;
	}

	public async Task<IResult<ICommandResponse>> Handle<TCommand>(TCommand command) where TCommand : ICommand
	{
		var parsedCommand = GetTypedCommand(command);
		var oid = _userContextService.GetUserId();

		var player = await _playerReadOnlyRepository.GetByOidAsync(oid);
		if (player == null)
		{
			return AsNotFound("No player found");
		}

		var newUsername = parsedCommand.Username?.Trim();
		if (string.IsNullOrWhiteSpace(newUsername))
		{
			return AsBadRequest("Username is required");
		}

		var existingPlayerWithUsername = await _playerReadOnlyRepository.GetByUsernameAsync(newUsername);
		if (existingPlayerWithUsername != null && existingPlayerWithUsername.Id != player.Id)
		{
			return AsConflict("Username already taken");
		}

		await _playerRepository.UpdateUsernameAsync(player.Id, newUsername);
		await _playerRepository.SaveChangesAsync();

		return AsOk(new UpdateUsernameSelfCommandResponse
		{
			Id = player.Id,
			Username = newUsername
		});
	}
}
