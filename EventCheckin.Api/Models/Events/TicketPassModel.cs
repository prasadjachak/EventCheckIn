using System;
using System.ComponentModel.DataAnnotations;

namespace EventCheckin.Api.Models.Events
{
    public class TicketPassModel
    {
        public long Id { get; set; }

        public long EventDayId { get; set; }

        public string TicketNo { get; set; }

        public int AllowedGuest { get; set; }

        public int AllowedParkingCount { get; set; }

        public long UserId { get; set; }

        public long AssignedBy { get; set; }

        public string PassDay { get; set; }

        public string PassFromTime { get; set; }

        public string PassToTime { get; set; }

        public DateTime AssignedDateUtc { get; set; }

        public UserModel UserModel { get; set; }

        public EventModel EventModel { get; set; }
    }
}
