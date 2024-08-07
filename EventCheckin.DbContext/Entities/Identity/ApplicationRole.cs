using Microsoft.AspNetCore.Identity;
using EventCheckin.Infrastructure.DbUtility;

namespace EventCheckin.DbContext.Entities.Identity
{
    public class ApplicationRole : IdentityRole<long>, IEntity
    {
        public ApplicationRole() { }
        public ApplicationRole(string name) { Name = name; }

        public int Id {get; set;}
    }
}
