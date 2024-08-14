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
using System.Collections.Generic;
using System;
using System.Linq;
using EventCheckin.DbContext.Entities.Identity;
using Microsoft.AspNetCore.Identity;
using EventCheckin.DbContext.Enums;
using System.Runtime.Intrinsics.X86;
using EventCheckin.Services.Permission;

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
        private readonly IUserService _userService;
        private readonly IMapper _mapper;
        public TicketPassController(ITicketPassService eventEntityService,
            IEventEntityService eventService,
            UserManager<ApplicationUser> userManager,
            IUserService userService,
            IMapper mapper)
        {
            _ticketPassService = eventEntityService;
            _eventService = eventService;
            _userManager = userManager;
            _userService = userService;
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
                        if(evententity != null) 
                        { 
                            var eventModel = _mapper.Map<EventModel>(evententity);
                            ticketPassModel.EventModel = eventModel;
                            ticketPassModel.PassDay = eventModel.StartDate.Value.ToString("MMM dd");
                            ticketPassModel.PassFromTime = eventModel.StartDate.Value.ToString("hh:mm tt");
                            ticketPassModel.PassToTime = eventModel.EndDate.Value.ToString("hh:mm tt");
                            ticketPassModel.EntryStatusName = Enum.GetName(typeof(EntryStatusEnum), ticketPassModel.EntryStatus).ToString();
                            ticketPassModel.ParkStatusName = Enum.GetName(typeof(ParkingStatusEnum), ticketPassModel.ParkStatus).ToString();
                        }
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

            var eventEntity = await _eventService.GetEventEntity(model.EventId);
            if (eventEntity == null)
            {
                apiResponse.StatusCode = 400;
                apiResponse.Message = "Event not found.";
                return apiResponse;
            }

            var ticket = await _ticketPassService.GetTicketPass(model.Id);
            ticket.EntryStatus = (int)EntryStatusEnum.Active;
            ticket.EntryOTP = GenerateRandomNo().ToString();
            ticket.EntryOTPTime = DateTime.Now.AddMinutes(15);

            await _ticketPassService.UpdateTicketPass(ticket);

            var ticketModel = _mapper.Map<TicketPassModel>(ticket);
            if (eventEntity != null)
            {
                var eventModel = _mapper.Map<EventModel>(eventEntity);
                ticketModel.EventModel = eventModel;
                ticketModel.PassDay = eventModel.StartDate.Value.ToString("MMM dd");
                ticketModel.PassFromTime = eventModel.StartDate.Value.ToString("hh:mm tt");
                ticketModel.PassToTime = eventModel.EndDate.Value.ToString("hh:mm tt");
                ticketModel.EntryStatusName = Enum.GetName(typeof(EntryStatusEnum), ticketModel.EntryStatus).ToString();
                ticketModel.ParkStatusName = Enum.GetName(typeof(ParkingStatusEnum), ticketModel.ParkStatus).ToString();
            }
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

            var eventEntity = await _eventService.GetEventEntity(model.EventId);
            if (eventEntity == null)
            {
                apiResponse.StatusCode = 400;
                apiResponse.Message = "Event not found.";
                return apiResponse;
            }

            var ticket = await _ticketPassService.GetTicketPass(model.Id);
            ticket.ParkStatus = (int)ParkingStatusEnum.Active;
            ticket.ParkingOTP = GenerateRandomNo().ToString();
            ticket.ParkingOTPTime = DateTime.Now.AddMinutes(15);

            await _ticketPassService.UpdateTicketPass(ticket);

            var ticketModel = _mapper.Map<TicketPassModel>(ticket);
            if (eventEntity != null)
            {
                var eventModel = _mapper.Map<EventModel>(eventEntity);
                ticketModel.EventModel = eventModel;
                ticketModel.PassDay = eventModel.StartDate.Value.ToString("MMM dd");
                ticketModel.PassFromTime = eventModel.StartDate.Value.ToString("hh:mm tt");
                ticketModel.PassToTime = eventModel.EndDate.Value.ToString("hh:mm tt");
                ticketModel.EntryStatusName = Enum.GetName(typeof(EntryStatusEnum), ticketModel.EntryStatus).ToString();
                ticketModel.ParkStatusName = Enum.GetName(typeof(ParkingStatusEnum), ticketModel.ParkStatus).ToString();
            }
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

            var currentUser = await _userManager.FindByIdAsync(CurrentUserId.ToString());
            var isMember = await _userManager.IsInRoleAsync(currentUser, "MEMBERS");
         
            long userId = 0;
            if (currentUser.ParentId > 0)
                userId = (await _userManager.FindByIdAsync(currentUser.ParentId.ToString())).Id;
            else
                userId = CurrentUserId;

            var eventMember = await _eventService.GetEventMemberByEventIdAndUserIdAsync(model.EventId, userId);
          

            TicketPass dto = _mapper.Map<TicketPass>(model);
            if(dto.Id== 0)
            {
                dto.EntryStatus = (int)EntryStatusEnum.Active;
                dto.AllowedGuestCount = 1;
                if (dto.IsParkingAllowed)
                {
                    dto.AllowedParkingCount = 1;
                    dto.ParkStatus = (int)ParkingStatusEnum.Active;
                }
                   
                var ticketPass = await _ticketPassService.AddTicketPass(dto);
                var ticketPassModel = _mapper.Map<TicketPassModel>(ticketPass);

                if (eventMember != null)
                {
                    eventMember.AddedGuestNo += 1; 
                    if (dto.IsParkingAllowed)
                    {
                        eventMember.AddedParkNo += 1;
                    }
                    await _eventService.UpdateEventMemberAsync(eventMember);
                }

                return new CustomApiResponse(ticketPassModel, 200, true);
            }
            else
            {
                if(dto.IsActive == false)
                {
                    var ticketPass = await _ticketPassService.DeleteTicketPass(dto);
                    if (eventMember != null)
                    {
                        if (dto.AllowedParkingCount > 0)
                            eventMember.AddedParkNo -= 1;
                        dto.AllowedGuestCount = 0;
                        dto.AllowedParkingCount = 0;
                        eventMember.AddedGuestNo -= 1;
                        await _eventService.UpdateEventMemberAsync(eventMember);
                    }
              
                    var ticketPassModel = _mapper.Map<TicketPassModel>(ticketPass);
                    return new CustomApiResponse(ticketPassModel, 200, true);
                }
                if (dto.IsActive == true)
                {
                    if (eventMember != null)
                    {
                        if (dto.IsParkingAllowed)
                        {
                            eventMember.AddedParkNo += 1;
                        }
                        eventMember.AddedGuestNo += 1;
                        await _eventService.UpdateEventMemberAsync(eventMember);
                    }
                    dto.EntryStatus = (int)EntryStatusEnum.Active;
                    dto.AllowedGuestCount = 1;
                    if (dto.IsParkingAllowed)
                    {
                        dto.AllowedParkingCount = 1;
                        dto.ParkStatus = (int)ParkingStatusEnum.Active;
                    }
                        
                    var ticketPass = await _ticketPassService.UpdateTicketPass(dto);
                }
                return new CustomApiResponse(model, 200, true);
            }
        }


        [HttpPost, Route("GetAssignTicketPasses")]
        public async Task<ActionResult<CustomApiResponse>> GetAssignTicketPasses(AssignPassModel assignPassModel)
        {
            var currentUser = await _userManager.FindByIdAsync(CurrentUserId.ToString());
            var isMember = await _userManager.IsInRoleAsync(currentUser, "MEMBERS");

            long userId = 0;
            if (currentUser.ParentId > 0)
                userId = (await _userManager.FindByIdAsync(currentUser.ParentId.ToString())).Id;
            else
                userId = CurrentUserId;

            var userTicketModels = new List<UserModel>();
            var members = new List<ApplicationUser>();

            if (currentUser.ParentId == 0)
            {
                members = await _userService.GetUserByMemberId(currentUser.Id, "MEMBERS");
                members.Add(currentUser);
            }
            else
            {
                var parentmember = (await _userManager.FindByIdAsync(currentUser.ParentId.ToString()));
                members = await _userService.GetUserByMemberId(parentmember.Id, "MEMBERS");
                members.Add(parentmember);
            }
            foreach (var member in members)
            {
                var guests = await _userService.GetUserByMemberId(member.Id, "GUEST");
                foreach (var guest in guests)
                {
                    var userModel = _mapper.Map<UserModel>(guest);
                    userTicketModels.Add(userModel);
                }
            }
           

            var eventEntitys = await _eventService.GetEventEntitys();

            var eventModels = new List<EventModel>();

            var ticketPasses = await _ticketPassService.GetTicketPassesByEventId(assignPassModel.EventId);

            foreach (var eventEntity in eventEntitys)
            {
                var eventMember = await _eventService.GetEventMemberByEventIdAndUserIdAsync(eventEntity.Id, userId);

                var eventModel = _mapper.Map<EventModel>(eventEntity);
                if(eventMember != null) { 
                    eventModel.EventMember =  _mapper.Map<EventMemberModel>(eventMember);
                    eventModel.EventMember.PendingGuestNo = eventModel.EventMember.GuestNo - eventModel.EventMember.AddedGuestNo;
                    eventModel.EventMember.PendingParkNo = eventModel.EventMember.ParkNo - eventModel.EventMember.AddedParkNo;
                    eventModels.Add(eventModel);
                }
            }

            var ticketPassModels = new List<TicketPassModel>();
            foreach (var userPassModel in userTicketModels)
            {
                var userTicketPassModel = new TicketPassModel();
                var userticketPasses = ticketPasses.Where(t=>t.UserId == userPassModel.Id).ToList();
                userTicketPassModel.PhoneNumber = userPassModel.PhoneNumber;
                userTicketPassModel.Name = userPassModel.Name;
                userTicketPassModel.EventId = assignPassModel.EventId;
                userTicketPassModel.UserId = userPassModel.Id;
                if (userticketPasses.Count > 0)
                {
                    foreach (var ticketPass in userticketPasses)
                    {
                        var ticketPassModel = new TicketPassModel();
                        ticketPassModel = _mapper.Map<TicketPassModel>(ticketPass);
                        ticketPassModel.UserId = userPassModel.Id;
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
                    ticketPassModels.Add(userTicketPassModel);
                }
            }

            assignPassModel.Events = eventModels;

            assignPassModel.TicketPasses = ticketPassModels;

            return new CustomApiResponse(assignPassModel, 200, true);
        }


        [HttpPost, Route("GetCheckTicketPasses")]
        public async Task<ActionResult<CustomApiResponse>> GetCheckTicketPasses(AssignPassModel assignPassModel)
        {
            var userTicketModels = _userManager.Users
                        .Select(t => new UserModel()
                        {
                            Id = t.Id,
                            PhoneNumber = t.PhoneNumber,
                            Name = t.Name
                        }).ToList();

            var eventEntitys = await _eventService.GetEventEntitys();

            var eventModels = new List<EventModel>();

            var ticketPasses = await _ticketPassService.GetCheckSecurityEntryPassesByEventId(assignPassModel.EventId);

            foreach (var eventEntity in eventEntitys)
            {
                eventModels.Add(_mapper.Map<EventModel>(eventEntity));
            }

            var ticketPassModels = new List<TicketPassModel>();
           
            foreach (var ticketPass in ticketPasses)
            {
                var userModel = userTicketModels.Where(t => t.Id == ticketPass.UserId).FirstOrDefault();

                var ticketPassModel = new TicketPassModel();
                ticketPassModel = _mapper.Map<TicketPassModel>(ticketPass);
                ticketPassModel.PhoneNumber = userModel.PhoneNumber;
                ticketPassModel.Name = userModel.Name;
                ticketPassModel.EventId = ticketPassModel.EventId;
                ticketPassModel.Id = ticketPassModel.Id;
                ticketPassModel.IsActive = ticketPassModel.IsActive;
                ticketPassModel.IsParkingAllowed = ticketPassModel.IsParkingAllowed;
                ticketPassModel.EntryOTP = ticketPassModel.EntryOTP;
                ticketPassModel.EntryOTPTime = ticketPassModel.EntryOTPTime;
                ticketPassModel.EntryStatus = ticketPassModel.EntryStatus;
                ticketPassModel.ParkingOTP = ticketPassModel.ParkingOTP;
                ticketPassModel.ParkingOTPTime = ticketPassModel.ParkingOTPTime;
                ticketPassModel.ParkStatus = ticketPassModel.ParkStatus;
                ticketPassModel.EntryStatusName = Enum.GetName(typeof(EntryStatusEnum), ticketPassModel.EntryStatus).ToString();
                ticketPassModel.ParkStatusName = Enum.GetName(typeof(ParkingStatusEnum), ticketPassModel.ParkStatus).ToString();
                ticketPassModels.Add(ticketPassModel);
            }

            assignPassModel.Events = eventModels;
            assignPassModel.TicketPasses = ticketPassModels;
            return new CustomApiResponse(assignPassModel, 200, true);
        }


        [HttpPost, Route("AddSecurityEntryPassStatus")]
        public async Task<ActionResult<CustomApiResponse>> AddSecurityEntryPassStatus(TicketPassModel model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelStateExtensions.GetErrorMessage(ModelState));

            TicketPass dto = _mapper.Map<TicketPass>(model);
            if (dto.Id > 0)
            {
                if (dto.IsActive == true)
                {
                    dto.EntryStatus = (int)EntryStatusEnum.Close;
                    var ticketPass = await _ticketPassService.UpdateTicketPass(dto);
                }
                return new CustomApiResponse(model, 200, true);
            }

            return new CustomApiResponse("Record not found.", 400, true);
        }


        [HttpPost, Route("GetCheckParkingPasses")]
        public async Task<ActionResult<CustomApiResponse>> GetCheckParkingPasses(AssignPassModel assignPassModel)
        {
            var userTicketModels = _userManager.Users
                        .Select(t => new UserModel()
                        {
                            Id = t.Id,
                            PhoneNumber = t.PhoneNumber,
                            Name = t.Name
                        }).ToList();

            var eventEntitys = await _eventService.GetEventEntitys();

            var eventModels = new List<EventModel>();

            var ticketPasses = await _ticketPassService.GetCheckSecurityParkingPassesByEventId(assignPassModel.EventId);

            foreach (var eventEntity in eventEntitys)
            {
                eventModels.Add(_mapper.Map<EventModel>(eventEntity));
            }

            var ticketPassModels = new List<TicketPassModel>();

            foreach (var ticketPass in ticketPasses)
            {
                var userModel = userTicketModels.Where(t => t.Id == ticketPass.UserId).FirstOrDefault();

                var ticketPassModel = new TicketPassModel();
                ticketPassModel = _mapper.Map<TicketPassModel>(ticketPass);
                ticketPassModel.PhoneNumber = userModel.PhoneNumber;
                ticketPassModel.Name = userModel.Name;
                ticketPassModel.EventId = ticketPassModel.EventId;
                ticketPassModel.Id = ticketPassModel.Id;
                ticketPassModel.IsActive = ticketPassModel.IsActive;
                ticketPassModel.IsParkingAllowed = ticketPassModel.IsParkingAllowed;
                ticketPassModel.EntryOTP = ticketPassModel.EntryOTP;
                ticketPassModel.EntryOTPTime = ticketPassModel.EntryOTPTime;
                ticketPassModel.EntryStatus = ticketPassModel.EntryStatus;
                ticketPassModel.ParkingOTP = ticketPassModel.ParkingOTP;
                ticketPassModel.ParkingOTPTime = ticketPassModel.ParkingOTPTime;
                ticketPassModel.ParkStatus = ticketPassModel.ParkStatus;
                ticketPassModel.EntryStatusName = Enum.GetName(typeof(EntryStatusEnum), ticketPassModel.EntryStatus).ToString();
                ticketPassModel.ParkStatusName = Enum.GetName(typeof(ParkingStatusEnum), ticketPassModel.ParkStatus).ToString();
                ticketPassModels.Add(ticketPassModel);
            }

            assignPassModel.Events = eventModels;
            assignPassModel.TicketPasses = ticketPassModels;
            return new CustomApiResponse(assignPassModel, 200, true);
        }

        [HttpPost, Route("AddSecurityParkingPassStatus")]
        public async Task<ActionResult<CustomApiResponse>> AddSecurityParkingPassStatus(TicketPassModel model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelStateExtensions.GetErrorMessage(ModelState));

            TicketPass dto = _mapper.Map<TicketPass>(model);
            if (dto.Id > 0)
            {
                if (dto.IsActive == true)
                {
                    dto.ParkStatus = (int)ParkingStatusEnum.Close;
                    var ticketPass = await _ticketPassService.UpdateTicketPass(dto);
                }
                return new CustomApiResponse(model, 200, true);
            }

            return new CustomApiResponse("Record not found.", 400, true);
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
