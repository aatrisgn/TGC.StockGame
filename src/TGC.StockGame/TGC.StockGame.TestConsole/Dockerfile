FROM mcr.microsoft.com/dotnet/runtime:8.0 AS base
USER $APP_UID
WORKDIR /app

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["TGC.StockGame.TestConsole/TGC.StockGame.TestConsole.csproj", "TGC.StockGame.TestConsole/"]
RUN dotnet restore "TGC.StockGame.TestConsole/TGC.StockGame.TestConsole.csproj"
COPY . .
WORKDIR "/src/TGC.StockGame.TestConsole"
RUN dotnet build "TGC.StockGame.TestConsole.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "TGC.StockGame.TestConsole.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "TGC.StockGame.TestConsole.dll"]
