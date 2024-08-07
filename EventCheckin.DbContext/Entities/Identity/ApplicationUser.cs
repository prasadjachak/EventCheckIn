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
        public int Id { get; set; }

        [Required, Column(TypeName = "VARCHAR(250)")]
        public string FirstName { get; set; }

        [Required, Column(TypeName = "VARCHAR(250)")]
        public string LastName { get; set; }

        [Required, Column(TypeName = "VARCHAR(100)")]
        public string Title { get; set; }

        public DateTime BirthDate { get; set; }

        public string DeviceId { get; set; }

        public string OTP { get; set; }

        //[Required]
        //[DefaultValue(EGenderType.Unresolved)]
        //public EGenderType Gender { get; set; }

        /* =============== Navigation properties =============== */

        // 1 on 1 relationship with Author
        //    public virtual Author Author { get; set; }

        [InverseProperty("UserNavigation")]
        public virtual ICollection<Logging> Loggings { get; set; }


        /* =============== Non-mapped properties =============== */
        [NotMapped]
        public string FullName => $"{FirstName} {LastName}";
    }
}
