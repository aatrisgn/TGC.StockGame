
---
name: Defining domain model
description: Feature describing the domain model of the application and the relationships
---

# Overview

This document describes the domain model needed for the TGC.RegardedStonks application. It describes each entity and their relations. It is on domain-level meaning certain details may be excluded.

The domain model seeks to represent a simulation-game where players can purchase and sell stocks in for a given amount of real-time (e.g. 2 hours) and see who is the best. During a game random events may occur which causes the price of a stock to go up or down. Certain events will happen which can provide one or more players and advantage if done right.

Each player refers to a user who is logged in. Each player can attend many matches at the same time. In a match, a player has a portfolio which summarizes his holdings of stocks and capital. Players will start a match with the same amount of capital and can use that for purchasing stocks.

The stocks in a match is for a given company. There is a set of template companies which are copied over to each new match. This means, all matches has the same set of companies, but they are not directly related. A company has a given price and a given set of stocks available. Not necessarily the same across companies.

The idea of the game is to be the player with the most valuable portfolio (stocks + capital) when the timer of the game runs out.

## Entities

This section describes all the entities in the domain model

### Stock Match

This is the central model which contains information about a given game. It contains the standard metadata such as created at, created by and is the central reference point for other entities.

It has a many-to-many relationship with players, since once player can be a part of multiple matches and one match has at least two people attending it.

It has a one-to-many with the Company where many companies reference a single match. The same goes for Player Portfolio. A single match has many Player Portfolio.

Lastly, each Match will have multiple events associated for different purposes.

### Match Events

Match Events are different actions which incur during a match. It can be increase in a company stock price, decrease in a company stock price, purchase of a stock, sell of a stock, market crash, inside trading-event and such. They all share a base set of properties such as ID, MatchID, a dInominator created, Created by but also possess a generic / dynamic property which can be more specific info about that specific type of event.

### Player
A player references a user who is authenticated and is logged in. The Player entity has some additional information such as Profile Name and Profile Picture. It also references the OID inside the provided JWT token. There should only be one Player entity pr. OID.

### Player Portfolio

A player portfolio contains information about how a specific player is doing in a given match. It is his available cash, whether the player is active, bankrupt or quit, whether he is in prison (Unable to trade) and other potential future flags. A player portfolio reference a given player and match. That means, a Player can have multiple Portfolios across multiple matches, but only one portfolio pr. match.

### Player Stock Portfolio

In a given match a player may decide to purchase multiple stocks of different companies. The Player Stock Portfolio keeps account of how many stocks a given player owns of a given company.

### Company
The company references an entity which describes a given company for a match. That means, a match can have many companies, but a company can only belong to a single match. The company has information such as name, shortcode, description, but also financial information such as stock price, amount of total stocks, last reported revenue, last reported profit, long term debt, short term debt, liquid assests, non-liquid assets. All of these values are initially copied from the template company seeding functionality.

### Template Company
This is a template entity meaning it is seeded automatically on start-up. It is used to copy companies into a new match on every creation. This is already in place.

## Clarifications (resolved during review)

- **Match Events**: build a single unified `MatchEvent` entity/table with an `EventType` discriminator and a generic `Payload` field (mapped as `jsonb`), as originally described, rather than the multiple partially-scaffolded event shapes that existed in the codebase (`IStockMarketEvent`, `IPlayerStockEvent`, `IPlayerLoginEvent`, and a separate `Domain`-project class hierarchy). Those were retired as superseded scaffolding. `ICompanyStockAggregate` is unrelated to events and was left untouched.
- **Player identity**: `Player` gets a dedicated `Oid` field (unique) as the true identity key populated from the JWT, in addition to the existing `Username`/`ProfilePicture`.
- **"In prison" mechanic**: modeled as a timed restriction (`PrisonReleaseAt` nullable timestamp on `PlayerPortfolio`) rather than a bare boolean, so it can expire automatically.
- **Starting capital**: configurable per match — `StartingCapital` lives on `StockMatch` and is set at match creation.
- **Money fields**: all financial fields (`Price`, `Cash`, revenue/profit/debt/asset fields) use `decimal`, not `float`, to avoid rounding errors. The pre-existing `Price` field was migrated from `float` to `decimal` for consistency.
- **Stock counts**: `TotalStocks` (fixed, copied from template) is a separate field from the existing `AvailableStocks` (the shrinking, currently-unsold pool).
- **Player Stock Portfolio scoping**: references `PlayerPortfolio` (which is already scoped to one player + match) rather than duplicating `PlayerId`/`StockMatchId` directly.
- **"At least two people attending" a match**: descriptive only, not a data-model constraint. No DB-level enforcement; left for a future application-layer validation when match-start logic is built.

