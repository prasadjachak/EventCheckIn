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
            var eventMembers = new List<EventMemberModel>();
            var eventEntitys = await _eventEntityService.GetEventMembers(eventEntityId);
            foreach(var eventEntity in eventEntitys)
            {
                var eventMemberModel = _mapper.Map<EventMemberModel>(eventEntity);
                var user = _userManager.Users
                .Where(user => user.Id == eventEntity.UserId)
                .Select(user => new ApplicationUser()
                {
                    Id = user.Id,
                    Email = user.Email,
                    PhoneNumber = user.PhoneNumber,
                    EmailConfirmed = user.EmailConfirmed,
                    LockoutEnabled = user.LockoutEnabled,
                    TwoFactorEnabled = user.TwoFactorEnabled
                })
                .FirstOrDefault();
                eventMemberModel.User = _mapper.Map<UserModel>(user);

                eventMembers.Add(eventMemberModel);
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
                var teamEmployee = _mapper.Map<EventMember>(model);
                teamEmployee.CreatedOnUtc = DateTime.UtcNow;
                await _eventEntityService.AddEventMemberAsync(teamEmployee);
                model.Id = teamEmployee.Id;
            }
            // prepare model

            // if we got this far, something failed, redisplay form
            return new CustomApiResponse(model);
        }

        [HttpPost("deleteteamemployee")]
        public virtual async Task<ActionResult<CustomApiResponse>> DeleteEventMember(EventMemberModel model)
        {
            //if (!await _permissionService.AuthorizeAsync(StandardPermissionProvider.ManageTeams))
            //    return AccessDeniedView();

            // try to get a team with the specified id
            var eventMember = await _eventEntityService.GetEventMemberByIdAsync(model.Id);
            if (eventMember == null)
                return RedirectToAction("List");

            // delete
            await _eventEntityService.DeleteEventMemberAsync(eventMember.Id);

            return new CustomApiResponse(model);
        }

    }
}
