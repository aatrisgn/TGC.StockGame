using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TGC.RegardedStonks.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class InitialSeeding : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "players",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Oid = table.Column<Guid>(type: "uuid", maxLength: 100, nullable: false),
                    Username = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    ProfilePicture = table.Column<string>(type: "text", nullable: false),
                    Created = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false),
                    LastEdited = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: true),
                    CreatedBy = table.Column<Guid>(type: "uuid", nullable: false),
                    UpdatedBy = table.Column<Guid>(type: "uuid", nullable: false),
                    Active = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_players", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "stock_matches",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Name = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: false),
                    Status = table.Column<int>(type: "integer", nullable: false),
                    EndDateTime = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: true),
                    StartingCapital = table.Column<decimal>(type: "numeric(18,2)", nullable: false),
                    Created = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false),
                    LastEdited = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: true),
                    CreatedBy = table.Column<Guid>(type: "uuid", nullable: false),
                    UpdatedBy = table.Column<Guid>(type: "uuid", nullable: false),
                    Active = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_stock_matches", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "template_stock_companies",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Name = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: false),
                    ShortName = table.Column<string>(type: "character varying(10)", maxLength: 10, nullable: false),
                    Description = table.Column<string>(type: "character varying(500)", maxLength: 500, nullable: false),
                    Price = table.Column<decimal>(type: "numeric(18,2)", nullable: false),
                    AvailableStocks = table.Column<int>(type: "integer", nullable: false),
                    TotalStocks = table.Column<int>(type: "integer", nullable: false),
                    LastReportedRevenue = table.Column<decimal>(type: "numeric(18,2)", nullable: true),
                    LastReportedProfit = table.Column<decimal>(type: "numeric(18,2)", nullable: true),
                    LongTermDebt = table.Column<decimal>(type: "numeric(18,2)", nullable: true),
                    ShortTermDebt = table.Column<decimal>(type: "numeric(18,2)", nullable: true),
                    LiquidAssets = table.Column<decimal>(type: "numeric(18,2)", nullable: true),
                    NonLiquidAssets = table.Column<decimal>(type: "numeric(18,2)", nullable: true),
                    Created = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false),
                    LastEdited = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: true),
                    CreatedBy = table.Column<Guid>(type: "uuid", nullable: false),
                    UpdatedBy = table.Column<Guid>(type: "uuid", nullable: false),
                    Active = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_template_stock_companies", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "match_events",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    StockMatchId = table.Column<Guid>(type: "uuid", nullable: false),
                    EventType = table.Column<int>(type: "integer", nullable: false),
                    Payload = table.Column<string>(type: "jsonb", nullable: true),
                    Created = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false),
                    LastEdited = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: true),
                    CreatedBy = table.Column<Guid>(type: "uuid", nullable: false),
                    UpdatedBy = table.Column<Guid>(type: "uuid", nullable: false),
                    Active = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_match_events", x => x.Id);
                    table.ForeignKey(
                        name: "FK_match_events_stock_matches_StockMatchId",
                        column: x => x.StockMatchId,
                        principalTable: "stock_matches",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "player_portfolios",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    StockMatchId = table.Column<Guid>(type: "uuid", nullable: false),
                    PlayerId = table.Column<Guid>(type: "uuid", nullable: false),
                    Cash = table.Column<decimal>(type: "numeric(18,2)", nullable: false),
                    Status = table.Column<int>(type: "integer", nullable: false),
                    PrisonReleaseAt = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: true),
                    Created = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false),
                    LastEdited = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: true),
                    CreatedBy = table.Column<Guid>(type: "uuid", nullable: false),
                    UpdatedBy = table.Column<Guid>(type: "uuid", nullable: false),
                    Active = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_player_portfolios", x => x.Id);
                    table.ForeignKey(
                        name: "FK_player_portfolios_players_PlayerId",
                        column: x => x.PlayerId,
                        principalTable: "players",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_player_portfolios_stock_matches_StockMatchId",
                        column: x => x.StockMatchId,
                        principalTable: "stock_matches",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "stock_companies",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Name = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: false),
                    ShortName = table.Column<string>(type: "character varying(10)", maxLength: 10, nullable: false),
                    Description = table.Column<string>(type: "character varying(500)", maxLength: 500, nullable: false),
                    Price = table.Column<decimal>(type: "numeric(18,2)", nullable: false),
                    AvailableStocks = table.Column<int>(type: "integer", nullable: false),
                    TotalStocks = table.Column<int>(type: "integer", nullable: false),
                    LastReportedRevenue = table.Column<decimal>(type: "numeric(18,2)", nullable: true),
                    LastReportedProfit = table.Column<decimal>(type: "numeric(18,2)", nullable: true),
                    LongTermDebt = table.Column<decimal>(type: "numeric(18,2)", nullable: true),
                    ShortTermDebt = table.Column<decimal>(type: "numeric(18,2)", nullable: true),
                    LiquidAssets = table.Column<decimal>(type: "numeric(18,2)", nullable: true),
                    NonLiquidAssets = table.Column<decimal>(type: "numeric(18,2)", nullable: true),
                    Bankrupt = table.Column<bool>(type: "boolean", nullable: false),
                    StockMatchId = table.Column<Guid>(type: "uuid", nullable: false),
                    Created = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false),
                    LastEdited = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: true),
                    CreatedBy = table.Column<Guid>(type: "uuid", nullable: false),
                    UpdatedBy = table.Column<Guid>(type: "uuid", nullable: false),
                    Active = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_stock_companies", x => x.Id);
                    table.ForeignKey(
                        name: "FK_stock_companies_stock_matches_StockMatchId",
                        column: x => x.StockMatchId,
                        principalTable: "stock_matches",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "stock_match_players",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    StockMatchId = table.Column<Guid>(type: "uuid", nullable: false),
                    PlayerId = table.Column<Guid>(type: "uuid", nullable: false),
                    JoinedAt = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false),
                    Created = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false),
                    LastEdited = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: true),
                    CreatedBy = table.Column<Guid>(type: "uuid", nullable: false),
                    UpdatedBy = table.Column<Guid>(type: "uuid", nullable: false),
                    Active = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_stock_match_players", x => x.Id);
                    table.ForeignKey(
                        name: "FK_stock_match_players_players_PlayerId",
                        column: x => x.PlayerId,
                        principalTable: "players",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_stock_match_players_stock_matches_StockMatchId",
                        column: x => x.StockMatchId,
                        principalTable: "stock_matches",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "player_stock_portfolios",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    PlayerPortfolioId = table.Column<Guid>(type: "uuid", nullable: false),
                    StockCompanyId = table.Column<Guid>(type: "uuid", nullable: false),
                    Quantity = table.Column<int>(type: "integer", nullable: false),
                    Created = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false),
                    LastEdited = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: true),
                    CreatedBy = table.Column<Guid>(type: "uuid", nullable: false),
                    UpdatedBy = table.Column<Guid>(type: "uuid", nullable: false),
                    Active = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_player_stock_portfolios", x => x.Id);
                    table.ForeignKey(
                        name: "FK_player_stock_portfolios_player_portfolios_PlayerPortfolioId",
                        column: x => x.PlayerPortfolioId,
                        principalTable: "player_portfolios",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_player_stock_portfolios_stock_companies_StockCompanyId",
                        column: x => x.StockCompanyId,
                        principalTable: "stock_companies",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_match_events_Active",
                table: "match_events",
                column: "Active");

            migrationBuilder.CreateIndex(
                name: "IX_match_events_StockMatchId",
                table: "match_events",
                column: "StockMatchId");

            migrationBuilder.CreateIndex(
                name: "IX_player_portfolios_Active",
                table: "player_portfolios",
                column: "Active");

            migrationBuilder.CreateIndex(
                name: "IX_player_portfolios_PlayerId",
                table: "player_portfolios",
                column: "PlayerId");

            migrationBuilder.CreateIndex(
                name: "IX_player_portfolios_StockMatchId_PlayerId",
                table: "player_portfolios",
                columns: new[] { "StockMatchId", "PlayerId" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_player_stock_portfolios_Active",
                table: "player_stock_portfolios",
                column: "Active");

            migrationBuilder.CreateIndex(
                name: "IX_player_stock_portfolios_PlayerPortfolioId_StockCompanyId",
                table: "player_stock_portfolios",
                columns: new[] { "PlayerPortfolioId", "StockCompanyId" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_player_stock_portfolios_StockCompanyId",
                table: "player_stock_portfolios",
                column: "StockCompanyId");

            migrationBuilder.CreateIndex(
                name: "IX_players_Active",
                table: "players",
                column: "Active");

            migrationBuilder.CreateIndex(
                name: "IX_players_Oid",
                table: "players",
                column: "Oid",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_players_Username",
                table: "players",
                column: "Username",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_stock_companies_Active",
                table: "stock_companies",
                column: "Active");

            migrationBuilder.CreateIndex(
                name: "IX_stock_companies_StockMatchId",
                table: "stock_companies",
                column: "StockMatchId");

            migrationBuilder.CreateIndex(
                name: "IX_stock_match_players_PlayerId",
                table: "stock_match_players",
                column: "PlayerId");

            migrationBuilder.CreateIndex(
                name: "IX_stock_match_players_StockMatchId_PlayerId",
                table: "stock_match_players",
                columns: new[] { "StockMatchId", "PlayerId" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_stock_matches_Active",
                table: "stock_matches",
                column: "Active");

            migrationBuilder.CreateIndex(
                name: "IX_template_stock_companies_Active",
                table: "template_stock_companies",
                column: "Active");

            migrationBuilder.CreateIndex(
                name: "IX_template_stock_companies_Name",
                table: "template_stock_companies",
                column: "Name",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "match_events");

            migrationBuilder.DropTable(
                name: "player_stock_portfolios");

            migrationBuilder.DropTable(
                name: "stock_match_players");

            migrationBuilder.DropTable(
                name: "template_stock_companies");

            migrationBuilder.DropTable(
                name: "player_portfolios");

            migrationBuilder.DropTable(
                name: "stock_companies");

            migrationBuilder.DropTable(
                name: "players");

            migrationBuilder.DropTable(
                name: "stock_matches");
        }
    }
}
