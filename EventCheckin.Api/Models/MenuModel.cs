using Newtonsoft.Json;

namespace EventCheckin.Api.Models
{
    public class MenuModel
    {
        [JsonProperty("route")]
        public string Route { get; set; }

        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("type")]
        public string Type { get; set; }

        [JsonProperty("icon")]
        public string Icon { get; set; }

    }
}
