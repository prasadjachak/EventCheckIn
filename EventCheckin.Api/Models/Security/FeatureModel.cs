
namespace EventCheckin.Api.Models.Security
{
    /// <summary>
    /// Represents a permission record model
    /// </summary>
    public partial record FeatureModel 
    {
        #region Properties

        public string Name { get; set; }

        public string SystemName { get; set; }

        #endregion
    }
}