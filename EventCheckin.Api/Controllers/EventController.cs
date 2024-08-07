using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using EventCheckin.Api.Infrastructure;
using EventCheckin.Api.Models;
using EventCheckin.Api.Utility.Extensions;
using EventCheckin.Services.EventEntity;
using EventCheckin.Services.EventEntity.Dto;

namespace EventCheckin.Api.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class EventController : BaseController
    {
        private readonly IEventEntityService _eventEntityService;

        public EventController(IEventEntityService eventEntityService)
        {
            _eventEntityService = eventEntityService;
        }

        [HttpGet, Route("GetEventEntitys")]
        public async Task<IActionResult> GetEventEntitys()
        {
            var eventEntitys = await _eventEntityService.GetEventEntitys();
            return eventEntitys != null ? Ok(eventEntitys) : StatusCode(500);
        }

        [HttpGet, Route("GetEventEntity")]
        public async Task<IActionResult> GetEventEntity(long eventEntityId)
        {
            var eventEntity = await _eventEntityService.GetEventEntity(eventEntityId);
            return eventEntity != null ? Ok(eventEntity) : StatusCode(500);
        }

        [HttpPost, Route("AddEventEntity")]
        public async Task<IActionResult> AddEventEntity(EventEntityViewModel model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelStateExtensions.GetErrorMessage(ModelState));

            EventEntityDto dto = new EventEntityDto
            {
                Id = model.Id,
               // Url = model.Url,
                CurrentUserId = CurrentUserId
            };

            var addStatus = await _eventEntityService.AddEventEntity(dto);
            return addStatus != null ? Ok() : StatusCode(500);
        }

        [HttpPut, Route("UpdateEventEntity")]
        public async Task<IActionResult> UpdateEventEntity(EventEntityViewModel model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelStateExtensions.GetErrorMessage(ModelState));

            EventEntityDto dto = new EventEntityDto
            {
                Id = model.Id,
               // Url = model.Url,
                CurrentUserId = CurrentUserId
            };

            var addStatus = await _eventEntityService.UpdateEventEntity(dto);
            return addStatus ? Ok() : StatusCode(500);
        }
    }
}
