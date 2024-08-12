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
    public class EventMember : IEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }
        public long UserId { get; set; }
        public long EventId { get; set; }
        public int GuestNo { get; set; }
        public int ParkNo { get; set; }
        public long? ParentUserId { get; set; }
        public bool IsPublished { get; set; }
        public int AddedGuestNo { get; set; }
        public int AddedParkNo { get; set; }
        public DateTime? CreatedOnUtc { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? UpdatedOnUtc { get; set; }
        public string UpdatedBy { get; set; }
        public DateTime? DeletedOnUtc { get; set; }
        public string DeletedBy { get; set; }
    }
}
