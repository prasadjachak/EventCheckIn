using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EventCheckin.Infrastructure.DbUtility;

namespace EventCheckin.DbContext.Entities
{
    public class TicketPass : IEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }
        
        public long EventId { get; set; }

        public string TicketNo { get; set; }

        public int AllowedGuest { get; set; }

        public long UserId { get; set; }

        public string EntryOTP { get; set; }

        public DateTime? EntryOTPTime { get; set; }

        public string EntrySecurity { get; set; }

        public int EntryStatus { get; set; }

        public int AllowedParkingCount { get; set; }

        public string ParkingOTP { get; set; }

        public DateTime? ParkingOTPTime { get; set; }

        public string ParkSecurity { get; set; }

        public int ParkStatus { get; set; }

        public long AssignedBy { get; set; }

        public DateTime? AssignedDateUtc { get; set; }

        public long CreatedBy { get; set; }

        public DateTime? CreatedDateUtc { get; set; }

        public long UpdatedBy { get; set; }

        public DateTime? UpdateDateUtc { get; set; }

        public long DeletedBy { get; set; }

        public DateTime? DeletedDateUtc { get; set; }


    }
}
