using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EventCheckin.Infrastructure.DbUtility;
using EventCheckin.Infrastructure.Services;
using EventCheckin.Services.EventDay.Dto;
using NLog;
#pragma warning disable 1998

namespace EventCheckin.Services.EventDay
{
    public interface IEventDayService : IService
    {
        Task<List<EventDayDto>> GetEventDays();
        Task<EventDayDto> GetEventDay(long eventDayId);
        Task<EventDayDto> AddEventDay(EventDayDto dto);
        Task<bool> UpdateEventDay(EventDayDto dto);
    }

    public class EventDayService : IEventDayService
    {
        private readonly IUnitOfWork _uow;
        private static readonly Logger _logger = LogManager.GetCurrentClassLogger();

        public EventDayService(IUnitOfWork uow)
        {
            _uow = uow;
        }

        public async Task<List<EventDayDto>> GetEventDays()
        {
            try
            {
                var dbEventDays = _uow.Query<DbContext.Entities.EventDay>().ToList();

                if (!dbEventDays.Any())
                    return null;

                return dbEventDays.Select(s => new EventDayDto
                {
                    Id = s.Id,
                    EventId = s.EventId,
               
                }).ToList();
            }
            catch (Exception e)
            {
                _logger.Error(e);
                return null;
            }
        }

        public async Task<EventDayDto> GetEventDay(long eventDayId)
        {
            try
            {
                var dbEventDay = _uow.Query<DbContext.Entities.EventDay>(s => s.Id == eventDayId).FirstOrDefault();
                if (dbEventDay == null)
                    return null;

                return new EventDayDto
                {
                    Id = dbEventDay.Id,
                    EventId = dbEventDay.EventId,
                };
            }
            catch (Exception e)
            {
                _logger.Error(e);
                return null;
            }
        }

        public async Task<EventDayDto> AddEventDay(EventDayDto dto)
        {
            try
            {
                var dbEventDay = new DbContext.Entities.EventDay
                {
                    EventId = dto.EventId,
                };

                _uow.Context.Set<DbContext.Entities.EventDay>().Add(dbEventDay);
                _uow.Commit();

                dto.Id = dbEventDay.Id;

                return dto;
            }
            catch (Exception e)
            {
                _logger.Error(e);
                return null;
            }
        }

        public async Task<bool> UpdateEventDay(EventDayDto dto)
        {
            try
            {
                var dbEventDay = _uow.Query<DbContext.Entities.EventDay>(s => s.Id == dto.Id).FirstOrDefault();

                if (dbEventDay == null)
                    return false;

                dbEventDay.Id = dto.Id;
                dbEventDay.EventId = dto.EventId;
                _uow.Commit();

                return true;
            }
            catch (Exception e)
            {
                _logger.Error(e);
                return false;
            }
        }
    }
}
