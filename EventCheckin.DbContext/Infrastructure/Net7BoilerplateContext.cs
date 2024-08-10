﻿using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using EventCheckin.DbContext.Entities;
using EventCheckin.DbContext.Entities.Identity;
using EventCheckin.DbContext.Interceptors;
using EventCheckin.Infrastructure.Settings;
using System.Diagnostics;
using Microsoft.Extensions.Options;

namespace EventCheckin.DbContext.Infrastructure
{
    public partial class Net7BoilerplateContext : IdentityDbContext<ApplicationUser, ApplicationRole, long, ApplicationUserClaim, ApplicationUserRole, ApplicationUserLogin, ApplicationRoleClaim, ApplicationUserToken>
    {
        public Net7BoilerplateContext(DbContextOptions<Net7BoilerplateContext> options) : base(options)
        {
           
        }

        // This Constructor is going to be called every time to register out Context since 
        // I need to set GlobalFilter on my queries. I have taken the idea from here: https://stackoverflow.com/a/66383855/4267429
        // I had no need for new class, as I already have my AppSettings initialization
        public Net7BoilerplateContext(DbContextOptions<Net7BoilerplateContext> options, AppSettings settings) : base(options)
        {
           
            // Set global filter here
            // OrganizationType = (EOrganisationType)settings.OrganizationType;
        }


        // This method won't be used in the Api project anymore, but it is still used in CronJobs (Background Tasks)
        public static Net7BoilerplateContext Create(string connection)
        {
            var optionsBuilder = new DbContextOptionsBuilder<Net7BoilerplateContext>();
            optionsBuilder.UseSqlServer(connection);
            optionsBuilder.UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking);
            // optionsBuilder.AddInterceptors(Net7BoilerplateInterceptors.CreateInterceptors());

            // Setup our interceptors
            optionsBuilder.AddInterceptors(EventEntitygingInterceptors.CreateInterceptors());
            // Helps me with debugging stuff
            optionsBuilder.EnableDetailedErrors();
            optionsBuilder.EnableSensitiveDataLogging();
            optionsBuilder.LogTo(message => Debug.WriteLine(message)); // https://learn.microsoft.com/en-us/ef/core/logging-events-diagnostics/simple-logging

            return new Net7BoilerplateContext(optionsBuilder.Options);
        }

        public virtual DbSet<Feature> Features { get; set; }
        public virtual DbSet<RolePermission> RolePermissions { get; set; }
        public virtual DbSet<EventEntity> Events { get; set; }
        public virtual DbSet<EventMember> EventMembers { get; set; }
        public virtual DbSet<TicketPass> TicketPasses { get; set; }
        public virtual DbSet<Logging> Logging { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {

                optionsBuilder.UseSqlServer("Server=.;Database=DBGARBAPASS1;User Id=sa;Password:Sql@123;Encrypt=False;TrustServerCertificate=true;");

                // Setup our interceptors
                optionsBuilder.AddInterceptors(EventEntitygingInterceptors.CreateInterceptors());

                // Helps me with debugging stuff
                optionsBuilder.EnableDetailedErrors();
                optionsBuilder.EnableSensitiveDataLogging();
                optionsBuilder.LogTo(message => Debug.WriteLine(message)); // https://learn.microsoft.com/en-us/ef/core/logging-events-diagnostics/simple-logging
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS"); // override DB annotation if you like
            base.OnModelCreating(modelBuilder); // DO NOT - under any circumstances - REMOVE THIS LINE. This line basically calls our identity constructor first, and without it NOTHING REGARDING IDENTITY WORKS!

            #region Identity stuff
            modelBuilder.Entity<ApplicationUser>()
                .ToTable("Users");

            modelBuilder.Entity<ApplicationRole>().ToTable("Roles");
            modelBuilder.Entity<ApplicationUserRole>().ToTable("UserRoles");
            modelBuilder.Entity<ApplicationUserLogin>().ToTable("UserLogins");
            modelBuilder.Entity<ApplicationUserClaim>().ToTable("UserClaims");
            modelBuilder.Entity<ApplicationRoleClaim>().ToTable("RoleClaims");
            modelBuilder.Entity<ApplicationUserToken>().ToTable("UserTokens");
            #endregion

            modelBuilder.Entity<Logging>(entity =>
            {
                entity.Property(e => e.Id)
                    .ValueGeneratedNever()
                    .HasColumnName("Id");
            });

            #region Global filters
            // https://docs.microsoft.com/en-us/ef/core/querying/filters
            // modelBuilder.Entity<EventEntity>().HasQueryFilter(a => a.PublisherId == PublisherId);
            #endregion

            #region Sequences 
        

            // Sometimes we cannot set the sequence like we did above for the EventEntitySeq.
            // Reason can be that when scafolding our database it will mark PK of table with "ValueGeneratedNever" 
            // That's why we are going to create "LoggingInterceptor" to help us with inserting data for Logs table. 
            // Another reason for interceptor could be that we have an old system that is still being used while we rework this one. 
            // It could use some obscure logic to fetch next id for Logging record, and we have to reset Sequence before we insert anything. 
            // For more info why I needed this, read the note on top of the file "LoggingInterceptor.cs"
            modelBuilder.HasSequence<long>("LoggingSeq")
                        .StartsAt(2000000)
                        .IncrementsBy(1)
                        .HasMin(2000000);
            #endregion

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
