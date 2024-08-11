using EventCheckin.Api.Models.Events;
using System.Collections.Generic;

namespace EventCheckin.Api.Models
{
    public class AssignPassModel
    {
        public AssignPassModel() 
        {
            Events = new List<EventModel>();
            TicketPasses = new List<TicketPassModel>();
        }

        public long EventId { get; set; }
        public List<TicketPassModel> TicketPasses { get; set;}

        public List<EventModel> Events { get; set; }
    }
}
