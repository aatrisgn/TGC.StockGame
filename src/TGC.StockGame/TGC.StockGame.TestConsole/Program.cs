// See https://aka.ms/new-console-template for more information

using Microsoft.Extensions.DependencyInjection;
using TGC.StockGame.Api;
using TGC.StockGame.Core.Game;
using TGC.StockGame.Core.Presentation;

Console.WriteLine("Hello, World!");

var serviceCollection = new ServiceCollection();

serviceCollection.AddStockGameApi();

var serviceProvider = serviceCollection.BuildServiceProvider();

using (var scope = serviceProvider.CreateScope())
{
	var servics = scope.ServiceProvider;
	var gameService = servics.GetService<IGameService>();

	var gameSpecification = new GameRequest
	{
		Name = "Test game",
		Players = new List<PlayerRequest>
		{
			new()
			{
				Name = "Blackrock Capital"
			},
			new()
			{
				Name = "Hippie Holdings"
			},
			new()
			{
				Name = "Evil Investments"
			}
		}
	};

	var newGame = await gameService.NewGameAsync(gameSpecification);

	PrintGame(newGame, true);

	Console.WriteLine("Progress how many times?");
	var input = int.Parse(Console.ReadLine());

	for (var i = 0; i < input; i++)
	{
		await gameService.ProgressGameAsync(newGame.Id);
	}
	
	var progressedGame = await gameService.GetGameByIdAsync(newGame.Id);

	PrintGame(progressedGame, false);

	Console.ReadLine();
}

void PrintGame(GameResponse game, bool printPlayers)
{
	Console.WriteLine("Game started!");

	if (printPlayers)
	{
		Console.WriteLine("Following players attend:");

		foreach (var player in game.Players)
		{
			Console.WriteLine(player.Name);
		}
	}

	PrintAsset(game.Inflation);
	PrintAsset(game.MortgageIndex);
	PrintAsset(game.InterestRate);

	foreach (var stock in game.Stocks)
	{
		PrintAsset(stock);
	}
}

void PrintAsset(AssetEntity asset)
{
	Console.WriteLine(asset.AssetName);

	foreach (var data in asset.AssetData)
	{
		Console.Write(data.PriceIndex+", ");
	}
}