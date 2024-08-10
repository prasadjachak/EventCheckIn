using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using EventCheckin.Infrastructure.DbUtility;

namespace EventCheckin.DbContext.Entities
{
    /// <summary>
    /// Represents a permission record
    /// </summary>
    public partial class Feature : IEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }
        /// <summary>
        /// Gets or sets the permission name
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// Gets or sets the permission system name
        /// </summary>
        public string SystemName { get; set; }
        
        /// <summary>
        /// Gets or sets the permission category
        /// </summary>
        public string Category { get; set; }

        public string Code { get; set; }

        public bool IsPaid { get; set; }

        public string Description { get; set; }

        public string Image { get; set; }

        public string Link { get; set; }

        public string Status { get; set; }

        public string Icon { get; set; }

        public int ParentId { get; set; }

        public DateTime CreatedOnUtc { get; set; }

        public string CreatedBy { get; set; }

        public string UpdatedBy { get; set; }

        public DateTime? UpdatedOnUtc { get; set; }

        public virtual IList<Feature> Children { get; set; }
    }
}