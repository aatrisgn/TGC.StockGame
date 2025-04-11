using Microsoft.AspNetCore.Mvc;
using TGC.StockGame.Core.Game;
using TGC.StockGame.Core.Presentation;

namespace TGC.StockGame.Api.Controllers;

public class GameController : CustomBaseController
{
	private readonly IGameService _gameService;
	public GameController(IGameService gameService)
	{
		_gameService = gameService;
	}

	[HttpGet]
	[Route("games")]
	[ProducesResponseType(typeof(IEnumerable<GameResponse>), StatusCodes.Status200OK)]
	[ProducesResponseType(StatusCodes.Status400BadRequest)]
	public async Task<IEnumerable<GameResponse>> GetAllGamesAsync()
	{
		return await _gameService.GetAllGamesAsync();
	}

	[HttpGet]
	[Route("games/{id:guid}")]
	[ProducesResponseType(typeof(GameResponse), StatusCodes.Status200OK)]
	[ProducesResponseType(StatusCodes.Status400BadRequest)]
	public async Task<GameResponse> GetGameById(Guid id)
	{
		return await _gameService.GetGameByIdAsync(id);
	}

	[HttpPost]
	[Route("games")]
	[ProducesResponseType(typeof(GameResponse), StatusCodes.Status200OK)]
	[ProducesResponseType(StatusCodes.Status400BadRequest)]
	public async Task<GameResponse> CreateNewGame([FromBody] GameRequest gameRequest)
	{
		var newGame = await _gameService.NewGameAsync(gameRequest);
		return newGame;
	}

	[HttpPut]
	[Route("games/{id:guid}/progress")]
	[ProducesResponseType(typeof(GameResponse), StatusCodes.Status200OK)]
	[ProducesResponseType(StatusCodes.Status400BadRequest)]
	public async Task<GameResponse> ProgressGame(Guid id)
	{
		var progressedGame = await _gameService.ProgressGameAsync(id);
		return progressedGame;
	}
}
