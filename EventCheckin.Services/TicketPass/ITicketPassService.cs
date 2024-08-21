using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EventCheckin.DbContext.Entities;
using EventCheckin.DbContext.Enums;
using EventCheckin.Infrastructure.DbUtility;
using EventCheckin.Infrastructure.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Linq;
using NLog;

namespace EventCheckin.Services
{
    public interface ITicketPassService : IService
    {
        Task<List<TicketPass>> GetTicketPasss();
        Task<List<dynamic>> SearchTicketPasss(List<long>eventIds = null);
        Task<List<TicketPass>> GetTicketPassesByEventId(long eventId);
        Task<List<TicketPass>> GetCheckSecurityEntryPassesByEventId(long eventId);
        Task<List<TicketPass>> GetCheckSecurityParkingPassesByEventId(long eventId);
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

        public async Task<List<dynamic>> SearchTicketPasss(List<long> eventIds = null)
        {
            try
            {
                var dbTicketPasss =
                    (from ticketPass in _uow.Query<DbContext.Entities.TicketPass>()
                           join eventEntity in _uow.Query<DbContext.Entities.EventEntity>()
                            on ticketPass.EventId equals eventEntity.Id
                           join user in _uow.Query<DbContext.Entities.Identity.ApplicationUser>()
                           on ticketPass.UserId equals user.Id 
                            join invitedby in _uow.Query<DbContext.Entities.Identity.ApplicationUser>()
                             on ticketPass.AssignedBy equals invitedby.Id into g
                            from invitedby in g.DefaultIfEmpty()
                     where eventIds.Contains(eventEntity.Id)
                           select new
                           {
                               EventId = eventEntity.Id,
                               EventName = eventEntity.Name,
                               StartDate = eventEntity.StartDate,
                               EndDate = eventEntity.EndDate,
                               TicketNo = ticketPass.TicketNo,
                               IsActive = ticketPass.IsActive,
                               AllowedGuestCount = ticketPass.AllowedGuestCount,
                               UserId = ticketPass.UserId,
                               EntryOTP = ticketPass.EntryOTP,
                               EntryOTPTime = ticketPass.EntryOTPTime,
                               EntryStatus = ticketPass.EntryStatus,
                               ParkStatus =  ticketPass.ParkStatus,
                               IsParkingAllowed = ticketPass.IsParkingAllowed,
                               AllowedParkingCount = ticketPass.AllowedParkingCount,
                               ParkingOTP = ticketPass.ParkingOTP,
                               ParkingOTPTime = ticketPass.ParkingOTPTime,
                               ParkSecurity = ticketPass.ParkSecurity,
                               AssignedBy = ticketPass.AssignedBy,
                               AssignedDateUtc = ticketPass.AssignedDateUtc,
                               GuestName = user.Name,
                               GuestPhoneNumber = user.PhoneNumber,
                               AssignedByName = invitedby.Name,
                           }).AsEnumerable()
                           .Select(o => new {
                               EventId = o.EventId,
                               EventName = o.EventName,
                               StartDate = o.StartDate,
                               EndDate = o.EndDate,
                               TicketNo = o.TicketNo,
                               IsActive = o.IsActive,
                               AllowedGuestCount = o.AllowedGuestCount,
                               UserId = o.UserId,
                               EntryOTP = o.EntryOTP,
                               EntryOTPTime = o.EntryOTPTime,
                               EntryStatusName = Enum.GetName(typeof(EntryStatusEnum), o.EntryStatus).ToString(),
                               ParkStatusName = Enum.GetName(typeof(ParkingStatusEnum), o.ParkStatus).ToString(),
                               IsParkingAllowed = o.IsParkingAllowed,
                               AllowedParkingCount = o.AllowedParkingCount,
                               ParkingOTP = o.ParkingOTP,
                               ParkingOTPTime = o.ParkingOTPTime,
                               ParkSecurity = o.ParkSecurity,
                               AssignedBy = o.AssignedBy,
                               AssignedDateUtc = o.AssignedDateUtc,
                               GuestName = o.GuestName,
                               GuestPhoneNumber = o.GuestPhoneNumber,
                               AssignedByName = o.AssignedByName,
                           }).ToList();
                _uow.Commit();

                return dbTicketPasss.ToList<dynamic>();
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

        public async Task<List<TicketPass>> GetCheckSecurityEntryPassesByEventId(long eventId)
        {
            try
            {
                if (eventId > 0)
                {
                    var dbTicketPass = _uow.Query<DbContext.Entities.TicketPass>(s => s.EventId == eventId && s.EntryOTP != null 
                    && (s.EntryStatus  == 1 || s.EntryStatus == 2));
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

        public async Task<List<TicketPass>> GetCheckSecurityParkingPassesByEventId(long eventId)
        {
            try
            {
                if (eventId > 0)
                {
                    var dbTicketPass = _uow.Query<DbContext.Entities.TicketPass>(s => s.EventId == eventId && s.ParkingOTP != null
                    && (s.ParkStatus == 1 || s.ParkStatus == 2) && s.IsParkingAllowed == true);
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
                var dbTicketPass = _uow.Query<DbContext.Entities.TicketPass>(s => s.Id == eventId).FirstOrDefault();
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
