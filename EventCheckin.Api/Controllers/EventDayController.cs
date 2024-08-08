using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using EventCheckin.Api.Infrastructure;
using EventCheckin.Api.Utility.Extensions;
using EventCheckin.Api.Models.Events;
using EventCheckin.Services;
using EventCheckin.Api.Models;
using EventCheckin.DbContext.Entities;
using AutoMapper;

namespace EventCheckin.Api.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class EventDayController : BaseController
    {
        private readonly IEventDayService _eventDayService;
        private readonly IMapper _mapper;

        public EventDayController(IEventDayService eventDayService,
            IMapper mapper)
        {
            _eventDayService = eventDayService;
            _mapper = mapper;
        }

        [HttpGet, Route("ListEventDay")]
        public async Task<ActionResult<CustomApiResponse>> GetEventDays()
        {
            var eventEntitys = await _eventDayService.GetEventDays();
            return eventEntitys != null ? new CustomApiResponse(eventEntitys, 200, true) : new CustomApiResponse(500, false);
        }

        [HttpGet, Route("GetEventDay")]
        public async Task<ActionResult<CustomApiResponse>> GetEventDay(long eventEntityId)
        {
            var eventEntity = await _eventDayService.GetEventDay(eventEntityId);
            return eventEntity != null ? new CustomApiResponse(eventEntity, 200, true) : new CustomApiResponse(500, false);
        }

        [HttpPost, Route("AddEventDay")]
        public async Task<ActionResult<CustomApiResponse>> AddEventDay(EventDayModel model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelStateExtensions.GetErrorMessage(ModelState));

            EventDay dto = _mapper.Map<EventDay>(model);
            var addStatus = await _eventDayService.AddEventDay(dto);
            return addStatus != null ? new CustomApiResponse(addStatus, 200, true) : new CustomApiResponse(500, false);
        }

        [HttpPut, Route("UpdateEventDay")]
        public async Task<ActionResult<CustomApiResponse>> UpdateEventDay(EventDayModel model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelStateExtensions.GetErrorMessage(ModelState));

            EventDay dto = _mapper.Map<EventDay>(model);

            var addStatus = await _eventDayService.UpdateEventDay(dto);
            return addStatus ? new CustomApiResponse(addStatus, 200, true) : new CustomApiResponse(500, false);
        }

        [HttpPut, Route("DeleteEventEntity")]
        public async Task<ActionResult<CustomApiResponse>> DeleteEventEntity(int id)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelStateExtensions.GetErrorMessage(ModelState));

            EventDay dto = new EventDay
            {
                Id = id,
            };

            var addStatus = await _eventDayService.DeleteEventDay(dto);
            return addStatus ? new CustomApiResponse(dto, 200, true) : new CustomApiResponse(500, false);
        }
    }
}
