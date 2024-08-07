using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using EventCheckin.Api.Infrastructure;
using EventCheckin.Api.Models;
using EventCheckin.Api.Utility.Extensions;
using EventCheckin.Services.EventDay;
using EventCheckin.Services.EventDay.Dto;

namespace EventCheckin.Api.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class EventDayController : BaseController
    {
        private readonly IEventDayService _eventDayService;

        public EventDayController(IEventDayService eventDayService)
        {
            _eventDayService = eventDayService;
        }

        [HttpGet, Route("GetPosts")]
        public async Task<IActionResult> GetPosts()
        {
            var eventEntitys = await _eventDayService.GetEventDays();
            return eventEntitys != null ? Ok(eventEntitys) : StatusCode(500);
        }

        [HttpGet, Route("GetPost")]
        public async Task<IActionResult> GetPost(long eventEntityId)
        {
            var eventEntity = await _eventDayService.GetEventDay(eventEntityId);
            return eventEntity != null ? Ok(eventEntity) : StatusCode(500);
        }

        [HttpPost, Route("AddPost")]
        public async Task<IActionResult> AddPost(EvenrDayViewModel model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelStateExtensions.GetErrorMessage(ModelState));

            EventDayDto dto = new EventDayDto
            {
                Id = model.Id,
                EventId = model.EventId
            };

            var addStatus = await _eventDayService.AddEventDay(dto);
            return addStatus != null ? Ok() : StatusCode(500);
        }

        [HttpPut, Route("UpdatePost")]
        public async Task<IActionResult> UpdatePost(EvenrDayViewModel model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelStateExtensions.GetErrorMessage(ModelState));

            EventDayDto dto = new EventDayDto
            {
                Id = model.Id,
                EventId = model.EventId
            };

            var addStatus = await _eventDayService.UpdateEventDay(dto);
            return addStatus ? Ok() : StatusCode(500);
        }
    }
}
