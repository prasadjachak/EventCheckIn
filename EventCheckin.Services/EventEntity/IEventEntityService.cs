using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using EventCheckin.DbContext.Enums;
using EventCheckin.Infrastructure.DbUtility;
using EventCheckin.Infrastructure.Services;
using EventCheckin.Services.Logging;
using NLog;
using EventCheckin.DbContext.Entities;

namespace EventCheckin.Services
{
    public interface IEventEntityService : IService
    {
        Task<List<EventEntity>> GetEventEntitys();
        
        Task<EventEntity> GetEventEntity(long eventEntityId);
        
        Task<EventEntity> AddEventEntity(EventEntity dto);
        
        Task<bool> UpdateEventEntity(EventEntity dto);

        Task<bool> DeleteEventDay(EventEntity dto);

        Task<List<EventMember>> GetEventMembers(long eventEntityId);

        Task<EventMember> GetEventMemberByIdAsync(long eventEntityId);

        Task<EventMember> GetEventMemberByEventIdAndUserIdAsync(long eventEntityId,long userId);

        Task<EventMember> AddEventMemberAsync(EventMember dto);

        Task<EventMember> UpdateEventMemberAsync(EventMember dto);

        Task<bool> DeleteEventMemberAsync(long eventMemberId);
    }

    public class EventEntityService : IEventEntityService
    {
        private readonly IUnitOfWork _uow;
        private readonly ILoggingService _logsService;
        private static readonly Logger _logger = LogManager.GetCurrentClassLogger();

        public EventEntityService(IUnitOfWork uow, ILoggingService logsService)
        {
            _uow = uow;
            _logsService = logsService;
        }

        public async Task<List<EventEntity>> GetEventEntitys()
        {
            try
            {
                var eventEntitys = await _uow.Query<DbContext.Entities.EventEntity>()
                                      .AsNoTracking()
                                      .ToListAsync();
                if (!eventEntitys.Any())
                    return null;

                return eventEntitys.ToList();
            }
            catch (Exception e)
            {
                _logger.Error(e);
                return null;
            }
        }

        public async Task<EventEntity> GetEventEntity(long eventEntityId)
        {
            try
            {
                var eventEntity = _uow.Query<DbContext.Entities.EventEntity>(s => s.Id == eventEntityId)
                               .AsNoTracking()
                               .FirstOrDefault();
                if (eventEntity == null)
                    return null;

                return eventEntity;
            }
            catch (Exception e)
            {
                _logger.Error(e);
                return null;
            }
        }

        public async Task<EventEntity> AddEventEntity(EventEntity dto)
        {
            try
            {
                await _uow.Context.Set<DbContext.Entities.EventEntity>().AddAsync(dto);
                await _logsService.SaveLogNoCommit(DateTime.Now,1, ELogType.EventEntityAdded, $"New eventEntity with url {dto.Name}."); // save log of this action
                await _uow.CommitAsync();

                return dto;
            }
            catch (Exception e)
            {
                _logger.Error(e);
                return null;
            }
        }

        public async Task<bool> UpdateEventEntity(EventEntity dto)
        {
            try
            {
                if (dto == null)
                    return false;

                // Save log before we change values, so we can construct our message
                await _logsService.SaveLogNoCommit(DateTime.Now, 1, ELogType.EventEntityAdded, $"Updated eventEntity with id: {dto.Id}", $"Changed url from: {dto.Name}, to: {dto.Name}");
                _uow.Context.Set<DbContext.Entities.EventEntity>().Update(dto);
                await _uow.CommitAsync();

                return true;
            }
            catch (Exception e)
            {
                _logger.Error(e);
                return false;
            }
        }

        public async Task<bool> DeleteEventDay(EventEntity dto)
        {
            try
            {
                var dbEventDay = _uow.Query<DbContext.Entities.EventEntity>(s => s.Id == dto.Id).FirstOrDefault();

                if (dbEventDay == null)
                    return false;

                _uow.Context.Set<DbContext.Entities.EventEntity>().Remove(dbEventDay);
                _uow.Commit();

                return true;
            }
            catch (Exception e)
            {
                _logger.Error(e);
                return false;
            }
        }

        public async Task<List<EventMember>> GetEventMembers(long eventEntityId)
        {
            try
            {
                var eventEntitys = await _uow.Query<DbContext.Entities.EventMember>().Where(t=>t.EventId == eventEntityId)
                                      .AsNoTracking()
                                      .ToListAsync();
                if (!eventEntitys.Any())
                    return new  List<EventMember>();

                return eventEntitys.ToList();
            }
            catch (Exception e)
            {
                _logger.Error(e);
                return null;
            }
        }

        public async Task<EventMember> GetEventMemberByIdAsync(long eventEntityId)
        {
            try
            {
                var eventEntity = _uow.Query<DbContext.Entities.EventMember>(s => s.Id == eventEntityId)
                               .AsNoTracking()
                               .FirstOrDefault();
                if (eventEntity == null)
                    return null;

                return eventEntity;
            }
            catch (Exception e)
            {
                _logger.Error(e);
                return null;
            }
        }

        public async Task<EventMember> UpdateEventMemberAsync(EventMember dto)
        {
            try
            {
                _uow.Context.Set<DbContext.Entities.EventMember>().Update(dto);
                await _logsService.SaveLogNoCommit(DateTime.Now, 1, ELogType.EventEntityAdded, $"New eventEntity with url {dto.Id}."); // save log of this action
                await _uow.CommitAsync();

                return dto;
            }
            catch (Exception e)
            {
                _logger.Error(e);
                return null;
            }
        }

        public async Task<EventMember> AddEventMemberAsync(EventMember dto)
        {
            try
            {
                await _uow.Context.Set<DbContext.Entities.EventMember>().AddAsync(dto);
                await _logsService.SaveLogNoCommit(DateTime.Now, 1, ELogType.EventEntityAdded, $"New eventEntity with url {dto.Id}."); // save log of this action
                await _uow.CommitAsync();

                return dto;
            }
            catch (Exception e)
            {
                _logger.Error(e);
                return null;
            }
        }

        public async Task<bool> DeleteEventMemberAsync(long eventMemberId)
        {
            try
            {
                var dbEventDay = _uow.Query<DbContext.Entities.EventMember>(s => s.Id == eventMemberId).FirstOrDefault();

                if (dbEventDay == null)
                    return false;

                _uow.Context.Set<DbContext.Entities.EventMember>().Remove(dbEventDay);
                _uow.Commit();

                return true;
            }
            catch (Exception e)
            {
                _logger.Error(e);
                return false;
            }
        }

        public async Task<EventMember> GetEventMemberByEventIdAndUserIdAsync(long eventEntityId, long userId)
        {
            try
            {
                var eventEntity = _uow.Query<DbContext.Entities.EventMember>(s => s.EventId == eventEntityId && s.UserId == userId)
                               .AsNoTracking()
                               .FirstOrDefault();
                if (eventEntity == null)
                    return null;

                return eventEntity;
            }
            catch (Exception e)
            {
                _logger.Error(e);
                return null;
            }
        }
    }
}
