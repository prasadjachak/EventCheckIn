using System.Collections.Generic;

namespace EventCheckin.Api.Models
{
    public class TreeMenuModel
    {
        public TreeMenuModel() 
        {
            Children = new List<MenuModel>();
        }

        public string Name { get; set; }

        public string Icon { get; set; }

        public string Route { get; set; }

        public string Type { get; set; }

        public List<MenuModel> Children { get; set; }
    }


    public class TreeMenuResponseModel
    {
        public List<TreeMenuModel> Menu { get; set; }
    }
}
