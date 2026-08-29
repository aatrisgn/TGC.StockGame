using TGC.Communication.cqrs;
using TGC.RegardedStonks.Application.Repositories;

namespace TGC.RegardedStonks.Application.Features.Players.CreatePlayerSelf;

public class CreatePlayerSelfCommandHandler : BaseCommandHandler<CreatePlayerSelfCommand, CreatePlayerSelfCommandResponse>, ICommandHandler
{
	private readonly IUserContextService _userContextService;
	private readonly IPlayerRepository _playerRepository;
	private readonly IPlayerReadOnlyRepository _playerReadOnlyRepository;

	public CreatePlayerSelfCommandHandler(IUserContextService userContextService, IPlayerRepository playerRepository, IPlayerReadOnlyRepository playerReadOnlyRepository)
	{
		_userContextService = userContextService;
		_playerRepository = playerRepository;
		_playerReadOnlyRepository = playerReadOnlyRepository;
	}

	public async Task<IResult<ICommandResponse>> Handle<TCommand>(TCommand command) where TCommand : ICommand
	{
		var oid = _userContextService.GetUserId();
		var userName = _userContextService.GetUserName();

		var playerAlreadyExists = await _playerReadOnlyRepository.ExistsByOidAsync(oid);

		if (playerAlreadyExists)
		{
			return AsConflict("Player already exists.");
		}

		var newPlayerId = await _playerRepository.AddAsync(userName, oid, string.Empty);
		await _playerRepository.SaveChangesAsync();

		return AsOk(new CreatePlayerSelfCommandResponse
		{
			Id = newPlayerId
		});
	}
}
