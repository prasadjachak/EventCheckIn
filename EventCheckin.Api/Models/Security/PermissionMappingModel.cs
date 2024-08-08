using System.Collections.Generic;

namespace EventCheckin.Api.Models.Security
{
    /// <summary>
    /// Represents a permission mapping model
    /// </summary>
    public partial record PermissionMappingModel  
    {
        #region Ctor

        public PermissionMappingModel()
        {
            AvailablePermissions = new List<FeatureModel>();
            AvailableUserRoles = new List<RoleModel>();
            Allowed = new Dictionary<string, IDictionary<int, bool>>();
        }

        #endregion

        #region Properties

        public IList<FeatureModel> AvailablePermissions { get; set; }

        public IList<RoleModel> AvailableUserRoles { get; set; }

        //[permission system name] / [user role id] / [allowed]
        public IDictionary<string, IDictionary<int, bool>> Allowed { get; set; }

        #endregion
    }
}