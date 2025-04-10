using Microsoft.AspNetCore.Mvc;
using TGC.StockGame.Api.Game;

namespace TGC.StockGame.Api.Controllers;

public class GameController : CustomBaseController
{
	[HttpGet]
	[Route("games")]
	[ProducesResponseType(typeof(IEnumerable<GameResponse>), StatusCodes.Status200OK)]
	[ProducesResponseType(StatusCodes.Status400BadRequest)]
	public Task<IEnumerable<GameResponse>> GetAllGamesAsync()
	{
		return Task.FromResult(new List<GameResponse>());
	}

	[HttpGet]
	[Route("games/{id:guid}")]
	[ProducesResponseType(typeof(GameResponse), StatusCodes.Status200OK)]
	[ProducesResponseType(StatusCodes.Status400BadRequest)]
	public Task<GameResponse> GetGameById(Guid id)
	{
		return Task.FromResult(new GameResponse());
	}

	[HttpPost]
	[Route("games")]
	[ProducesResponseType(typeof(GameResponse), StatusCodes.Status200OK)]
	[ProducesResponseType(StatusCodes.Status400BadRequest)]
	public Task<GameResponse> CreateNewGame()
	{
		return Task.FromResult(new GameResponse());
	}
}
