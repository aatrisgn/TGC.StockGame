using TGC.Communication.cqrs;
using TGC.RegardedStonks.Application.Repositories;
using TGC.RegardedStonks.Domain;
using TGC.RegardedStonks.Domain.Enums;

namespace TGC.RegardedStonks.Application.Features.Matches.CreateMatch;

public class CreateMatchCommandHandler : BaseCommandHandler<CreateMatchCommand, CreateMatchCommandResponse>, ICommandHandler
{
	private readonly IMatchEventRepository _matchEventRepository;
	private readonly IMatchRepository _matchRepository;
	private readonly ITemplateStockCompanyReadOnlyRepository _templateStockCompanyReadOnlyRepository;
	public CreateMatchCommandHandler(IMatchEventRepository matchEventRepository, IMatchRepository matchRepository, ITemplateStockCompanyReadOnlyRepository templateStockCompanyReadOnlyRepository)
	{
		_matchEventRepository = matchEventRepository;
		_matchRepository = matchRepository;
		_templateStockCompanyReadOnlyRepository = templateStockCompanyReadOnlyRepository;
	}
	
	public async Task<IResult<ICommandResponse>> Handle<TCommand>(TCommand command) where TCommand : ICommand
	{
		var parsedCommand = GetTypedCommand(command);
		
		var templateCompanies = await _templateStockCompanyReadOnlyRepository.GetAllAsync();

		var newStockMatch = new StockMatch
		{
			Name = parsedCommand.Name,
			StartingCapital = parsedCommand.StartingCapital,
			StockCompanies = templateCompanies.Select(TemplateStockCompany.ToStockCompany).ToList()
		};

		var newMatchId = await _matchRepository.AddAsync(newStockMatch);
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