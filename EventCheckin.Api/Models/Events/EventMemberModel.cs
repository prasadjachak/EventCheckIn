using System;
using System.ComponentModel.DataAnnotations;

namespace EventCheckin.Api.Models.Events
{
    public class EventMemberModel
    {
        public long Id { get; set; }
        public long UserId { get; set; }
        public long EventId { get; set; }
        public int GuestNo { get; set; }
        public int ParkNo { get; set; }
        public long? ParentUserId { get; set; }
        public bool IsPublished { get; set; }
        public int AddedGuestNo { get; set; }
        public int AddedParkNo { get; set; }
        public int PendingGuestNo { get; set; }
        public int PendingParkNo { get; set; }
        public UserModel User { get; set; }

        
    }
}
