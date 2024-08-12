using System;
using System.ComponentModel.DataAnnotations;

namespace EventCheckin.Api.Models.Events
{
    public class TicketPassModel
    {
        public long Id { get; set; }
        
        public long EventId { get; set; }

        public string TicketNo { get; set; }

        public bool IsActive { get; set; }

        public int AllowedGuestCount { get; set; }

        public long UserId { get; set; }

        public string EntryOTP { get; set; }

        public DateTime? EntryOTPTime { get; set; }

        public string EntrySecurity { get; set; }

        public int EntryStatus { get; set; }

        public string EntryStatusName { get; set; }

        public bool IsParkingAllowed { get; set; }

        public int AllowedParkingCount { get; set; }

        public string ParkingOTP { get; set; }

        public DateTime? ParkingOTPTime { get; set; }

        public string ParkSecurity { get; set; }

        public int ParkStatus { get; set; }

        public string ParkStatusName { get; set; }

        public long AssignedBy { get; set; }

        public DateTime? AssignedDateUtc { get; set; }

        public string PassDay { get; set; }

        public string PassFromTime { get; set; }

        public string PassToTime { get; set; }

        public string PhoneNumber { get; set; }

        public string Name { get; set; }

        public UserModel UserModel { get; set; }

        public EventModel EventModel { get; set; }

        public bool IsInviteSelected { get; set; }

        public bool IsParkingSelected { get; set; }
    }
}
