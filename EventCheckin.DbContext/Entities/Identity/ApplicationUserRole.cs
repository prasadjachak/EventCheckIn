using EventCheckin.Infrastructure.DbUtility;
using Microsoft.AspNetCore.Identity;

namespace EventCheckin.DbContext.Entities.Identity
{
    public class ApplicationUserRole : IdentityUserRole<long>, IEntity
    {
        public long Id { get; set; }    
    }
}
