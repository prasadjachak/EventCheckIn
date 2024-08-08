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

namespace EventCheckin.Api.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class TicketPassController : BaseController
    {
        private readonly ITicketPassService _ticketPassService;
        private readonly IEventEntityService _eventService;
        private readonly IEventDayService _eventDayService;
        private readonly IMapper _mapper;
        public TicketPassController(ITicketPassService eventEntityService,
            IEventEntityService eventService,
            IEventDayService eventDayService,
            IMapper mapper)
        {
            _ticketPassService = eventEntityService;
            _eventDayService = eventDayService;
            _eventService = eventService;
            _mapper = mapper;
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
                        var eventDay = await _eventDayService.GetEventDay(ticketPass.EventDayId);
                        ticketPassModel = _mapper.Map<TicketPassModel>(ticketPass);
                        var eventDayModel = _mapper.Map<EventDayModel>(eventDay);
                        var evententity = await _eventService.GetEventEntity(eventDayModel.EventId);
                        eventDayModel.EventModel = _mapper.Map<EventModel>(evententity);
                        ticketPassModel.EventDayModel = eventDayModel;
                        ticketPassModel.PassDay = eventDayModel.StartDate.Value.ToString("MMM dd");
                        ticketPassModel.PassFromTime = eventDayModel.StartDate.Value.ToString("hh:mm tt");
                        ticketPassModel.PassToTime = eventDayModel.EndDate.Value.ToString("hh:mm tt");
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
    }
}
