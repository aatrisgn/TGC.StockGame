using Microsoft.AspNetCore.Mvc;
using TGC.Communication;
using TGC.Communication.cqrs;
using TGC.RegardedStonks.Api.Contracts;
using TGC.RegardedStonks.Application.Features.Players.CreatePlayerSelf;
using TGC.RegardedStonks.Application.Features.Players.GetPlayerDetails;
using TGC.RegardedStonks.Application.Features.Players.GetPlayerDetailsSelf;
using TGC.RegardedStonks.Application.Features.Players.GetPlayerRoles;
using TGC.RegardedStonks.Application.Features.Players.UpdateUsernameSelf;

namespace TGC.RegardedStonks.Api.Controllers;

public class PlayerController : TgcControllerBase
{
	private readonly IMediator _mediator;

	public PlayerController(IMediator mediator)
	{
		_mediator = mediator;
	}
	
	[HttpGet]
	[Route("player/roles")]
	[ProducesResponseType(typeof(GetPlayerRolesQueryResponse), StatusCodes.Status200OK)]
	public async Task<IActionResult> GetRoles(CancellationToken cancellationToken)
	{
		var results =  await _mediator.HandleQueryAsync<GetPlayerRolesQuery, GetPlayerRolesQueryResponse>(GetPlayerRolesQuery.Empty(), cancellationToken);
		return results.ToActionResult();
	}
	
	[HttpGet]
	[Route("player/{id:guid}")]
	[ProducesResponseType(typeof(GetPlayerDetailsQueryResponse), StatusCodes.Status200OK)]
	public async Task<IActionResult> GetPlayerDetails(Guid id, CancellationToken cancellationToken)
	{
		var result = await _mediator.HandleQueryAsync<GetPlayerDetailsQuery, GetPlayerDetailsQueryResponse>(GetPlayerDetailsQuery.ForId(id), cancellationToken);
		return result.ToActionResult();
	}
	
	[HttpGet]
	[Route("player/self")]
	[ProducesResponseType(typeof(GetPlayerDetailsSelfQueryResponse), StatusCodes.Status200OK)]
	[ProducesResponseType(StatusCodes.Status404NotFound)]
	public async Task<IActionResult> GetPlayerDetailsSelf(CancellationToken cancellationToken)
	{
		var result = await _mediator.HandleQueryAsync<GetPlayerDetailsSelfQuery, GetPlayerDetailsSelfQueryResponse>(GetPlayerDetailsSelfQuery.Empty(), cancellationToken);
		return result.ToActionResult();
	}

	[HttpPost]
	[Route("player/self")]
	[ProducesResponseType(typeof(CreatePlayerSelfCommandResponse), StatusCodes.Status200OK)]
	[ProducesResponseType(StatusCodes.Status409Conflict)]
	public async Task<IActionResult> CreatePlayerSelf(CancellationToken cancellationToken)
	{
		var result = await _mediator.HandleCommandAsync<CreatePlayerSelfCommand, CreatePlayerSelfCommandResponse>(CreatePlayerSelfCommand.Empty(), cancellationToken);
		return result.ToActionResult();
	}

	[HttpPut]
	[Route("player/self/username")]
	[ProducesResponseType(typeof(UpdateUsernameSelfCommandResponse), StatusCodes.Status200OK)]
	[ProducesResponseType(StatusCodes.Status404NotFound)]
	[ProducesResponseType(StatusCodes.Status409Conflict)]
	public async Task<IActionResult> UpdateUsernameSelf([FromBody] UpdateUsernameSelfRequest request, CancellationToken cancellationToken)
	{
		var result = await _mediator.HandleCommandAsync<UpdateUsernameSelfCommand, UpdateUsernameSelfCommandResponse>(UpdateUsernameSelfRequest.ToCommand(request), cancellationToken);
		return result.ToActionResult();
	}
}