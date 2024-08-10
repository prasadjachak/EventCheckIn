using AutoMapper;
using EventCheckin.Api.Models;
using EventCheckin.Api.Models.Events;
using EventCheckin.Api.Models.Security;
using EventCheckin.DbContext.Entities;
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

            this.CreateMap<EventModel, EventEntity>();
            this.CreateMap<EventEntity, EventModel>();
 
            this.CreateMap<TicketPassModel, TicketPass>();
            this.CreateMap<TicketPass, TicketPassModel>();

            this.CreateMap<RolePermissionModel, RolePermission>();
            this.CreateMap<RolePermission, RolePermissionModel>();

            this.CreateMap<EventMemberModel, EventMember>();
            this.CreateMap<EventMember, EventMemberModel>();
        }
    }
}
