using Microsoft.AspNetCore.Mvc;
using TGC.StockGame.Api.Game;

namespace TGC.StockGame.Api.Controllers;

public class GameController : CustomBaseController
{
	[HttpGet]
	[Route("games")]
	[ProducesResponseType(typeof(IEnumerable<GameResponse>), StatusCodes.Status200OK)]
	[ProducesResponseType(StatusCodes.Status400BadRequest)]
	public async Task<IEnumerable<GameResponse>> GetAllGamesAsync()
	{
		
	}

	[HttpGet]
	[Route("games/{id:guid}")]
	[ProducesResponseType(typeof(GameResponse), StatusCodes.Status200OK)]
	[ProducesResponseType(StatusCodes.Status400BadRequest)]
	public async Task<GameResponse> GetGameById(Guid id)
	{
		
	}

	[HttpPost]
	[Route("games")]
	[ProducesResponseType(typeof(GameResponse), StatusCodes.Status200OK)]
	[ProducesResponseType(StatusCodes.Status400BadRequest)]
	public async Task<GameResponse> CreateNewGame()
	{
		
	}
}
