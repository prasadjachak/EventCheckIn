using EventCheckin.DbContext.Entities;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System;
using EventCheckin.DbContext.Entities.Identity;

namespace EventCheckin.Api.Models
{
    public class UserModel
    {
        public UserModel() {
            this.UserRoles = new List<RoleModel>();
            this.RoleIds = new List<long>();
        }
        public long Id { get; set; }

        public string Name { get; set; }
        
        public DateTime BirthDate { get; set; }

        public string DeviceId { get; set; }

        public string OTP { get; set; }

        public virtual List<long> RoleIds { get; set; }

        public virtual ICollection<Logging> Loggings { get; set; }
 
        public string Email { get; set; }
        
        public bool EmailConfirmed { get; set; }
        
        public bool LockoutEnabled { get; set; }
        
        public IList<RoleModel> UserRoles { get; set; }

        public virtual List<string> RoleNames { get; set; }

        public long UserId { get; set; }
        
        public long RoleId { get; set; }
        
        public string PhoneNumber { get; set; }
        
        public string UserName { get; set; }

        public string RoleName { get; set; }

        public string Password { get; set; }

        public string ConfirmPassword { get; set; }

        public long ParentId { get; set; }

        public long ParentMemberId { get; set; }

        public string MemberNo { get; set; }

    }
}
