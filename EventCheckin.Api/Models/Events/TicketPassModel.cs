using System;
using System.ComponentModel.DataAnnotations;

namespace EventCheckin.Api.Models.Events
{
    public class TicketPassModel
    {
        public int Id { get; set; }

        public int EventDayId { get; set; }

        public string TicketNo { get; set; }

        public int AllowedGuest { get; set; }

        public int AllowedParkingCount { get; set; }

        public int UserId { get; set; }

        public int AssignedBy { get; set; }

        public string PassDay { get; set; }

        public string PassFromTime { get; set; }

        public string PassToTime { get; set; }

        public DateTime AssignedDateUtc { get; set; }

        public UserModel UserModel { get; set; }

        public EventModel EventModel { get; set; }
    }
}
