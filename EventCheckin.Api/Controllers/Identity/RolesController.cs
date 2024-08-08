using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using EventCheckin.Api.Infrastructure;
using EventCheckin.Api.Models;
using EventCheckin.DbContext.Entities.Identity;
using AutoMapper;

namespace EventCheckin.Api.Controllers.Identity
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class RolesController : BaseController
    {
        private readonly RoleManager<ApplicationRole> _roleManager;
        private readonly IMapper _mapper;
        public RolesController(
            RoleManager<ApplicationRole> roleManager,
            IMapper mapper)
        {
            this._roleManager = roleManager;
            _mapper = mapper;
        }

        /// <summary>
        /// Get all roles
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        //[ProducesResponseType(typeof(IEnumerable<ApplicationRole>), 200)]
        [Route("ListRole")]
        public ActionResult<CustomApiResponse> ListRole()
        {
            try
            {
               var roles = _roleManager.Roles
                         .Select(t => new ApplicationRole()
                        {
                            Id = t.Id,
                             Name = t.Name
                        });
                var roleModels = new List<RoleModel>();
                foreach (var role in roles)
                {
                    roleModels.Add(_mapper.Map<RoleModel>(role));
                }

                return new CustomApiResponse(roleModels);
            }
            catch (Exception e)
            {
                return new CustomApiResponse(e, 200, false);
            }
        }


        [HttpPost("AddRole")]
        public async Task<ActionResult<CustomApiResponse>> AddRole(RoleModel model)
        {
            if (!ModelState.IsValid)
                return new CustomApiResponse(ModelState.Values.Select(x => x.Errors.FirstOrDefault().ErrorMessage));

            var identityRole = new ApplicationRole { Name = model.Name };

            var result = await _roleManager.CreateAsync(identityRole).ConfigureAwait(false);
            
            if (!result.Succeeded) 
                return new  CustomApiResponse(result.Errors.Select(x => x.Description));
            
            return new CustomApiResponse(new RoleModel()
            {
                Id =identityRole.Id,
                Name = identityRole.Name
            });
        }

        [HttpPut]
        [Route("UpdateRole")]
        public async Task<ActionResult<CustomApiResponse>> UpdateRole(RoleModel model)
        {
            // Welcome to shit-show: https://stackoverflow.com/questions/36983656/identity-3-0-getting-a-user-by-id-when-the-id-is-int
            // var identityRole = _roleManager.Roles.FirstOrDefault(s => s.Id == Id);
            var identityRole = await _roleManager.FindByIdAsync(model.Id.ToString()).ConfigureAwait(false);

            if (identityRole == null)
                return new CustomApiResponse("Could not find role!",200,false);

            identityRole.Name = model.Name;

            var result = await _roleManager.UpdateAsync(identityRole).ConfigureAwait(false);
            if (result.Succeeded)
            {
                return new CustomApiResponse(new RoleModel()
                {
                    Id = identityRole.Id,
                    Name = identityRole.Name
                });
            }
            return new CustomApiResponse(result.Errors.Select(x => x.Description), 200, false);
        }

        [HttpDelete]
        [Route("DeleteRole")]
        public async Task<ActionResult<CustomApiResponse>> DeleteRole(int id)
        {
            if (string.IsNullOrEmpty(id.ToString()))
                return new CustomApiResponse(new[] { "Could not complete request!" }, 200, false);

            var identityRole = await _roleManager.FindByIdAsync(id.ToString()).ConfigureAwait(false);
            if (identityRole == null)
                return new CustomApiResponse(new [] { "Could not find role!" }, 200, false);

            var result = await _roleManager.DeleteAsync(identityRole).ConfigureAwait(false);
            if (result.Succeeded)
            {
                return new CustomApiResponse(id.ToString(),200, true);
            }
            return new CustomApiResponse(result.Errors.Select(x => x.Description), 200, false);
        }
    }
}
