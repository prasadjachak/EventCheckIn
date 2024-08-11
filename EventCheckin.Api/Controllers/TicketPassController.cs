﻿using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using EventCheckin.Api.Infrastructure;
using EventCheckin.Api.Models;
using EventCheckin.Api.Utility.Extensions;
using EventCheckin.DbContext.Entities;
using EventCheckin.Api.Models.Events;
using EventCheckin.Services;
using AutoMapper;
using System.Collections.Generic;
using System;
using System.Linq;
using EventCheckin.DbContext.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace EventCheckin.Api.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class TicketPassController : BaseController
    {
        private readonly ITicketPassService _ticketPassService;
        private readonly IEventEntityService _eventService;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IMapper _mapper;
        public TicketPassController(ITicketPassService eventEntityService,
            IEventEntityService eventService,
            UserManager<ApplicationUser> userManager,
            IMapper mapper)
        {
            _ticketPassService = eventEntityService;
            _eventService = eventService;
            _userManager = userManager;
            _mapper = mapper;
        }

        [NonAction]
        public TicketPassModel GetModelToEntity(TicketPass ticketPass, List<EventModel> eventModels)
        {
           var ticketPassModel = _mapper.Map<TicketPassModel>(ticketPass);

            ticketPassModel.EventModel = eventModels.Where(t => t.Id == ticketPass.EventId).FirstOrDefault();

            var user = _userManager.Users
                .Where(user => user.Id == ticketPass.UserId)
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

            ticketPassModel.UserModel = _mapper.Map<UserModel>(user);

            return ticketPassModel;
        }

        [HttpGet, Route("ListTicketPasss")]
        public async Task<ActionResult<CustomApiResponse>> GetTicketPasss()
        {
            var eventEntitys = await _ticketPassService.GetTicketPasss();
            return eventEntitys != null ? new CustomApiResponse(eventEntitys, 200, true) : new CustomApiResponse(500, false);
        }

        [HttpGet, Route("GetTicketPass")]
        public async Task<ActionResult<CustomApiResponse>> GetTicketPass(long eventEntityId)
        {
            var eventEntity = await _ticketPassService.GetTicketPass(eventEntityId);
            return eventEntity != null ? new CustomApiResponse(eventEntity, 200, true) : new CustomApiResponse(500, false);
        }

        [HttpPost, Route("AddTicketPass")]
        public async Task<ActionResult<CustomApiResponse>> AddTicketPass(TicketPassModel model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelStateExtensions.GetErrorMessage(ModelState));

          
            TicketPass dto = _mapper.Map<TicketPass>(model);
            var addStatus = await _ticketPassService.AddTicketPass(dto);
            return addStatus != null ? new CustomApiResponse(addStatus, 200, true) : new CustomApiResponse(500, false);
        }

        [HttpPut, Route("UpdateTicketPass")]
        public async Task<ActionResult<CustomApiResponse>> UpdateTicketPass(TicketPassModel model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelStateExtensions.GetErrorMessage(ModelState));

             
            TicketPass dto = _mapper.Map<TicketPass>(model);
            var addStatus = await _ticketPassService.UpdateTicketPass(dto);
            return addStatus ? new CustomApiResponse(addStatus, 200, true) : new CustomApiResponse(500, false);
        }

        [HttpPut, Route("DeleteTicketPass")]
        public async Task<ActionResult<CustomApiResponse>> DeleteTicketPass(int id)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelStateExtensions.GetErrorMessage(ModelState));

            TicketPass dto = new TicketPass
            {
                Id = id,
            };

            var addStatus = await _ticketPassService.DeleteTicketPass(dto);
            return addStatus ? new CustomApiResponse(dto, 200,true) :  new CustomApiResponse(500, false);
        }

        [HttpGet("GetPasses")]
        public async Task<CustomApiResponse> GetPasses()
        {
            var apiResponse = new CustomApiResponse();
            try
            {
                var ticketPasses = await _ticketPassService.GetTicketPassForUser(CurrentUserId);
                var ticketPassModels = new List<TicketPassModel>();
                if (ticketPasses != null)
                {
                    foreach (var ticketPass in ticketPasses.ToList())
                    {
                        var ticketPassModel = new TicketPassModel();
                        ticketPassModel = _mapper.Map<TicketPassModel>(ticketPass);
                        var evententity = await _eventService.GetEventEntity(ticketPass.EventId);
                        var eventModel = _mapper.Map<EventModel>(evententity);
                        ticketPassModel.EventModel = eventModel;
                        ticketPassModel.PassDay = eventModel.StartDate.Value.ToString("MMM dd");
                        ticketPassModel.PassFromTime = eventModel.StartDate.Value.ToString("hh:mm tt");
                        ticketPassModel.PassToTime = eventModel.EndDate.Value.ToString("hh:mm tt");
                        ticketPassModels.Add(ticketPassModel);
                    }
                    apiResponse.Result = ticketPassModels;
                    apiResponse.Message = "You have successfully logged in.";
                    apiResponse.StatusCode = 200;
                    apiResponse.IsSuccess = true;
                }

                apiResponse.Result = ticketPassModels;
                apiResponse.Message = "No Passes Found.";
                apiResponse.StatusCode = 200;
                apiResponse.IsSuccess = false;
                return apiResponse;

            }
            catch (Exception ex)
            {

                apiResponse.Message = "No Passes Found.";
                apiResponse.StatusCode = 400;
                return apiResponse;
            }
        }

        [HttpPost("GetTicketOtp")]
        public async Task<CustomApiResponse> GetTicketOtp([FromBody] TicketPassModel model)
        {
            var apiResponse = new CustomApiResponse();
            ApplicationUser user = await _userManager.FindByIdAsync(model.UserId.ToString()).ConfigureAwait(false);
            if (user == null)
            {
                apiResponse.StatusCode = 400;
                apiResponse.Message = "Invalid credentials.";
                return apiResponse;
            }

            var eventEntity = await _eventService.GetEventEntity(model.UserId);
            if (eventEntity == null)
            {
                apiResponse.StatusCode = 400;
                apiResponse.Message = "Event not found.";
                return apiResponse;
            }

            var ticket = await _ticketPassService.GetTicketPass(model.Id);
            ticket.EntryOTP = GenerateRandomNo().ToString();
            ticket.EntryOTPTime = DateTime.Now.AddMinutes(15);

            await _ticketPassService.UpdateTicketPass(ticket);

            var ticketModel = _mapper.Map<TicketPassModel>(ticket);
            apiResponse.Result = ticketModel;
            apiResponse.StatusCode = 200;
            apiResponse.IsSuccess = true;
            return apiResponse;
        }

        [HttpPost("GetParkingTicketOtp")]
        public async Task<CustomApiResponse> GetParkingTicketOtp([FromBody] TicketPassModel model)
        {
            var apiResponse = new CustomApiResponse();
            ApplicationUser user = await _userManager.FindByIdAsync(model.UserId.ToString()).ConfigureAwait(false);
            if (user == null)
            {
                apiResponse.StatusCode = 400;
                apiResponse.Message = "Invalid credentials.";
                return apiResponse;
            }

            var eventEntity = await _eventService.GetEventEntity(model.UserId);
            if (eventEntity == null)
            {
                apiResponse.StatusCode = 400;
                apiResponse.Message = "Event not found.";
                return apiResponse;
            }

            var ticket = await _ticketPassService.GetTicketPass(model.Id);
            ticket.ParkingOTP = GenerateRandomNo().ToString();
            ticket.ParkingOTPTime = DateTime.Now.AddMinutes(15);

            await _ticketPassService.UpdateTicketPass(ticket);

            var ticketModel = _mapper.Map<TicketPassModel>(ticket);
            apiResponse.Result = ticketModel;
            apiResponse.StatusCode = 200;
            apiResponse.IsSuccess = true;
            return apiResponse;
        }

        [HttpPost]
        //[ProducesResponseType(typeof(IEnumerable<IdentityUser>), 200)]
        [Route("ListUser")]
        public async Task<ActionResult<CustomApiResponse>> ListUser(UserSearchModel model)
        {
            var users = _userManager.Users
              .Skip((model.PageNumber - 1) * model.PageSize)
              .Take(model.PageSize)
              .Select(t => new TicketPassModel()
              {
                  UserId = t.Id,
                  PhoneNumber = t.PhoneNumber,
                  Name = t.Name
              }).ToList();

            var userModels = new List<UserModel>();
            foreach (var user1 in users)
            {
                var user = await _userManager.FindByIdAsync(user1.Id.ToString());
                var userModel = _mapper.Map<UserModel>(user);

                userModels.Add(userModel);
            }

            return new CustomApiResponse(userModels);
        }


        [HttpPost, Route("AddMultipleTicketPasses")]
        public async Task<ActionResult<CustomApiResponse>> AddMultipleTicketPasses(List<TicketPassModel> models)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelStateExtensions.GetErrorMessage(ModelState));

            var ticketPassModels = new List<TicketPassModel>();

            var returnModels = new List<TicketPassModel>();

            foreach (var model in models) 
            {
                TicketPass dto = _mapper.Map<TicketPass>(model);
                var addStatus = await _ticketPassService.AddTicketPass(dto);
            }

            var ticketPasses = await _ticketPassService.GetTicketPasss();
            foreach (var ticketPass in ticketPasses)
            {
                ticketPassModels.Add(_mapper.Map<TicketPassModel>(ticketPass));
            }

            return  new CustomApiResponse(ticketPassModels, 200, true);
        }

        [HttpPost, Route("AddDeleteTicketPasses")]
        public async Task<ActionResult<CustomApiResponse>> AddDeleteTicketPasses(TicketPassModel model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelStateExtensions.GetErrorMessage(ModelState));

            TicketPass dto = _mapper.Map<TicketPass>(model);
            if(dto.Id== 0) 
            {
                dto.AllowedGuestCount = 1;
                if(dto.IsParkingAllowed)
                    dto.AllowedParkingCount = 1;
                var ticketPass = await _ticketPassService.AddTicketPass(dto);
                var ticketPassModel = _mapper.Map<TicketPassModel>(ticketPass);
                return new CustomApiResponse(ticketPassModel, 200, true);
            }
            else
            {
                if(dto.IsActive == false)
                {
                    var ticketPass = await _ticketPassService.DeleteTicketPass(dto);
                    var ticketPassModel = _mapper.Map<TicketPassModel>(ticketPass);
                    return new CustomApiResponse(ticketPassModel, 200, true);
                }
                if (dto.IsActive == true)
                {
                    dto.AllowedGuestCount = 1;
                    if (dto.IsParkingAllowed)
                        dto.AllowedParkingCount = 1;
                    var ticketPass = await _ticketPassService.UpdateTicketPass(dto);
                }
                return new CustomApiResponse(model, 200, true);
            }
        }


        [HttpPost, Route("GetAssignTicketPasses")]
        public async Task<ActionResult<CustomApiResponse>> GetAssignTicketPasses(AssignPassModel assignPassModel)
        {
            var userTicketModels = _userManager.Users
                        .Select(t => new TicketPassModel()
                        {
                            UserId = t.Id,
                            PhoneNumber = t.PhoneNumber,
                            Name = t.Name
                        }).ToList();

            var eventEntitys = await _eventService.GetEventEntitys();

            var eventModels = new List<EventModel>();

            var ticketPasses = await _ticketPassService.GetTicketPassesByEventId(assignPassModel.EventId);

            foreach (var eventEntity in eventEntitys)
            {
                eventModels.Add(_mapper.Map<EventModel>(eventEntity));
            }

            var ticketPassModels = new List<TicketPassModel>();
            foreach (var userPassModel in userTicketModels)
            {
                var userticketPasses = ticketPasses.Where(t=>t.UserId == userPassModel.UserId).ToList();
               
                if(userticketPasses.Count > 0)
                {
                    foreach (var ticketPass in userticketPasses)
                    {
                        var ticketPassModel = new TicketPassModel();
                        ticketPassModel = _mapper.Map<TicketPassModel>(ticketPass);
                        ticketPassModel.PhoneNumber = userPassModel.PhoneNumber;
                        ticketPassModel.Name = userPassModel.Name;
                        ticketPassModel.EventId = ticketPassModel.EventId;
                        ticketPassModel.Id = ticketPassModel.Id;
                        ticketPassModel.IsActive = ticketPassModel.IsActive;
                        ticketPassModel.IsParkingAllowed = ticketPassModel.IsParkingAllowed;
                        ticketPassModels.Add(ticketPassModel);
                    }
                }
                else
                {
                    ticketPassModels.Add(userPassModel);
                }
            }

            assignPassModel.Events = eventModels;

            assignPassModel.TicketPasses = ticketPassModels;

            return new CustomApiResponse(assignPassModel, 200, true);
        }

        [NonAction]
        public int GenerateRandomNo()
        {
            int _min = 1000;
            int _max = 9999;
            Random _rdm = new Random();
            return _rdm.Next(_min, _max);
        }
    }
}
