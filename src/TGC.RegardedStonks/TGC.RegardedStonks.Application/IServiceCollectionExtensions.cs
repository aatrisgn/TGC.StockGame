using Microsoft.Extensions.DependencyInjection;
using TGC.Communication.cqrs;
using TGC.RegardedStonks.Application.Events;
using TGC.RegardedStonks.Application.Features.Admin.GetAllMatches;
using TGC.RegardedStonks.Application.Features.Matches.CreateMatch;
using TGC.RegardedStonks.Application.Features.Matches.CreateMatchEvent;
using TGC.RegardedStonks.Application.Features.Matches.GetAvailableMatches;
using TGC.RegardedStonks.Application.Features.Matches.GetMatchById;
using TGC.RegardedStonks.Application.Features.Players.AddPlayer;
using TGC.RegardedStonks.Application.Features.Players.CreatePlayerSelf;
using TGC.RegardedStonks.Application.Features.Players.GetAllPlayers;
using TGC.RegardedStonks.Application.Features.Players.GetPlayerDetailsSelf;
using TGC.RegardedStonks.Application.Features.Players.GetPlayerRoles;
using TGC.RegardedStonks.Application.Features.Players.UpdateUsernameSelf;

namespace TGC.RegardedStonks.Application;

public static class IServiceCollectionExtensions
{
	public static IServiceCollection RegisterApplication(this IServiceCollection services)
	{
		services.RegisterServices();
		services.RegisterQueries();
		services.RegisterCommands();
		return services;
	}
	
	private static IServiceCollection RegisterServices(this IServiceCollection services)
	{
		services.AddScoped<IMatchEventHandler, LoggingMatchEventHandler>();

		return services;
	}

	private static IServiceCollection RegisterQueries(this IServiceCollection services)
	{
		services.AddScoped<IQueryHandler, GetAvailableMatchesQueryHandler>();
		services.AddScoped<IQueryHandler, GetMatchByIdQueryHandler>();
		services.AddScoped<IQueryHandler, GetPlayerRolesQueryHandler>();
		services.AddScoped<IQueryHandler, GetAllMatchesQueryHandler>();
		services.AddScoped<IQueryHandler, GetAllPlayersQueryHandler>();
		services.AddScoped<IQueryHandler, GetPlayerDetailsSelfQueryHandler>();
		return services;
	}

	private static IServiceCollection RegisterCommands(this IServiceCollection services)
	{
		services.AddScoped<ICommandHandler, CreateMatchCommandHandler>();
		services.AddScoped<ICommandHandler, CreateMatchEventCommandHandler>();
		services.AddScoped<ICommandHandler, CreatePlayerCommandHandler>();
		services.AddScoped<ICommandHandler, CreatePlayerSelfCommandHandler>();
		services.AddScoped<ICommandHandler, UpdateUsernameSelfCommandHandler>();
		return services;
	}
}