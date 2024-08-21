using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace EventCheckin.Api.Models
{
    /// <summary>
    /// Represents a user search model
    /// </summary>
    public partial record TicketPassSearchModel
    {
        #region Ctor

        public TicketPassSearchModel()
        {
            SelectedEventIds = new List<long>();
            AvailableEvents = new List<SelectListItem>();
        }

        #endregion

        #region Properties

        public IList<long> SelectedEventIds { get; set; }

        public IList<SelectListItem> AvailableEvents { get; set; }
         

        #endregion
    }
}