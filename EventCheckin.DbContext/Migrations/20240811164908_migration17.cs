using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EventCheckin.DbContext.Migrations
{
    /// <inheritdoc />
    public partial class migration17 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "AllowedParking",
                table: "TicketPasses",
                newName: "AllowedParkingCount");

            migrationBuilder.RenameColumn(
                name: "AllowedGuest",
                table: "TicketPasses",
                newName: "AllowedGuestCount");

            migrationBuilder.AddColumn<bool>(
                name: "IsActive",
                table: "TicketPasses",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "IsParkingAllowed",
                table: "TicketPasses",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsActive",
                table: "TicketPasses");

            migrationBuilder.DropColumn(
                name: "IsParkingAllowed",
                table: "TicketPasses");

            migrationBuilder.RenameColumn(
                name: "AllowedParkingCount",
                table: "TicketPasses",
                newName: "AllowedParking");

            migrationBuilder.RenameColumn(
                name: "AllowedGuestCount",
                table: "TicketPasses",
                newName: "AllowedGuest");
        }
    }
}
