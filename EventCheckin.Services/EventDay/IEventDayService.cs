using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EventCheckin.DbContext.Entities;
using EventCheckin.Infrastructure.DbUtility;
using EventCheckin.Infrastructure.Services;
using NLog;

namespace EventCheckin.Services
{
    public interface IEventDayService : IService
    {
        Task<List<EventDay>> GetEventDays();
        Task<EventDay> GetEventDay(long eventDayId);
        Task<EventDay> AddEventDay(EventDay dto);
        Task<bool> UpdateEventDay(EventDay dto);

        Task<bool> DeleteEventDay(EventDay dto);
    }

    public class EventDayService : IEventDayService
    {
        private readonly IUnitOfWork _uow;
        private static readonly Logger _logger = LogManager.GetCurrentClassLogger();

        public EventDayService(IUnitOfWork uow)
        {
            _uow = uow;
        }

        public async Task<List<EventDay>> GetEventDays()
        {
            try
            {
                var dbEventDays = _uow.Query<DbContext.Entities.EventDay>().ToList();

                if (!dbEventDays.Any())
                    return null;

                return dbEventDays.ToList();
            }
            catch (Exception e)
            {
                _logger.Error(e);
                return null;
            }
        }

        public async Task<EventDay> GetEventDay(long eventDayId)
        {
            try
            {
                var dbEventDay = _uow.Query<DbContext.Entities.EventDay>(s => s.Id == eventDayId).FirstOrDefault();
                if (dbEventDay == null)
                    return null;

                return dbEventDay;
            }
            catch (Exception e)
            {
                _logger.Error(e);
                return null;
            }
        }

        public async Task<EventDay> AddEventDay(EventDay dto)
        {
            try
            {
                _uow.Context.Set<DbContext.Entities.EventDay>().Add(dto);
                _uow.Commit();

                return dto;
            }
            catch (Exception e)
            {
                _logger.Error(e);
                return null;
            }
        }

        public async Task<bool> UpdateEventDay(EventDay dto)
        {
            try
            {
                if (dto == null)
                    return false;
                _uow.Context.Set<DbContext.Entities.EventDay>().Update(dto);
                _uow.Commit();

                return true;
            }
            catch (Exception e)
            {
                _logger.Error(e);
                return false;
            }
        }

        public async Task<bool> DeleteEventDay(EventDay dto)
        {
            try
            {
                var dbEventDay = _uow.Query<DbContext.Entities.EventDay>(s => s.Id == dto.Id).FirstOrDefault();

                if (dbEventDay == null)
                    return false;

                _uow.Context.Set<DbContext.Entities.EventDay>().Remove(dbEventDay);
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
