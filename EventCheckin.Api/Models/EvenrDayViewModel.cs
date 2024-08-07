using System.ComponentModel.DataAnnotations;

namespace EventCheckin.Api.Models
{
    public class EvenrDayViewModel
    {
        public int Id { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public string Content { get; set; }
        [Required]
        public int EventId { get; set; }
    }
}
