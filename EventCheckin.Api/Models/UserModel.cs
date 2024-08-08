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
        public int Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Title { get; set; }

        public DateTime BirthDate { get; set; }

        public string DeviceId { get; set; }

        public string OTP { get; set; }

        public virtual ICollection<Logging> Loggings { get; set; }

        [NotMapped]
        public string FullName => $"{FirstName} {LastName}";

        public string Email { get; set; }
        
        public bool EmailConfirmed { get; set; }
        
        public bool LockoutEnabled { get; set; }
        
        public IList<RoleModel> Roles { get; set; }

        public string UserId { get; set; }
        
        public string RoleId { get; set; }
        
        public string PhoneNumber { get; set; }
        
        public string UserName { get; set; }

        public string Password { get; set; }

        public string ConfirmPassword { get; set; }

    }
}
