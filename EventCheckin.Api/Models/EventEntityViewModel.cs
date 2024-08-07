using System.ComponentModel.DataAnnotations;

namespace EventCheckin.Api.Models
{
    public class EventEntityViewModel
    {
        [Required]
        public long Id { get; set; }
        [Required]
        public string Url { get; set; }
    }
}
