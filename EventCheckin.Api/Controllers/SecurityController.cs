using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using EventCheckin.Api.Infrastructure;
using EventCheckin.Api.Models;
using EventCheckin.Api.Models.Security;
using EventCheckin.DbContext.Entities;
using EventCheckin.DbContext.Entities.Identity;
using EventCheckin.Services.Permission;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Primitives;

namespace Absolute.Web.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public partial class SecurityController : BaseController
    {
        #region Fields
        
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IPermissionService _permissionService;
        private readonly RoleManager<ApplicationRole> _roleManager;
        private readonly IMapper _mapper;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly IHostingEnvironment _env;

        #endregion

        #region Ctor

        public SecurityController(
            UserManager<ApplicationUser> userManager,
            IPermissionService permissionService,
            RoleManager<ApplicationRole> roleManager,
            IMapper mapper,
            IHostingEnvironment env,
            IHttpContextAccessor httpContextAccessor)
        {
            _userManager = userManager;
            _permissionService = permissionService;
            _roleManager = roleManager;
            _mapper = mapper;
            _env = env;
            _httpContextAccessor = httpContextAccessor;
        }

        #endregion

        #region Methods


        //[HttpGet("Permissions")]
        //public virtual async Task<ActionResult<CustomApiResponse>> Permissions()
        //{

        //    // prepare model
        //    var model = await _securityModelFactory.PreparePermissionMappingModelAsync(new PermissionMappingModel());

        //    return new CustomApiResponse(model);
        //}

        //[HttpPost("PermissionsSave")]
        //public virtual async Task<ActionResult<CustomApiResponse>> PermissionsSave(PermissionMappingModel model, IFormCollection form)
        //{
        //    var test = _httpContextAccessor.HttpContext?.User.FindFirstValue(ClaimTypes.NameIdentifier);

        //    var user = await _userManager.FindByNameAsync(test);

        //    var features = await _permissionService.GetAllFeaturesAsync();
        //    var roleNames = _userManager.GetRolesAsync(user).Result;
        //    var userRoles = _roleManager.Roles.Where(t => roleNames.Equals(t.Name)).ToList();

        //    foreach (var cr in userRoles)
        //    {
        //        var formKey = "allow_" + cr.Id;
        //        var featureSystemNamesToRestrict = !StringValues.IsNullOrEmpty(form[formKey])
        //            ? form[formKey].ToString().Split(new[] { ',' }, StringSplitOptions.RemoveEmptyEntries).ToList()
        //            : new List<string>();

        //        foreach (var pr in features)
        //        {
        //            var allow = (await _permissionService.GetAllRolePermissions(pr.Id, cr.Id)).FirstOrDefault();

        //            if (allow != null)
        //                    continue;

        //            if (allow == null)
        //            {
        //                await _permissionService.InsertRolePermissionAsync(new RolePermission { FeatureId = pr.Id, RoleId = cr.Id });
        //            }
        //            else
        //            {
        //                var rolePermissions = await _permissionService.GetAllRolePermissions(pr.Id, cr.Id);
        //                foreach (var rolepermission in rolePermissions)
        //                    await _permissionService.DeleteRolePermissionAsync(rolepermission);
        //            }

        //        }
        //    }


        //    return RedirectToAction("Permissions");
        //}

        [HttpPost("PermissionsSingleSave")]
        public virtual async Task<ActionResult<CustomApiResponse>> PermissionsSingleSave(RolePermissionModel rolePermission)
        {
            //if (!await _permissionService.AuthorizeAsync(StandardPermissionProvider.ManageAcl))
            //    return AccessDeniedView();

            var feature = (await _permissionService.GetAllFeaturesAsync(rolePermission.Permission)).FirstOrDefault();
            if(feature != null) 
            { 
                if (rolePermission.Enabled)
                {
                    var existingPermission = await (_permissionService.GetAllRolePermissions(feature.Id,rolePermission.RoleId));

                    if(existingPermission.Count == 0)
                    {
                        await _permissionService.InsertRolePermissionAsync(new RolePermission
                        {
                            FeatureId = feature.Id,
                            RoleId = rolePermission.RoleId,
                            Permission = feature.Description,
                            Enabled = rolePermission.Enabled
                        });
                    }
                    else
                    {
                        if(existingPermission.Count > 0)
                        {
                            var existingPermission1 = existingPermission.FirstOrDefault();
                            existingPermission1.Enabled = rolePermission.Enabled;
                            existingPermission1.Permission = feature.Description;
                            await _permissionService.UpdateRolePermissionAsync(existingPermission1);
                        }
                    }
                }
                else
                {
                    var rolePermissions = await _permissionService.GetAllRolePermissions(feature.Id, rolePermission.RoleId);
                    foreach (var rolepermission in rolePermissions)
                        await _permissionService.DeleteRolePermissionAsync(rolepermission);
                }
            }


            return new CustomApiResponse(rolePermission);
        }

        [HttpPost("ListRolePermissions")]
        public virtual async Task<ActionResult<CustomApiResponse>> ListRolePermissions(RolePermissionSearchModel searchModel)
        {
            //if (!await _permissionService.AuthorizeAsync(StandardPermissionProvider.ManageUsers))
            //    return await AccessDeniedDataTablesJson();

            //prepare model

            var userRoles = await _permissionService.GetMappingByUserRoleIdAsync(searchModel.RoleId);

            var items = new List<RolePermissionModel>();

            // prepare list model

            foreach (var userRole in userRoles)
            {
                RolePermissionModel rolePermission = null;
                try
                {
                    rolePermission = _mapper.Map<RolePermissionModel>(userRole);
                }
                catch(Exception ex)
                {

                }
                
                items.Add(rolePermission);
            }

            return new CustomApiResponse(items);
        }
        #endregion
    }
}