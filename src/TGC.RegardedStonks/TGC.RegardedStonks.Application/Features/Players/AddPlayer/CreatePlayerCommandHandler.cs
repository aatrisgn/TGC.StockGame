using TGC.Communication.cqrs;
using TGC.RegardedStonks.Application.Repositories;

namespace TGC.RegardedStonks.Application.Features.Players.AddPlayer;

public class CreatePlayerCommandHandler: BaseCommandHandler<CreatePlayerCommand, CreatePlayerCommandResponse>, ICommandHandler
{
	private readonly IPlayerRepository _playerRepository;
	private readonly IPlayerReadOnlyRepository _playerReadOnlyRepository;
	
	public CreatePlayerCommandHandler(IPlayerRepository playerRepository, IPlayerReadOnlyRepository playerReadOnlyRepository)
	{
		_playerRepository = playerRepository;
		_playerReadOnlyRepository = playerReadOnlyRepository;
	}
	
	public async Task<IResult<ICommandResponse>> Handle<TCommand>(TCommand command) where TCommand : ICommand
	{
		var parsedCommand = GetTypedCommand(command);

		var playerWithOidAlreadyExist = await _playerReadOnlyRepository.ExistsByOidAsync(parsedCommand.Oid);

		if (playerWithOidAlreadyExist)
		{
			return Result<CreatePlayerCommandResponse>.AsConflict("Player with this OID already exists");
		}

		var newPlayerId = await _playerRepository.AddAsync(parsedCommand.UserName, parsedCommand.Oid, string.Empty);
		await _playerRepository.SaveChangesAsync();

		return AsOk(new CreatePlayerCommandResponse
		{
			Id = newPlayerId
		});
	}
}