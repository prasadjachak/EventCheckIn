using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EventCheckin.DbContext.Migrations
{
    /// <inheritdoc />
    public partial class migration16 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "AllowedParkingCount",
                table: "TicketPasses",
                newName: "AllowedParking");

            migrationBuilder.AddColumn<long>(
                name: "ParentId",
                table: "Users",
                type: "bigint",
                nullable: false,
                defaultValue: 0L);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ParentId",
                table: "Users");

            migrationBuilder.RenameColumn(
                name: "AllowedParking",
                table: "TicketPasses",
                newName: "AllowedParkingCount");
        }
    }
}
