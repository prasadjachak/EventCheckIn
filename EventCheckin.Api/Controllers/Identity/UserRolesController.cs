using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using EventCheckin.Api.Models;
using EventCheckin.DbContext.Entities.Identity;

namespace EventCheckin.Api.Controllers.Identity
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserRolesController : ControllerBase
{
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<ApplicationRole> _roleManager;

        public UserRolesController(
            UserManager<ApplicationUser> userManager,
            RoleManager<ApplicationRole> roleManager
            )
        {
            this._userManager = userManager;
            this._roleManager = roleManager;
        }

        [HttpGet("ListUserRoles/{Id}")]
        public async Task<IActionResult> ListUserRoles(long id)
        {
            ApplicationUser user = await _userManager.FindByIdAsync(id.ToString()).ConfigureAwait(false);
            return Ok(await _userManager.GetRolesAsync(user).ConfigureAwait(false));
        }

        [HttpPost("AddUserRole")]
        public async Task<IActionResult> AddUserRole([FromBody] UserRoleModel model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState.Values.Select(x => x.Errors.FirstOrDefault().ErrorMessage));

            ApplicationUser user = await _userManager.FindByIdAsync(model.UserId.ToString()).ConfigureAwait(false);
            if (user == null)
                return BadRequest(new string[] { "Could not find user!" });

            ApplicationRole role = await _roleManager.FindByIdAsync(model.RoleId.ToString()).ConfigureAwait(false);
            if (role == null)
                return BadRequest(new string[] { "Could not find role!" });

            IdentityResult result = await _userManager.AddToRoleAsync(user, role.Name).ConfigureAwait(false);
            if (result.Succeeded)
            {
                return Ok(role.Name);
            }
            return BadRequest(result.Errors.Select(x => x.Description));
        }

        [HttpDelete("DeleteUserRole/{Id}/{RoleId}")]
        public async Task<IActionResult> DeleteUserRole(string id, string roleId)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState.Values.Select(x => x.Errors.FirstOrDefault().ErrorMessage));

            ApplicationUser user = await _userManager.FindByIdAsync(id).ConfigureAwait(false);
            if (user == null)
                return BadRequest(new string[] { "Could not find user!" });

            ApplicationRole role = await _roleManager.FindByIdAsync(roleId).ConfigureAwait(false);
            if (user == null)
                return BadRequest(new string[] { "Could not find role!" });

            IdentityResult result = await _userManager.RemoveFromRoleAsync(user, role.Name).ConfigureAwait(false);
            if (result.Succeeded)
            {
                return Ok();
            }
            return BadRequest(result.Errors.Select(x => x.Description));
        }
    }
}
