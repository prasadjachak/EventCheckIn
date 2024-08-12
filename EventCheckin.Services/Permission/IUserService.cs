using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Xml.Linq;
using EventCheckin.DbContext.Entities;
using EventCheckin.DbContext.Entities.Identity;
using EventCheckin.Infrastructure.DbUtility;
using EventCheckin.Infrastructure.Services;
using Microsoft.EntityFrameworkCore;
using NLog;
#pragma warning disable 1998

namespace EventCheckin.Services.Permission
{
    public interface IUserService : IService
    {
        Task<List<ApplicationUser>> GetUsers(string role);

        Task<ApplicationUser> GetUser(string phoneNumber);

        Task<List<ApplicationUser>> GetUserByMemberId(long memberId, string roleName);

    }

    public class UserService : IUserService
    {
        private readonly IUnitOfWork _uow;
        private static readonly Logger _logger = LogManager.GetCurrentClassLogger();

        public UserService(IUnitOfWork uow)
        {
            _uow = uow;
        }

        public async Task<List<ApplicationUser>> GetUsers(string roleName)
        {
            try
            {
                var users =
                    await (from user in _uow.Query<DbContext.Entities.Identity.ApplicationUser>()
                           join userRole in _uow.Query<DbContext.Entities.Identity.ApplicationUserRole>()  
                            on user.Id equals userRole.UserId
                           join role in _uow.Query<DbContext.Entities.Identity.ApplicationRole>()
                           on userRole.RoleId equals role.Id
                           where role.Name == roleName
                           select user).AsNoTracking()
                                 .ToListAsync();
                _uow.Commit();

                return users.ToList();
            }
            catch (Exception e)
            {
                _logger.Error(e);
                return null;
            }
        }

        public async Task<List<ApplicationUser>> GetUserByMemberId(long memberId,string roleName)
        {
            try
            {
                var users =
                    await (from user in _uow.Query<DbContext.Entities.Identity.ApplicationUser>()
                         
                           join userRole in _uow.Query<DbContext.Entities.Identity.ApplicationUserRole>()
                             on user.Id equals userRole.UserId
                           join role in _uow.Query<DbContext.Entities.Identity.ApplicationRole>()
                           on userRole.RoleId equals role.Id
                           where role.Name == roleName
                           && user.ParentId == memberId
                           select user).AsNoTracking()
                                 .ToListAsync();
                _uow.Commit();

                return users.ToList();
            }
            catch (Exception e)
            {
                _logger.Error(e);
                return null;
            }
        }

        public async Task<ApplicationUser> GetUser(string phoneNumber)
        {
            try
            {
                var users =
                    await (from user in _uow.Query<DbContext.Entities.Identity.ApplicationUser>()
                           where user.UserName == phoneNumber
                           select user).AsNoTracking()
                                 .ToListAsync();
                _uow.Commit();
                _uow.ClearChangeTracker();
                return users.FirstOrDefault();
            }
            catch (Exception e)
            {
                _logger.Error(e);
                return null;
            }
        }




    }
}
