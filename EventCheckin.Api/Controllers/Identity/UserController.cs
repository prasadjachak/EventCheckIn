using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using EventCheckin.Api.Models;
using EventCheckin.DbContext.Entities.Identity;
using Microsoft.Net.Http.Headers;
using Newtonsoft.Json.Serialization;
using Newtonsoft.Json;
using Microsoft.Extensions.FileProviders;
using System.Text.RegularExpressions;
using System.Text;
using System.Security.Claims;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Hosting;
using System.Data;
using AutoMapper;
using EventCheckin.Services.Permission;
using EventCheckin.Api.Models.Events;
using System.IdentityModel.Tokens.Jwt;
using EventCheckin.Services;
using EventCheckin.Api.Infrastructure;

namespace EventCheckin.Api.Controllers.Identity
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : BaseController
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<ApplicationRole> _roleManager;
        private readonly IPermissionService _permissionService;
        private readonly ITicketPassService _ticketPassService;
    
        private IHostingEnvironment _env;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly IMapper _mapper;

        public UserController(
            UserManager<ApplicationUser> userManager,
            RoleManager<ApplicationRole> roleManager,
            IPermissionService permissionService,
            ITicketPassService ticketPassService,
            IMapper mapper,
            IHostingEnvironment env,
            IHttpContextAccessor httpContextAccessor
            )
        {
            this._userManager = userManager;
            this._roleManager = roleManager;
            this._permissionService = permissionService;
           
            _ticketPassService = ticketPassService;
            _mapper = mapper;
            _env = env;
            _httpContextAccessor = httpContextAccessor;
        }

        [HttpPost]
        //[ProducesResponseType(typeof(IEnumerable<IdentityUser>), 200)]
        [Route("ListUser")]
        public async Task<ActionResult<CustomApiResponse>> ListUser(UserSearchModel model) {
            
            var users = _userManager.Users
              .Skip((model.PageNumber - 1) * model.PageSize)
              .Take(model.PageSize)
              .Select(t=> new ApplicationUser()
              {
                  Id= t.Id,
                  UserName = t.UserName,
                  PhoneNumber = t.PhoneNumber,
                  Name = t.Name,
                  DeviceId = t.DeviceId,
              }).ToList();

            var userModels = new List<UserModel>();
            foreach (var user1 in users)
            {
                var user = await _userManager.FindByIdAsync(user1.Id.ToString());
                var userModel = _mapper.Map<UserModel>(user);
                var roleNames = await _userManager.GetRolesAsync(user);

                foreach (var rolename in roleNames)
                {
                    var role = await _roleManager.FindByNameAsync(rolename);
                    userModel.UserRoles.Add(_mapper.Map<RoleModel>(role));
                    userModel.RoleIds.Add(role.Id);
                }

                userModels.Add(userModel);
            }

            return new CustomApiResponse(userModels);
        }

        [HttpGet("GetUser")]
        public async Task<ActionResult<CustomApiResponse>> GetUser(int id)
        {
            if (string.IsNullOrEmpty(id.ToString()))
                return new CustomApiResponse(new string[] { "Empty parameter!" }, 200, false);

            var user =_userManager.Users
                .Where(user => user.Id == id)
                .Select(user => new ApplicationUser() 
                {
                    Id = user.Id,
                    Email = user.Email,
                    PhoneNumber = user.PhoneNumber,
                    EmailConfirmed = user.EmailConfirmed,
                    LockoutEnabled = user.LockoutEnabled,
                    TwoFactorEnabled =user.TwoFactorEnabled
                })
                .FirstOrDefault();
            var userModel = _mapper.Map<UserModel>(user);
            var roleNames = await _userManager.GetRolesAsync(user);

            foreach(var rolename in roleNames)
            {
                var role = await _roleManager.FindByNameAsync(rolename);
                userModel.UserRoles.Add(_mapper.Map<RoleModel>(role));
                userModel.RoleIds.Add(role.Id);
            }

            return new CustomApiResponse(userModel);
        }

        [HttpPost("AddUser")]
        public async Task<ActionResult<CustomApiResponse>> AddUser(UserModel model)
        {
            if (!ModelState.IsValid)
                return new CustomApiResponse(ModelState.Values.Select(x => x.Errors.FirstOrDefault().ErrorMessage),200,false);

            ApplicationUser user = new ApplicationUser
            {
                UserName = model.PhoneNumber,
                PhoneNumber = model.PhoneNumber,
                Name = model.Name,
                PhoneNumberConfirmed = false,
                Email = model.PhoneNumber + "@abc123.com",
                EmailConfirmed = true,
                LockoutEnabled = false, 
                TwoFactorEnabled = false
            };
            model.Password = "Admin@32149870";
            model.ConfirmPassword = "Admin@32149870";

            IdentityResult result = await _userManager.CreateAsync(user, model.Password).ConfigureAwait(false);
            if (result.Succeeded)
            {
                var roles = _roleManager.Roles
                        .Select(t => new ApplicationRole()
                        {
                            Id = t.Id,
                            Name = t.Name
                        });

                var userRoleNames = await _userManager.GetRolesAsync(user);
                var editUserRoles = new List<string>();

                foreach (var userRoleId in model.RoleIds)
                {
                    var role = roles.Where(t => t.Id == userRoleId).Select(t => t.Name).FirstOrDefault();
                    if (role != null)
                        editUserRoles.Add(role);
                }

                await _userManager.RemoveFromRolesAsync(user, userRoleNames.ToArray());

                IdentityResult result2 = await _userManager.AddToRolesAsync(user, editUserRoles);

                if (result2.Succeeded)
                {
                    return new CustomApiResponse(new UserModel
                    {
                        Id = user.Id,
                        PhoneNumber = user.PhoneNumber,
                        UserName = user.PhoneNumber,
                        Name = model.Name,
                    }, 200, true);
                }
            }
            return new CustomApiResponse(result.Errors.Select(x => x.Description), 200, false);
        }

        [HttpPut("UpdateUser")]
        public async Task<ActionResult<CustomApiResponse>> UpdateUser(UserModel model)
        {
            if (!ModelState.IsValid)
                return new CustomApiResponse(ModelState.Values.Select(x => x.Errors.FirstOrDefault().ErrorMessage), 200, false);

            ApplicationUser user = await _userManager.FindByIdAsync(model.Id.ToString()).ConfigureAwait(false);
            if (user == null)
                return new CustomApiResponse(new[] { "Could not find user!" }, 200, false); 

            // Add more fields to update
            //user.Email = model.Email;
            user.PhoneNumber = model.PhoneNumber;
            user.UserName = model.PhoneNumber;
            user.Name = model.Name;

            var roles = _roleManager.Roles
                          .Select(t => new ApplicationRole()
                          {
                              Id = t.Id,
                              Name = t.Name
                          });
            
            var userRoleNames = await _userManager.GetRolesAsync(user);
            var editUserRoles = new List<string>();
          
            foreach (var userRoleId in model.RoleIds)
            {
                var role = roles.Where(t => t.Id == userRoleId).Select(t=> t.Name).FirstOrDefault();
                if (role != null)
                    editUserRoles.Add(role);
            }

            await _userManager.RemoveFromRolesAsync(user, userRoleNames.ToArray());

            await _userManager.AddToRolesAsync(user, editUserRoles);

            IdentityResult result = await _userManager.UpdateAsync(user).ConfigureAwait(false);
            if (result.Succeeded)
            {
                var userModel = _mapper.Map<UserModel>(user);
                return new CustomApiResponse(userModel, 200, true);
            }
            return new CustomApiResponse(result.Errors.Select(x => x.Description), 200, false);
        }

        [HttpDelete("DeleteUser")]
        public async Task<ActionResult<CustomApiResponse>> DeleteUser(int id)
        {
            if (String.IsNullOrEmpty(id.ToString()))
                return new CustomApiResponse(new[] { "Empty parameter!" }, 200, false);

            ApplicationUser user = await _userManager.FindByIdAsync(id.ToString()).ConfigureAwait(false);
            if (user == null)
                return new CustomApiResponse(new[] { "Could not find user!" }, 200, false);

            IdentityResult result = await _userManager.DeleteAsync(user).ConfigureAwait(false);
            if (result.Succeeded)
            {
                return new CustomApiResponse(id.ToString(), 200, true);
            }
            return new CustomApiResponse(result.Errors.Select(x => x.Description), 200, false);
        }

        [HttpGet("mymenu")]
        public async Task<ActionResult<CustomApiResponse>> GetAllMenuTree()
        {

            //var menuTree = menuService.GetAllMenuTree();
            var menus = GetMenuFromMenuJsonAsync("menu.json");
            var settings = new JsonSerializerSettings()
            {
                ContractResolver = new CamelCasePropertyNamesContractResolver()
            };
            dynamic myObj = JsonConvert.DeserializeObject(menus);
            var menuResponseModel = JsonConvert.DeserializeObject<TreeMenuResponseModel>(menus);
            var menuResponseModel1 = JsonConvert.DeserializeObject<TreeMenuResponseModel>(menus);
            var data = new UserSearchModel();

            //if (data != null)
            //{
            //   var apiRequest = JsonConvert.DeserializeObject<ApiReqeustModel>(data);
            //   searchModel.Relations = apiRequest.Relations;
            //}

            var test = _httpContextAccessor.HttpContext?.User.FindFirstValue(ClaimTypes.NameIdentifier);

            var user = await _userManager.FindByNameAsync(test);
            data.access_token = this.Request.Headers[HeaderNames.Authorization].FirstOrDefault();

            if (!string.IsNullOrEmpty(data.access_token) && !data.access_token.Contains("Bearer null"))
            {
                data.access_token = data.access_token.Replace("Bearer ", string.Empty).Replace("Bearer:", string.Empty);
            }
            var roleIds = new List<long>();
            //var roleIds = _roleManager.Roles.Select(i=>i.Id).ToList();

            var roleNames = _userManager.GetRolesAsync(user).Result;

            foreach(var roleName in roleNames)
            {
               var id =  _roleManager.Roles.Where(t => t.Name.Equals(roleName)).Select(t=>t.Id).FirstOrDefault();
                if(id != null)
                {
                    roleIds.Add(id);
                }
            }

            if(roleIds.Count > 0)
            {
                foreach (var roleId in roleIds)
            {
                var features = await _permissionService.GetAllPermissions(roleId);
                var index = 0;
                while (index < menuResponseModel.Menu.Count)
                {
                    var menu = menuResponseModel.Menu[index];
                    var check = features.Where(x => x.Name.ToLower() == menu.Name.ToLower()).FirstOrDefault();
                    if (check != null)
                    {
                        var index1 = 0;
                        while (index1 < menu.Children.Count)
                        {
                            var menu1 = menu.Children[index1];
                            var check1 = features.Where(x => x.Name.ToLower() == menu1.Name.ToLower()).FirstOrDefault();
                            if (check1 == null)
                            {
                                menu.Children.Remove(menu1);
                            }
                            else
                            {
                                index1++;
                            }
                        }
                        index++;
                    }
                    else
                    {
                        menuResponseModel.Menu.Remove(menu);
                    }
                }
            }
                return Ok(JsonConvert.SerializeObject(menuResponseModel, settings));
            }
            else
            {
                return Ok();
            }
            
        }

        [NonAction]
        public virtual string GetMenuFromMenuJsonAsync(string physicalPath)
        {
            var content = System.IO.File.ReadAllText(System.IO.Path.Combine(_env.ContentRootPath, physicalPath));;

            return Regex.Replace(content, "(?<=\")(@)(?!.*\":\\s )", string.Empty, RegexOptions.IgnoreCase);
        }

    }
}
