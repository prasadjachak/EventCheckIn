using EventCheckin.Infrastructure.DbUtility;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventCheckin.DbContext.Entities
{
    public class EventEntity : IEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public int OrganiserId { get; set; }
        public string VenueName { get; set; }
        public string VenueAddress1 { get; set; }
        public string VenueAddress2 { get; set; }
        public string VenueCity { get; set; }
        public string VenueState { get; set; }
        public string VenuePincode { get; set; }
        public string VenueCountry { get; set; }
        public int VenueLatlong { get; set; }
        public int VenueLattitude { get; set; }
        public bool IsLive { get; set; }
        public bool IsPublished { get; set; }
        public DateTime? CreatedOnUtc { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? UpdatedOnUtc { get; set; }
        public string UpdatedBy { get; set; }
        public DateTime? DeletedOnUtc { get; set; }
        public string DeletedBy { get; set; }
    }
}
