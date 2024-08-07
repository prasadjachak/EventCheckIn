using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using EventCheckin.DbContext.Enums;
using EventCheckin.Infrastructure.DbUtility;
using EventCheckin.Infrastructure.Services;
using EventCheckin.Services.EventEntity.Dto;
using EventCheckin.Services.Logging;
using NLog;

namespace EventCheckin.Services.EventEntity
{
    public interface IEventEntityService : IService
    {
        Task<List<EventEntityDto>> GetEventEntitys();
        Task<EventEntityDto> GetEventEntity(long eventEntityId);
        Task<EventEntityDto> AddEventEntity(EventEntityDto dto);
        Task<bool> UpdateEventEntity(EventEntityDto dto);
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

        public async Task<List<EventEntityDto>> GetEventEntitys()
        {
            try
            {
                var eventEntitys = await _uow.Query<DbContext.Entities.EventEntity>()
                                      .AsNoTracking()
                                      .ToListAsync();
                if (!eventEntitys.Any())
                    return null;

                return eventEntitys.Select(s => new EventEntityDto { Id = s.Id, Name = s.Name }).ToList();
            }
            catch (Exception e)
            {
                _logger.Error(e);
                return null;
            }
        }

        public async Task<EventEntityDto> GetEventEntity(long eventEntityId)
        {
            try
            {
                var eventEntity = _uow.Query<DbContext.Entities.EventEntity>(s => s.Id == eventEntityId)
                               .AsNoTracking()
                               .FirstOrDefault();
                if (eventEntity == null)
                    return null;

                return new EventEntityDto { Id = eventEntity.Id, Name = eventEntity.Name };
            }
            catch (Exception e)
            {
                _logger.Error(e);
                return null;
            }
        }

        public async Task<EventEntityDto> AddEventEntity(EventEntityDto dto)
        {
            try
            {
                var dbEventEntity = new DbContext.Entities.EventEntity
                {
                    Name = dto.Name
                };

                await _uow.Context.Set<DbContext.Entities.EventEntity>().AddAsync(dbEventEntity);
                await _logsService.SaveLogNoCommit(DateTime.Now, dto.CurrentUserId, ELogType.EventEntityAdded, $"New eventEntity with url {dto.Name}."); // save log of this action
                await _uow.CommitAsync();

                dto.Id = dbEventEntity.Id;

                return dto;
            }
            catch (Exception e)
            {
                _logger.Error(e);
                return null;
            }
        }

        public async Task<bool> UpdateEventEntity(EventEntityDto dto)
        {
            try
            {
                var dbEventEntity = await _uow.Query<DbContext.Entities.EventEntity>(s => s.Id == dto.Id).FirstOrDefaultAsync();

                if (dbEventEntity == null)
                    return false;

                // Save log before we change values, so we can construct our message
                await _logsService.SaveLogNoCommit(DateTime.Now, dto.CurrentUserId, ELogType.EventEntityAdded, $"Updated eventEntity with id: {dto.Id}", $"Changed url from: {dbEventEntity.Name}, to: {dto.Name}");

                dbEventEntity.Name = dto.Name;
                await _uow.CommitAsync();

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
