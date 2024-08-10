using EventCheckin.Infrastructure.DbUtility;
using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using EventCheckin.DbContext.Entities.Identity;

namespace EventCheckin.DbContext.Entities
{
    /// <summary>
    /// Represents a permission record-user role mapping class
    /// </summary>
    public partial class RolePermission : IEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }

        /// <summary>
        /// Gets or sets the permission record identifier
        /// </summary>
        public long FeatureId { get; set; }

        /// <summary>
        /// Gets or sets the user role identifier
        /// </summary>
        /// 
        [ForeignKey("Role")]
        public long RoleId { get; set; }

        public string Permission { get; set; }

        public bool? Enabled { get; set; }

        public string Description { get; set; }

        public DateTime CreatedOnUtc { get; set; }

        public string CreatedBy { get; set; }

        public string UpdatedBy { get; set; }

        public DateTime? UpdatedOnUtc { get; set; }

        public virtual Feature? Feature { get; set; }

        public virtual ApplicationRole? Role { get; set; }

    }
}