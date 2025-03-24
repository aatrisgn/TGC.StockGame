// See https://aka.ms/new-console-template for more information

using Microsoft.Extensions.DependencyInjection;
using TGC.StockGame.Api.Game;
using TGC.StockGame.Core.Game;

Console.WriteLine("Hello, World!");

var serviceCollection = new ServiceCollection();
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

	GameEntity newGame = gameService.NewGame(gameSpecification);
	
	PrintGame(newGame, true);
}

void PrintGame(GameEntity game, bool printPlayers)
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
		Console.WriteLine(data.PriceIndex+", ");
	}
}