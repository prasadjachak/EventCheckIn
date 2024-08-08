using System;
using System.ComponentModel.DataAnnotations;

namespace EventCheckin.Api.Models.Events
{
    public class EventDayModel
    {
        public int Id { get; set; }
        
        public int EventId { get; set; }

        public string EventDayName { get; set; }

        public DateTime? StartDate { get; set; }

        public DateTime? EndDate { get; set; }

        public EventModel EventModel { get; set; }
    }
}
