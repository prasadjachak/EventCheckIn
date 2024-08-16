using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EventCheckin.DbContext.Migrations
{
    /// <inheritdoc />
    public partial class migration20 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<long>(
                name: "ParentMemberId",
                table: "Users",
                type: "bigint",
                nullable: false,
                defaultValue: 0L);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ParentMemberId",
                table: "Users");
        }
    }
}
