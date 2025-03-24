using Microsoft.AspNetCore.Mvc;
using TGC.StockGame.Api.Event;

namespace TGC.StockGame.Api.Controllers;

public class EventController: CustomBaseController
{
	[HttpPut]
	[Route("games/{id:guid}/events")]
	[ProducesResponseType(typeof(EventResponse), StatusCodes.Status200OK)]
	[ProducesResponseType(StatusCodes.Status400BadRequest)]
	public async Task<EventResponse> CreateNewEventAsync()
	{
		
	}
}
