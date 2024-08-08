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

namespace EventCheckin.Api.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class EventController : BaseController
    {
        private readonly IEventEntityService _eventEntityService;
        private readonly IMapper _mapper;
        public EventController(IEventEntityService eventEntityService,
            IMapper mapper)
        {
            _eventEntityService = eventEntityService;
            _mapper = mapper;
        }

        [HttpGet, Route("ListEventEntitys")]
        public async Task<ActionResult<CustomApiResponse>> GetEventEntitys()
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
    }
}
