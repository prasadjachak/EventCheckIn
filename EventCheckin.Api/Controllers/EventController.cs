using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using EventCheckin.Api.Infrastructure;
using EventCheckin.Api.Models;
using EventCheckin.Api.Utility.Extensions;
using EventCheckin.DbContext.Entities;
using EventCheckin.Api.Models.Events;
using EventCheckin.Services;
using AutoMapper;
using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;
using EventCheckin.DbContext.Entities.Identity;
using System.Linq;

namespace EventCheckin.Api.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class EventController : BaseController
    {
        private readonly IEventEntityService _eventEntityService;
        private readonly ITicketPassService _ticketPassService;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IMapper _mapper;
        public EventController(IEventEntityService eventEntityService,
            UserManager<ApplicationUser> userManager,
            ITicketPassService ticketPassService,
            IMapper mapper)
        {
            _eventEntityService = eventEntityService;
            _userManager = userManager;
            _ticketPassService = ticketPassService;
            _mapper = mapper;
        }

        [HttpGet, Route("ListEventEntitys")]
        public async Task<ActionResult<CustomApiResponse>> GetEventEntitys()
        {
            var eventEntitys = await _eventEntityService.GetEventEntitys();
            return eventEntitys != null ? new CustomApiResponse(eventEntitys, 200, true) : new CustomApiResponse(500, false);
        }

        [HttpGet, Route("GetEventEntitiesByMemberId")]
        public async Task<ActionResult<CustomApiResponse>> GetEventEntitiesByMemberId(int memberId)
        {
            var eventEntitys = await _eventEntityService.GetEventEntitys();
            return eventEntitys != null ? new CustomApiResponse(eventEntitys, 200, true) : new CustomApiResponse(500, false);
        }

        [HttpGet, Route("GetEventEntity")]
        public async Task<ActionResult<CustomApiResponse>> GetEventEntity(long eventEntityId)
        {
            var eventEntity = await _eventEntityService.GetEventEntity(eventEntityId);
            return eventEntity != null ? new CustomApiResponse(eventEntity, 200, true) : new CustomApiResponse(500, false);
        }

        [HttpPost, Route("AddEventEntity")]
        public async Task<ActionResult<CustomApiResponse>> AddEventEntity(EventModel model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelStateExtensions.GetErrorMessage(ModelState));

          
            EventEntity dto = _mapper.Map<EventEntity>(model);
            var addStatus = await _eventEntityService.AddEventEntity(dto);
            return addStatus != null ? new CustomApiResponse(addStatus, 200, true) : new CustomApiResponse(500, false);
        }

        [HttpPut, Route("UpdateEventEntity")]
        public async Task<ActionResult<CustomApiResponse>> UpdateEventEntity(EventModel model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelStateExtensions.GetErrorMessage(ModelState));

             
            EventEntity dto = _mapper.Map<EventEntity>(model);
            var addStatus = await _eventEntityService.UpdateEventEntity(dto);
            return addStatus ? new CustomApiResponse(addStatus, 200, true) : new CustomApiResponse(500, false);
        }

        [HttpPut, Route("DeleteEventEntity")]
        public async Task<ActionResult<CustomApiResponse>> DeleteEventEntity(int id)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelStateExtensions.GetErrorMessage(ModelState));

            EventEntity dto = new EventEntity
            {
                Id = id,
            };

            var addStatus = await _eventEntityService.DeleteEventDay(dto);
            return addStatus ? new CustomApiResponse(dto, 200,true) :  new CustomApiResponse(500, false);
        }

        [HttpPost("geteventmemberlist")]
        public virtual async Task<ActionResult<CustomApiResponse>> GetEventMemberList(int eventEntityId)
        {
            //if (!await _permissionService.AuthorizeAsync(StandardPermissionProvider.ManageTeams))
            //    return await AccessDeniedDataTablesJson();

            // prepare model

            var currentUser = await _userManager.FindByIdAsync(CurrentUserId.ToString());
            var isMember = await _userManager.IsInRoleAsync(currentUser, "MEMBERS");
            var isMemberAdmin = await _userManager.IsInRoleAsync(currentUser, "MEMBERSADMIN");
            var isSuperAdmin = await _userManager.IsInRoleAsync(currentUser, "SUPERADMIN");
            var isAdmin = await _userManager.IsInRoleAsync(currentUser, "ADMIN");
            
            var eventMembers = new List<EventMemberModel>();
            var eventEntitys = await _eventEntityService.GetEventMembers(eventEntityId);
            if(eventEntitys != null) { 
                foreach(var eventEntity in eventEntitys)
                {
                    var eventMemberModel = _mapper.Map<EventMemberModel>(eventEntity);
                    var user = _userManager.Users
                    .Where(user => user.Id == eventEntity.UserId)
                    .Select(user => new ApplicationUser()
                    {
                        Id = user.Id,
                        Name = user.Name,
                        Email = user.Email,
                        PhoneNumber = user.PhoneNumber,
                        EmailConfirmed = user.EmailConfirmed,
                        LockoutEnabled = user.LockoutEnabled,
                        TwoFactorEnabled = user.TwoFactorEnabled,
                    })
                    .FirstOrDefault();
                    if(isSuperAdmin || isAdmin)
                    {
                        var check = await _userManager.IsInRoleAsync(user,"MEMBERSADMIN");
                        if (check) { 
                            eventMemberModel.User = _mapper.Map<UserModel>(user);
                            eventMemberModel.User.RoleNames = (await _userManager.GetRolesAsync(user)).ToList();
                            eventMembers.Add(eventMemberModel);
                        }
                    }
                    else
                    {
                        if (isMemberAdmin)
                            if (currentUser.Id == user.Id || currentUser.Id == user.ParentMemberId)
                            {
                                eventMemberModel.User = _mapper.Map<UserModel>(user);
                                eventMemberModel.User.RoleNames = (await _userManager.GetRolesAsync(user)).ToList();
                                eventMembers.Add(eventMemberModel);
                            }

                        if (isMember)
                            if(currentUser.Id == user.Id || currentUser.Id == user.ParentId)
                            {
                                eventMemberModel.User = _mapper.Map<UserModel>(user);
                                eventMemberModel.User.RoleNames = (await _userManager.GetRolesAsync(user)).ToList();
                                eventMembers.Add(eventMemberModel);
                            }
                    }
                }
            }
            return new CustomApiResponse(eventMembers);
        }

        [HttpPost("createeventmember")]
        public virtual async Task<ActionResult<CustomApiResponse>> CreateEventMember(EventMemberModel model)
        {
            //if (!await _permissionService.AuthorizeAsync(StandardPermissionProvider.ManageTeams))
            //    return AccessDeniedView();

            if (ModelState.IsValid)
            {
                var eventUser = await _eventEntityService.GetEventMemberByEventIdAndUserIdAsync(model.EventId, model.UserId);
                if(eventUser == null) { 
                    var teamEmployee = _mapper.Map<EventMember>(model);
                    teamEmployee.CreatedOnUtc = DateTime.UtcNow;
                    await _eventEntityService.AddEventMemberAsync(teamEmployee);
                    model.Id = teamEmployee.Id;
                    return new CustomApiResponse(model);
                }
                else
                {
                    var resp =  new CustomApiResponse("",200,false);
                    resp.Message = "Member is already added";
                    return resp;
                }
            }
            // prepare model

            // if we got this far, something failed, redisplay form
            return new CustomApiResponse(model);
        }

        [HttpPost("deleteeventmember")]
        public virtual async Task<ActionResult<CustomApiResponse>> DeleteEventMember(int eventMemberId)
        {
            //if (!await _permissionService.AuthorizeAsync(StandardPermissionProvider.ManageTeams))
            //    return AccessDeniedView();

            // try to get a team with the specified id
            var eventMember = await _eventEntityService.GetEventMemberByIdAsync(eventMemberId);
            if (eventMember == null)
                return RedirectToAction("List");

            // delete
            await _eventEntityService.DeleteEventMemberAsync(eventMember.Id);

            return new CustomApiResponse(eventMemberId);
        }

    }
}
