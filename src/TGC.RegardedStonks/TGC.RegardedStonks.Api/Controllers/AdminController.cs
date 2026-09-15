using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TGC.Communication;
using TGC.Communication.cqrs;
using TGC.RegardedStonks.Api.Contracts;
using TGC.RegardedStonks.Application.Features.Admin.GetAllMatches;
using TGC.RegardedStonks.Application.Features.Players.AddPlayer;
using TGC.RegardedStonks.Application.Features.Players.GetAllPlayers;
using TGC.RegardedStonks.Application.Features.Players.GetPlayerDetails;

namespace TGC.RegardedStonks.Api.Controllers;

[Authorize(Roles = "MatchAdmin")]
public class AdminController : TgcControllerBase
{
	private readonly IMediator _mediator;
	public AdminController(IMediator mediator)
	{
		_mediator = mediator;
	}
	
	[HttpGet]
	[Route("admin/matches")]
	[ProducesResponseType(typeof(GetAllMatchesQueryResponse), StatusCodes.Status200OK)]
	public async Task<IActionResult> GetAllMatches(CancellationToken cancellationToken)
	{
		var result = await _mediator.HandleQueryAsync<GetAllMatchesQuery, GetAllMatchesQueryResponse>(GetAllMatchesQuery.Empty(), cancellationToken);
		return result.ToActionResult();
	}
	
	[HttpGet]
	[Route("admin/matches/invitations")]
	[ProducesResponseType(typeof(GetAllMatchesQueryResponse), StatusCodes.Status200OK)]
	public async Task<IActionResult> GetAllInvitations(CancellationToken cancellationToken)
	{
		//TODO: Fix
		var result = await _mediator.HandleQueryAsync<GetAllMatchesQuery, GetAllMatchesQueryResponse>(GetAllMatchesQuery.Empty(), cancellationToken);
		return result.ToActionResult();
	}
	
	[HttpGet]
	[Route("admin/players")]
	[ProducesResponseType(typeof(GetAllPlayersQueryResponse), StatusCodes.Status200OK)]
	public async Task<IActionResult> GetAllPlayers(CancellationToken cancellationToken)
	{
		var result = await _mediator.HandleQueryAsync<GetAllPlayersQuery, GetAllPlayersQueryResponse>(GetAllPlayersQuery.Empty(), cancellationToken);
		return result.ToActionResult();
	}
	
	[HttpPost]
	[Route("admin/players")]
	[ProducesResponseType(typeof(CreatePlayerCommandResponse), StatusCodes.Status200OK)]
	public async Task<IActionResult> AddPlayer([FromBody] CreatePlayerRequest request, CancellationToken cancellationToken)
	{
		var command = new CreatePlayerCommand
		{
			Oid = request.Oid,
			UserName = request.UserName
		};
		var result = await _mediator.HandleCommandAsync<CreatePlayerCommand, CreatePlayerCommandResponse>(command, cancellationToken);
		return result.ToActionResult();
	}
	
	[HttpGet]
	[Route("admin/players/{id:guid}")]
	[ProducesResponseType(typeof(GetPlayerDetailsQueryResponse), StatusCodes.Status200OK)]
	[ProducesResponseType(StatusCodes.Status404NotFound)]
	public async Task<IActionResult> GetPlayerDetails(Guid id, CancellationToken cancellationToken)
	{
		var result = await _mediator.HandleQueryAsync<GetPlayerDetailsQuery, GetPlayerDetailsQueryResponse>(GetPlayerDetailsQuery.ForId(id), cancellationToken);
		return result.ToActionResult();
	}
}