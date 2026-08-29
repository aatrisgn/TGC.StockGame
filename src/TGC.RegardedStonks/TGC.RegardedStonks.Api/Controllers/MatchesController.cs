using System.Net;
using Microsoft.AspNetCore.Mvc;
using TGC.Communication;
using TGC.Communication.cqrs;
using TGC.RegardedStonks.Api.Contracts;
using TGC.RegardedStonks.Application.Features.Matches.CreateMatch;
using TGC.RegardedStonks.Application.Features.Matches.CreateMatchEvent;
using TGC.RegardedStonks.Application.Features.Matches.GetAvailableMatches;
using TGC.RegardedStonks.Application.Features.Matches.GetMatchById;

namespace TGC.RegardedStonks.Api.Controllers;

public class MatchesController : TgcControllerBase
{
	private readonly IMediator _mediator;

	public MatchesController(IMediator mediator)
	{
		_mediator = mediator;
	}
	
	[HttpGet]
	[Route("matches")]
	[ProducesResponseType(typeof(GetAvailableMatchesQueryResponse), StatusCodes.Status200OK)]
	[ProducesResponseType(StatusCodes.Status404NotFound)]
	public async Task<IActionResult> GetAvailableMatches(CancellationToken cancellationToken)
	{
		var matchesResult = await _mediator.HandleQueryAsync<GetAvailableMatchesQuery, GetAvailableMatchesQueryResponse>(GetAvailableMatchesQuery.Empty(), cancellationToken);
		return matchesResult.ToActionResult();
	}

	[HttpPost]
	[Route("matches")]
	[ProducesResponseType(typeof(CreateMatchCommandResponse), StatusCodes.Status200OK)]
	[ProducesResponseType(StatusCodes.Status409Conflict)]
	public async Task<IActionResult> CreateMatch([FromBody]CreateMatchRequest request, CancellationToken cancellationToken)
	{
		var createMatchResult = await _mediator.HandleCommandAsync<CreateMatchCommand, CreateMatchCommandResponse>(CreateMatchRequest.ToCommand(request), cancellationToken);
		return createMatchResult.ToActionResult();
	}
	
	[HttpDelete]
	[Route("matches/{id:guid}")]
	[ProducesResponseType(StatusCodes.Status204NoContent)]
	[ProducesResponseType(StatusCodes.Status404NotFound)]
	[ProducesResponseType(StatusCodes.Status409Conflict)]
	public async Task<IActionResult> DeactivateMatch(Guid id, CancellationToken cancellationToken)
	{
		return ApiResult.FromStatusCode(HttpStatusCode.NoContent).ToActionResult();
	}
	
	[HttpDelete]
	[Route("matches/archive/{id:guid}")]
	[ProducesResponseType(StatusCodes.Status204NoContent)]
	[ProducesResponseType(StatusCodes.Status404NotFound)]
	public async Task<IActionResult> DeleteMatch(Guid id, CancellationToken cancellationToken)
	{
		return ApiResult.FromStatusCode(HttpStatusCode.NoContent).ToActionResult();
	}
	
	[HttpGet]
	[Route("matches/{id:guid}/companies")]
	[ProducesResponseType(typeof(GetAvailableMatchesQueryResponse), StatusCodes.Status200OK)]
	[ProducesResponseType(StatusCodes.Status404NotFound)]
	public async Task<IActionResult> GetCompaniesInMatch(Guid id, CancellationToken cancellationToken)
	{
		var matchesResult = await _mediator.HandleQueryAsync<GetMatchByIdQuery, GetAvailableMatchesQueryResponse>(GetMatchByIdQuery.ForId(id), cancellationToken);
		return matchesResult.ToActionResult();
	}

	[HttpPost]
	[Route("matches/{id:guid}/events")]
	[ProducesResponseType(typeof(CreateMatchEventCommandResponse), StatusCodes.Status200OK)]
	[ProducesResponseType(StatusCodes.Status409Conflict)]
	public async Task<IActionResult> CreateMatchEvent(Guid id, [FromBody]CreateMatchEventRequest request, CancellationToken cancellationToken)
	{
		var createMatchEventResult = await _mediator.HandleCommandAsync<CreateMatchEventCommand, CreateMatchEventCommandResponse>(CreateMatchEventRequest.ToCommand(request, id), cancellationToken);
		return createMatchEventResult.ToActionResult();
	}
}