using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EventCheckin.DbContext.Migrations
{
    /// <inheritdoc />
    public partial class migration21 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "MemberNo",
                table: "Users",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "MemberNo",
                table: "Users");
        }
    }
}
