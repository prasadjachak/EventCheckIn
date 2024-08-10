using System;

namespace EventCheckin.Api.Models.Security
{
    public record RolePermissionModel  
    {
        /// <summary>
         /// Gets or sets the permission record identifier
         /// </summary>
        public long FeatureId { get; set; }

        /// <summary>
        /// Gets or sets the user role identifier
        /// </summary>
        public long RoleId { get; set; }

        public string Permission { get; set; }

        public bool Enabled { get; set; }
       
    }
}