## Implementation notes

The data model was implemented directly on top of the existing `BaseEntity`/`IBaseEntity` + interface-per-entity + `IEntityTypeConfiguration<T>` conventions (see `TGC.RegardedStonks.Infrastructure/Entities`, `TGC.RegardedStonks.Application/Repositories/Entities`, `TGC.RegardedStonks.Infrastructure/Persistence/Configurations`). Scope was limited to entities, interfaces, EF configurations, and migrations — the business logic that will populate these tables (copying template companies into a new match, creating a `PlayerPortfolio` on join, granting starting capital, emitting match events) is intentionally out of scope and belongs to later features.

- **Player**: added `Oid` (`string`, unique index) alongside `Username`/`ProfilePicture`.
- **StockMatch**: added `StartingCapital` (`decimal`), plumbed through `CreateMatchRequest` → `CreateMatchCommand` → `CreateMatchCommandHandler` → `IMatchRepository.AddAsync`.
- **StockCompany** and **TemplateStockCompany** (kept in lockstep, since Company fields are copied from Template): `Price` changed `float` → `decimal`; added `TotalStocks` (`int`), `LastReportedRevenue`, `LastReportedProfit`, `LongTermDebt`, `ShortTermDebt`, `LiquidAssets`, `NonLiquidAssets` (all nullable `decimal`, since the 100 existing seed rows in `TemplateStockCompanySeedData.cs` weren't backfilled with fabricated figures — `TotalStocks` defaults to `AvailableStocks` when not supplied).
- **PlayerPortfolio** (new): `StockMatchId`, `PlayerId`, `Cash` (`decimal`), `Status` (new `PortfolioStatus` enum: `active`/`bankrupt`/`quit`), `PrisonReleaseAt` (`DateTimeOffset?`). Unique composite index on `(StockMatchId, PlayerId)`.
- **PlayerStockPortfolio** (new): `PlayerPortfolioId`, `StockCompanyId`, `Quantity`. Unique composite index on `(PlayerPortfolioId, StockCompanyId)`.
- **MatchEvent** (new): `StockMatchId`, `EventType` (new `MatchEventType` enum), `Payload` (`string`, mapped to Postgres `jsonb`). Replaces the retired `IStockMarketEvent`/`IPlayerStockEvent`/`IPlayerLoginEvent` interfaces and the `Domain/Events/*` class-hierarchy stubs (`StockEvent`, `IncreaseStockPriceEvent`, `DecreaseStockPriceEvent`, `PurchaseStockEvent`, `SellStockEvent`), which were deleted.
- New enums `PortfolioStatus` and `MatchEventType` were added under `Domain/Enums`, alongside the existing `MatchStatus`.
- Deviation found along the way: the pre-existing local migration history (`TGC.RegardedStonks.Infrastructure/Migrations`, entirely uncommitted) was broken independently of this feature — an empty no-op `AddedPlayerEntity` migration never created the `players` table, and `stock_matches.Status`/`EndDateTime` were never created by any migration despite being in the model. Since nothing was committed, the whole migration history was regenerated from scratch into a single `InitialCreate` migration reflecting the current, correct model (verified by applying it to a fresh local Postgres database and confirming the app starts and seeds all 100 template companies).
