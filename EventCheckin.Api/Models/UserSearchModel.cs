using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace EventCheckin.Api.Models
{
    /// <summary>
    /// Represents a user search model
    /// </summary>
    public partial record UserSearchModel
    {
        #region Ctor

        public UserSearchModel()
        {
            SelectedRoleIds = new List<long>();
            AvailableUserRoles = new List<SelectListItem>();
        }

        #endregion

        #region Properties

        public IList<long> SelectedRoleIds { get; set; }

        public IList<SelectListItem> AvailableUserRoles { get; set; }

        public string SearchEmail { get; set; }
        
        public string SearchRolename { get; set; }
        
        public string SearchUsername { get; set; }

        public bool UsernamesEnabled { get; set; }

        public string SearchFirstName { get; set; }
        public bool FirstNameEnabled { get; set; }

        public string SearchLastName { get; set; }


        [DataType(DataType.PhoneNumber)]
        public string SearchPhone { get; set; }

        const int maxPageSize = 50;
        public int PageNumber { get; set; } = 1;
        private int _pageSize = 10;
        public int PageSize
        {
            get
            {
                return _pageSize;
            }
            set
            {
                _pageSize = (value > maxPageSize) ? maxPageSize : value;
            }
        }

        public string access_token { get; set; }

        public string token_type { get; set; }

        public decimal? expires_in { get; set; }

        public decimal? exp { get; set; }

        public string refresh_token { get; set; }

        #endregion
    }
}