﻿using System;
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
using Microsoft.EntityFrameworkCore;

namespace EventCheckin.Api.Controllers.Identity
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class MemberController : BaseController
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<ApplicationRole> _roleManager;
        private readonly IPermissionService _permissionService;
        private readonly ITicketPassService _ticketPassService;
        private readonly IUserService _userService;
        private IHostingEnvironment _env;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly IMapper _mapper;

        public MemberController(
            UserManager<ApplicationUser> userManager,
            RoleManager<ApplicationRole> roleManager,
            IPermissionService permissionService,
            ITicketPassService ticketPassService,
            IUserService userService,
            IMapper mapper,
            IHostingEnvironment env,
            IHttpContextAccessor httpContextAccessor
            )
        {
            this._userManager = userManager;
            this._roleManager = roleManager;
            this._permissionService = permissionService;
            _userService = userService; 
            _ticketPassService = ticketPassService;
            _mapper = mapper;
            _env = env;
            _httpContextAccessor = httpContextAccessor;
        }

        [HttpPost]
        //[ProducesResponseType(typeof(IEnumerable<IdentityUser>), 200)]
        [Route("ListUser")]
        public async Task<ActionResult<CustomApiResponse>> ListUser(UserSearchModel model)
        {
            string rolename = model.SearchRolename;
            if (string.IsNullOrEmpty(rolename))
                rolename = "MEMBERS";
           
            var currentUser = await _userManager.FindByIdAsync(CurrentUserId.ToString());
            var isMember = await _userManager.IsInRoleAsync(currentUser, "MEMBERS");
            var isMemberAdmin = await _userManager.IsInRoleAsync(currentUser, "MEMBERSADMIN");
            var isSuperAdmin = await _userManager.IsInRoleAsync(currentUser, "SUPERADMIN");

            var users = await _userService.GetUsers(rolename);
            var userModels = new List<UserModel>();
            foreach (var user1 in users)
            {
                if (isSuperAdmin)
                {
                    var user = await _userManager.FindByIdAsync(user1.Id.ToString());
                    var userModel = _mapper.Map<UserModel>(user);
                    userModels.Add(userModel);
                }
                else if (isMemberAdmin)
                {
                    var user = await _userManager.FindByIdAsync(user1.Id.ToString());
                    if (user.ParentMemberId == currentUser.Id || user.Id == currentUser.Id)
                    {
                        var userModel = _mapper.Map<UserModel>(user);
                        userModels.Add(userModel);
                    }
                }
                else if (isMember)
                {
                    var user = await _userManager.FindByIdAsync(user1.Id.ToString());
                    if (user.ParentId == currentUser.Id || user.Id == currentUser.Id || user.Id == currentUser.ParentId)
                    {
                        var userModel = _mapper.Map<UserModel>(user);
                        userModels.Add(userModel);
                    }
                }
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

        [HttpPost("AddMemberUser")]
        public async Task<ActionResult<CustomApiResponse>> AddUser(UserModel model)
        {
            if (!ModelState.IsValid)
                return new CustomApiResponse(ModelState.Values.Select(x => x.Errors.FirstOrDefault().ErrorMessage), 200, false);

            ApplicationUser user = await _userManager.FindByNameAsync(model.PhoneNumber);

            ApplicationUser CurrentUser = await _userManager.FindByIdAsync(CurrentUserId.ToString());

            var roles =await _userManager.GetRolesAsync(CurrentUser);

            long parentId = 0;

            if (roles.Where(t => t == "SUPERADMIN").Any())
            {
                try
                {
                    if (user == null)
                    {
                        user = new ApplicationUser
                        {
                            UserName = model.PhoneNumber,
                            PhoneNumber = model.PhoneNumber,
                            MemberNo = model.MemberNo,
                            Name = model.Name,
                            PhoneNumberConfirmed = false,
                            Email = model.PhoneNumber + "@abc123.com",
                            EmailConfirmed = true,
                            LockoutEnabled = false,
                            TwoFactorEnabled = false,
                            ParentId = parentId
                        };
                        model.Password = "Admin@32149870";
                        model.ConfirmPassword = "Admin@32149870";
                        IdentityResult result = await _userManager.CreateAsync(user, model.Password).ConfigureAwait(false);

                        user.Name = model.Name;
                        IdentityResult result2 = await _userManager.AddToRolesAsync(user, new List<string>() { "MEMBERSADMIN" });
                        user.LockoutEnabled = false;
                        IdentityResult result3 = await _userManager.UpdateAsync(user).ConfigureAwait(false);
                        //if (result2.Succeeded)
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
                    else
                    {
                        new CustomApiResponse("Mobile No is already registered.", 200, false);
                    }
                }
                catch (Exception ex)
                {
                    IdentityResult result2 = await _userManager.AddToRolesAsync(user, new List<string>() { "MEMBERS" });
                }
            }
            else if (roles.Where(t => t == "MEMBERSADMIN").Any())
            {
                
                parentId = CurrentUser.Id;
                try
                {
                    if (user == null)
                    {
                        user = new ApplicationUser
                        {
                            UserName = model.PhoneNumber,
                            PhoneNumber = model.PhoneNumber,
                            Name = model.Name,
                            MemberNo = model.MemberNo,
                            PhoneNumberConfirmed = false,
                            Email = model.PhoneNumber + "@abc123.com",
                            EmailConfirmed = true,
                            LockoutEnabled = false,
                            TwoFactorEnabled = false,
                            ParentMemberId = parentId
                        };
                        model.Password = "Admin@32149870";
                        model.ConfirmPassword = "Admin@32149870";
                        IdentityResult result = await _userManager.CreateAsync(user, model.Password).ConfigureAwait(false);

                        user.Name = model.Name;
                        IdentityResult result2 = await _userManager.AddToRolesAsync(user, new List<string>() { "MEMBERS" });
                        user.LockoutEnabled = false;
                        IdentityResult result3 = await _userManager.UpdateAsync(user).ConfigureAwait(false);
                        //if (result2.Succeeded)
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
                    else
                    {
                        new CustomApiResponse("Mobile No is already registered.", 200, false);
                    }
                }
                catch (Exception ex)
                {
                    IdentityResult result2 = await _userManager.AddToRolesAsync(user, new List<string>() { "MEMBERS" });
                }
            }
            else if (roles.Where(t => t == "MEMBERS").Any())
            {

                parentId = CurrentUser.Id;
                try
                {
                    if (user == null)
                    {
                        user = new ApplicationUser
                        {
                            UserName = model.PhoneNumber,
                            PhoneNumber = model.PhoneNumber,
                            Name = model.Name,
                            MemberNo = model.MemberNo,
                            PhoneNumberConfirmed = false,
                            Email = model.PhoneNumber + "@abc123.com",
                            EmailConfirmed = true,
                            LockoutEnabled = false,
                            TwoFactorEnabled = false,
                            ParentId = parentId
                        };
                        model.Password = "Admin@32149870";
                        model.ConfirmPassword = "Admin@32149870";
                        IdentityResult result = await _userManager.CreateAsync(user, model.Password).ConfigureAwait(false);
                        user.Name = model.Name;
                        IdentityResult result2 = await _userManager.AddToRolesAsync(user, new List<string>() { "MEMBERS" });
                        user.LockoutEnabled = false;
                        IdentityResult result3 = await _userManager.UpdateAsync(user).ConfigureAwait(false);
                        //if (result2.Succeeded)
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
                    else
                    {
                        var result = new CustomApiResponse(model, 200, false);
                        result.Message = model.PhoneNumber + " mobile no is already registered.";
                        return result;
                    }
                }
                catch (Exception ex)
                {
                    //IdentityResult result2 = await _userManager.AddToRolesAsync(user, new List<string>() { "MEMBERS" });
                }
            }
            return new CustomApiResponse("Erro", 200, false);
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

            await _userManager.AddToRolesAsync(user, new List<string>() { "MEMBERS" });

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

    }
}
