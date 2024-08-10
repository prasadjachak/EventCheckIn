using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;
using EventCheckin.Infrastructure.DbUtility;

namespace EventCheckin.DbContext.Entities.Identity
{
    // Add profile data for application users by adding properties to the ApplicationUser class
    public class ApplicationUser : IdentityUser<long>, IEntity
    {
        [Column(TypeName = "VARCHAR(550)")]
        public string Name { get; set; }

        public DateTime BirthDate { get; set; }

        public string DeviceId { get; set; }

        public string DeviceOTP { get; set; }
        
        public string OTP { get; set; }

        [InverseProperty("UserNavigation")]
        public virtual ICollection<Logging> Loggings { get; set; }
  
        public DateTime? OTPTimeStamp { get; set; }

        public string Remark { get; set; }

        public long ParentId { get; set; }

    }
}
