using AutoMapper;
using EventCheckin.Api.Models;
using EventCheckin.DbContext.Entities.Identity;

namespace EventCheckin.Api.Infrastructure
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            this.CreateMap<UserModel, ApplicationUser>();
            this.CreateMap<ApplicationUser,UserModel>();

            this.CreateMap<RoleModel, ApplicationRole>();
            this.CreateMap<ApplicationRole, RoleModel>();
        }
    }
}
