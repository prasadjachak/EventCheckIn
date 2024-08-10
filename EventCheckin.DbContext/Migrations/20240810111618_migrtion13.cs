using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EventCheckin.DbContext.Migrations
{
    /// <inheritdoc />
    public partial class migrtion13 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "EntryOTP",
                table: "TicketPasses",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "EntryOTPTime",
                table: "TicketPasses",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "EntrySecurity",
                table: "TicketPasses",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "EntryStatus",
                table: "TicketPasses",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "ParkSecurity",
                table: "TicketPasses",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "ParkStatus",
                table: "TicketPasses",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "ParkingOTP",
                table: "TicketPasses",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "ParkingOTPTime",
                table: "TicketPasses",
                type: "datetime2",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "EntryOTP",
                table: "TicketPasses");

            migrationBuilder.DropColumn(
                name: "EntryOTPTime",
                table: "TicketPasses");

            migrationBuilder.DropColumn(
                name: "EntrySecurity",
                table: "TicketPasses");

            migrationBuilder.DropColumn(
                name: "EntryStatus",
                table: "TicketPasses");

            migrationBuilder.DropColumn(
                name: "ParkSecurity",
                table: "TicketPasses");

            migrationBuilder.DropColumn(
                name: "ParkStatus",
                table: "TicketPasses");

            migrationBuilder.DropColumn(
                name: "ParkingOTP",
                table: "TicketPasses");

            migrationBuilder.DropColumn(
                name: "ParkingOTPTime",
                table: "TicketPasses");
        }
    }
}
