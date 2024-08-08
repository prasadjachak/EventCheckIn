using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Xml.Linq;
using EventCheckin.DbContext.Entities;
using EventCheckin.Infrastructure.DbUtility;
using EventCheckin.Infrastructure.Services;
using EventCheckin.Services.EventDay.Dto;
using NLog;
#pragma warning disable 1998

namespace EventCheckin.Services.Permission
{
    public interface IPermissionService : IService
    {
        Task<List<Feature>> GetAllPermissions(int roleId);

        Task<List<Feature>> GetAllFeaturesAsync(string permission = null);

        Task<List<RolePermission>> GetAllRolePermissions(int FeatureId, int roleId);

        Task<RolePermission> InsertRolePermissionAsync(RolePermission dto);

        Task<RolePermission> UpdateRolePermissionAsync(RolePermission dto);

        Task<RolePermission> DeleteRolePermissionAsync(RolePermission dto);

    }

    public class PermissionService : IPermissionService
    {
        private readonly IUnitOfWork _uow;
        private static readonly Logger _logger = LogManager.GetCurrentClassLogger();

        public PermissionService(IUnitOfWork uow)
        {
            _uow = uow;
        }

        public async Task<List<Feature>> GetAllPermissions(int roleId)
        {
            try
            {
                var featureids = _uow.Query<DbContext.Entities.RolePermission>().Where(t=> roleId ==(t.RoleId)).Select(t=>t.FeatureId).Distinct().ToList();

                var features = _uow.Query<DbContext.Entities.Feature>().Where(t => featureids.Contains(t.Id)).ToList();

                return features.ToList();
            }
            catch (Exception e)
            {
                _logger.Error(e);
                return null;
            }
        }

        public async Task<List<RolePermission>> GetAllRolePermissions(int FeatureId, int roleId)
        {
            try
            {
                return _uow.Query<DbContext.Entities.RolePermission>().Where(t => roleId == (t.RoleId) && t.FeatureId == FeatureId).ToList();
            }
            catch (Exception e)
            {
                _logger.Error(e);
                return null;
            }
        }

        public async Task<List<Feature>> GetAllFeaturesAsync(string permission = null)
        {
            try
            {
                if(string.IsNullOrEmpty(permission))
                    return _uow.Query<DbContext.Entities.Feature>().ToList();
                else
                {
                    return _uow.Query<DbContext.Entities.Feature>().Where(q => q.Description.ToLower() == permission.ToLower() || q.Name.ToLower() == permission.ToLower()).ToList();
                }
            }
            catch (Exception e)
            {
                _logger.Error(e);
                return null;
            }
        }

        public async Task<RolePermission> InsertRolePermissionAsync(RolePermission dto)
        {
            try
            {
                _uow.Context.Set<DbContext.Entities.RolePermission>().Add(dto);
                _uow.Commit();

                return dto;
            }
            catch (Exception e)
            {
                _logger.Error(e);
                return null;
            }
        }

        public async Task<RolePermission> UpdateRolePermissionAsync(RolePermission dto)
        {
            try
            {
                _uow.Context.Set<DbContext.Entities.RolePermission>().Update(dto);
                _uow.Commit();

                return dto;
            }
            catch (Exception e)
            {
                _logger.Error(e);
                return null;
            }
        }

        public async Task<RolePermission> DeleteRolePermissionAsync(RolePermission dto)
        {
            try
            {
                _uow.Context.Set<DbContext.Entities.RolePermission>().Remove(dto);
                _uow.Commit();

                return dto;
            }
            catch (Exception e)
            {
                _logger.Error(e);
                return null;
            }
        }

    }
}
