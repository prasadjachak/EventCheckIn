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
    public interface ITicketPassService : IService
    {
        Task<List<TicketPass>> GetTicketPasss();
        Task<List<TicketPass>> GetTicketPassesByEventId(long eventId);
        Task<TicketPass> GetTicketPass(long eventDayId);
        Task<TicketPass> AddTicketPass(TicketPass dto);
        Task<bool> UpdateTicketPass(TicketPass dto);
        Task<bool> DeleteTicketPass(TicketPass dto);
        Task<List<TicketPass>> GetTicketPassForUser(long userId);
    }

    public class TicketPassService : ITicketPassService
    {
        private readonly IUnitOfWork _uow;
        private static readonly Logger _logger = LogManager.GetCurrentClassLogger();

        public TicketPassService(IUnitOfWork uow)
        {
            _uow = uow;
        }

        public async Task<List<TicketPass>> GetTicketPasss()
        {
            try
            {
                var dbTicketPasss = _uow.Query<DbContext.Entities.TicketPass>().ToList();

                if (!dbTicketPasss.Any())
                    return null;

                return dbTicketPasss.ToList();
            }
            catch (Exception e)
            {
                _logger.Error(e);
                return null;
            }
        }

        public async Task<List<TicketPass>> GetTicketPassesByEventId(long eventId)
        {
            try
            {
                if(eventId > 0)
                {
                    var dbTicketPass = _uow.Query<DbContext.Entities.TicketPass>(s => s.EventId == eventId);
                    if (dbTicketPass == null)
                        return new List<TicketPass>();
                    return dbTicketPass.ToList();
                }
                return new List<TicketPass>();
            }
            catch (Exception e)
            {
                _logger.Error(e);
                return null;
            }
        }

        public async Task<TicketPass> GetTicketPass(long eventId)
        {
            try
            {
                var dbTicketPass = _uow.Query<DbContext.Entities.TicketPass>(s => s.EventId == eventId).FirstOrDefault();
                if (dbTicketPass == null)
                    return null;

                return dbTicketPass;
            }
            catch (Exception e)
            {
                _logger.Error(e);
                return null;
            }
        }

        public async Task<TicketPass> AddTicketPass(TicketPass dto)
        {
            try
            {
                _uow.Context.Set<DbContext.Entities.TicketPass>().Add(dto);
                _uow.Commit();

                return dto;
            }
            catch (Exception e)
            {
                _logger.Error(e);
                return null;
            }
        }

        public async Task<bool> UpdateTicketPass(TicketPass dto)
        {
            try
            {
                if (dto == null)
                    return false;
                _uow.Context.Set<DbContext.Entities.TicketPass>().Update(dto);
                _uow.Commit();

                return true;
            }
            catch (Exception e)
            {
                _logger.Error(e);
                return false;
            }
        }

        public async Task<bool> DeleteTicketPass(TicketPass dto)
        {
            try
            {
                var dbTicketPass = _uow.Query<DbContext.Entities.TicketPass>(s => s.Id == dto.Id).FirstOrDefault();

                if (dbTicketPass == null)
                    return false;

                _uow.Context.Set<DbContext.Entities.TicketPass>().Remove(dbTicketPass);
                _uow.Commit();

                return true;
            }
            catch (Exception e)
            {
                _logger.Error(e);
                return false;
            }
        }

        public async Task<List<TicketPass>> GetTicketPassForUser(long userId)
        {
            try
            {
                var dbTicketPass = _uow.Query<DbContext.Entities.TicketPass>(s => s.UserId == userId);
                if (dbTicketPass == null)
                    return null;

                return dbTicketPass.ToList();
            }
            catch (Exception e)
            {
                _logger.Error(e);
                return null;
            }
        }
    }
}
