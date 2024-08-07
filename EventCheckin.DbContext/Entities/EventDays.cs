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
    public class EventDay : IEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public int EventId { get; set; }

        public string EventDayName { get; set; }
        
        public DateTime? StartDate { get; set; }
        
        public DateTime? EndDate { get; set; }

        public int CreatedBy { get; set; }

        public DateTime CreatedDateUtc { get; set; }

        public int UpdatedBy { get; set; }

        public DateTime UpdateDateUtc { get; set; }

        public int DeletedBy { get; set; }

        public DateTime DeletedDateUtc { get; set; }

    }
}
