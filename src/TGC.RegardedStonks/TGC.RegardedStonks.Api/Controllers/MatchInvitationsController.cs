using Microsoft.AspNetCore.Mvc;
using TGC.Communication;
using TGC.Communication.cqrs;
using TGC.RegardedStonks.Api.Contracts;
using TGC.RegardedStonks.Application.Features.Matches.InvitePlayerToMatch;
using TGC.RegardedStonks.Application.Features.Matches.UpdateMatchInvitation;
using TGC.RegardedStonks.Application.Features.MatchInvitations.GetMatchInvitations;

namespace TGC.RegardedStonks.Api.Controllers;

public class MatchInvitationsController : TgcControllerBase
{
	private readonly IMediator _mediator;
	
	public MatchInvitationsController(IMediator mediator)
	{
		_mediator = mediator;
	}
	
	[HttpGet]
	[Route("matches/{matchId:guid}/invitations")]
	[ProducesResponseType(typeof(GetMatchInvitationsQueryRespone), StatusCodes.Status200OK)]
	[ProducesResponseType( StatusCodes.Status404NotFound)]
	public async Task<IActionResult> GetInvitations(Guid matchId, CancellationToken cancellationToken)
	{
		var command = GetMatchInvitationsQuery.ForMatch(matchId);
		var createMatchResult = await _mediator.HandleQueryAsync<GetMatchInvitationsQuery, GetMatchInvitationsQueryRespone>(command, cancellationToken);
		return createMatchResult.ToActionResult();
	}
	
	[HttpGet]
	[Route("player/{playerId:guid}/invitations")]
	[ProducesResponseType(typeof(GetMatchInvitationsQueryRespone), StatusCodes.Status200OK)]
	[ProducesResponseType( StatusCodes.Status404NotFound)]
	public async Task<IActionResult> GetPlayerInvitations(Guid matchId, CancellationToken cancellationToken)
	{
		var command = GetMatchInvitationsQuery.ForMatch(matchId);
		var createMatchResult = await _mediator.HandleQueryAsync<GetMatchInvitationsQuery, GetMatchInvitationsQueryRespone>(command, cancellationToken);
		return createMatchResult.ToActionResult();
	}
	
	[HttpPost]
	[Route("matches/{matchId:guid}/invitations")]
	[ProducesResponseType(typeof(InvitePlayerToMatchCommandResponse), StatusCodes.Status200OK)]
	[ProducesResponseType( StatusCodes.Status404NotFound)]
	[ProducesResponseType( StatusCodes.Status409Conflict)]
	public async Task<IActionResult> InvitePlayerToMatch(Guid matchId, [FromBody] CreateMatchInvitationRequest invitationRequest, CancellationToken cancellationToken)
	{
		var command = InvitePlayerToMatchCommand.ForPlayerId(matchId, invitationRequest.PlayerId);
		var createMatchResult = await _mediator.HandleCommandAsync<InvitePlayerToMatchCommand, InvitePlayerToMatchCommandResponse>(command, cancellationToken);
		return createMatchResult.ToActionResult();
	}
	
	[HttpPatch]
	[Route("matches/{matchId:guid}/invitations/{invitationId:guid}")]
	[ProducesResponseType(typeof(InvitePlayerToMatchCommandResponse), StatusCodes.Status200OK)]
	[ProducesResponseType( StatusCodes.Status404NotFound)]
	[ProducesResponseType( StatusCodes.Status409Conflict)]
	public async Task<IActionResult> AcceptInvitation(Guid matchId, [FromBody]UpdateMatchInvitationRequest invitationRequest, CancellationToken cancellationToken)
	{
		var command = UpdateMatchInvitationCommand.Create(matchId, invitationRequest.Status);
		var createMatchResult = await _mediator.HandleCommandAsync<UpdateMatchInvitationCommand, UpdateMatchInvitationCommandResponse>(command, cancellationToken);
		return createMatchResult.ToActionResult();
	}
}