﻿using System;
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
        public int Id { get; set; }
        
        public int EventDayId { get; set; }

        public string TicketNo { get; set; }

        public int AllowedGuest { get; set; }

        public int AllowedParkingCount { get; set; }

        public int UserId { get; set; }

        public int AssignedBy { get; set; }

        public DateTime AssignedDateUtc { get; set; }

        public int CreatedBy { get; set; }

        public DateTime CreatedDateUtc { get; set; }

        public int UpdatedBy { get; set; }

        public DateTime UpdateDateUtc { get; set; }

        public int DeletedBy { get; set; }

        public DateTime DeletedDateUtc { get; set; }


    }
}
