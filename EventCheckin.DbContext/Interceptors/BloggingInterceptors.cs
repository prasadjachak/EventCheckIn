using Microsoft.EntityFrameworkCore.Diagnostics;
using System.Collections.Generic;

namespace EventCheckin.DbContext.Interceptors
{
    internal static class EventEntitygingInterceptors
    {
        public static IEnumerable<IInterceptor> CreateInterceptors()
        {
            List<IInterceptor> interceptors = new()
            {
                new LoggingInterceptor()
            };

            return interceptors.ToArray();
        }
    }
}
