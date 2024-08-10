using System;
using System.ComponentModel.DataAnnotations;

namespace EventCheckin.Api.Models.Events
{
    public class EventModel
    {
        [Required]
        public long Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public long OrganiserId { get; set; }
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
    }
}
