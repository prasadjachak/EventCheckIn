﻿// <auto-generated />
using System;
using EventCheckin.DbContext.Infrastructure;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace EventCheckin.DbContext.Migrations
{
    [DbContext(typeof(Net7BoilerplateContext))]
    [Migration("20240808164541_migration3")]
    partial class migration3
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.32")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1, 1);

            modelBuilder.HasSequence("LoggingSeq")
                .StartsAt(2000000L)
                .HasMin(2000000L);

            modelBuilder.Entity("EventCheckin.DbContext.Entities.EventDay", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1, 1);

                    b.Property<int>("CreatedBy")
                        .HasColumnType("int");

                    b.Property<DateTime>("CreatedDateUtc")
                        .HasColumnType("datetime2");

                    b.Property<int>("DeletedBy")
                        .HasColumnType("int");

                    b.Property<DateTime>("DeletedDateUtc")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("EndDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("EventDayName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("EventId")
                        .HasColumnType("int");

                    b.Property<DateTime?>("StartDate")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("UpdateDateUtc")
                        .HasColumnType("datetime2");

                    b.Property<int>("UpdatedBy")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("EventDays");
                });

            modelBuilder.Entity("EventCheckin.DbContext.Entities.EventEntity", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1, 1);

                    b.Property<string>("CreatedBy")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("CreatedOnUtc")
                        .HasColumnType("datetime2");

                    b.Property<string>("DeletedBy")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("DeletedOnUtc")
                        .HasColumnType("datetime2");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("EndDate")
                        .HasColumnType("datetime2");

                    b.Property<bool>("IsLive")
                        .HasColumnType("bit");

                    b.Property<bool>("IsPublished")
                        .HasColumnType("bit");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("OrganiserId")
                        .HasColumnType("int");

                    b.Property<DateTime?>("StartDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("UpdatedBy")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("UpdatedOnUtc")
                        .HasColumnType("datetime2");

                    b.Property<string>("VenueAddress1")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("VenueAddress2")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("VenueCity")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("VenueCountry")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("VenueLatlong")
                        .HasColumnType("int");

                    b.Property<int>("VenueLattitude")
                        .HasColumnType("int");

                    b.Property<string>("VenueName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("VenuePincode")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("VenueState")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Events");
                });

            modelBuilder.Entity("EventCheckin.DbContext.Entities.Feature", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1, 1);

                    b.Property<string>("Category")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Code")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CreatedBy")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("CreatedOnUtc")
                        .HasColumnType("datetime2");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("FeatureId")
                        .HasColumnType("int");

                    b.Property<string>("Icon")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Image")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("IsPaid")
                        .HasColumnType("bit");

                    b.Property<string>("Link")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("ParentId")
                        .HasColumnType("int");

                    b.Property<string>("Status")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("SystemName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UpdatedBy")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("UpdatedOnUtc")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.HasIndex("FeatureId");

                    b.ToTable("Features");
                });

            modelBuilder.Entity("EventCheckin.DbContext.Entities.Identity.ApplicationRole", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<long>("Id"), 1, 1);

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasDatabaseName("RoleNameIndex")
                        .HasFilter("[NormalizedName] IS NOT NULL");

                    b.ToTable("Roles", (string)null);
                });

            modelBuilder.Entity("EventCheckin.DbContext.Entities.Identity.ApplicationRoleClaim", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1, 1);

                    b.Property<string>("ClaimType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("nvarchar(max)");

                    b.Property<long>("RoleId")
                        .HasColumnType("bigint");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("RoleClaims", (string)null);
                });

            modelBuilder.Entity("EventCheckin.DbContext.Entities.Identity.ApplicationUser", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<long>("Id"), 1, 1);

                    b.Property<int>("AccessFailedCount")
                        .HasColumnType("int");

                    b.Property<DateTime>("BirthDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DeviceId")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<bool>("EmailConfirmed")
                        .HasColumnType("bit");

                    b.Property<string>("FirstName")
                        .HasColumnType("VARCHAR(250)");

                    b.Property<string>("LastName")
                        .HasColumnType("VARCHAR(250)");

                    b.Property<bool>("LockoutEnabled")
                        .HasColumnType("bit");

                    b.Property<DateTimeOffset?>("LockoutEnd")
                        .HasColumnType("datetimeoffset");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("OTP")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PasswordHash")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("PhoneNumberConfirmed")
                        .HasColumnType("bit");

                    b.Property<string>("SecurityStamp")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Title")
                        .HasColumnType("VARCHAR(100)");

                    b.Property<bool>("TwoFactorEnabled")
                        .HasColumnType("bit");

                    b.Property<string>("UserName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasDatabaseName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasDatabaseName("UserNameIndex")
                        .HasFilter("[NormalizedUserName] IS NOT NULL");

                    b.ToTable("Users", (string)null);
                });

            modelBuilder.Entity("EventCheckin.DbContext.Entities.Identity.ApplicationUserClaim", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1, 1);

                    b.Property<string>("ClaimType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("nvarchar(max)");

                    b.Property<long>("UserId")
                        .HasColumnType("bigint");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("UserClaims", (string)null);
                });

            modelBuilder.Entity("EventCheckin.DbContext.Entities.Identity.ApplicationUserLogin", b =>
                {
                    b.Property<string>("LoginProvider")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ProviderKey")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ProviderDisplayName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<long>("UserId")
                        .HasColumnType("bigint");

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("UserLogins", (string)null);
                });

            modelBuilder.Entity("EventCheckin.DbContext.Entities.Identity.ApplicationUserRole", b =>
                {
                    b.Property<long>("UserId")
                        .HasColumnType("bigint");

                    b.Property<long>("RoleId")
                        .HasColumnType("bigint");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("UserRoles", (string)null);
                });

            modelBuilder.Entity("EventCheckin.DbContext.Entities.Identity.ApplicationUserToken", b =>
                {
                    b.Property<long>("UserId")
                        .HasColumnType("bigint");

                    b.Property<string>("LoginProvider")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Value")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("UserTokens", (string)null);
                });

            modelBuilder.Entity("EventCheckin.DbContext.Entities.Logging", b =>
                {
                    b.Property<int>("Id")
                        .HasColumnType("int")
                        .HasColumnName("Id");

                    b.Property<DateTime>("LogDatum")
                        .HasColumnType("datetime2");

                    b.Property<string>("LogText")
                        .HasMaxLength(500)
                        .HasColumnType("VARCHAR(500)");

                    b.Property<int>("LogType")
                        .HasColumnType("int");

                    b.Property<string>("LogValue")
                        .IsRequired()
                        .HasMaxLength(500)
                        .HasColumnType("VARCHAR(500)");

                    b.Property<long>("UserId")
                        .HasColumnType("bigint");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Logging");
                });

            modelBuilder.Entity("EventCheckin.DbContext.Entities.RolePermission", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1, 1);

                    b.Property<string>("CreatedBy")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("CreatedOnUtc")
                        .HasColumnType("datetime2");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool?>("Enabled")
                        .HasColumnType("bit");

                    b.Property<int>("FeatureId")
                        .HasColumnType("int");

                    b.Property<string>("Permission")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("RoleId")
                        .HasColumnType("int");

                    b.Property<long>("RoleId1")
                        .HasColumnType("bigint");

                    b.Property<int>("TenantId")
                        .HasColumnType("int");

                    b.Property<string>("UpdatedBy")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("UpdatedOnUtc")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.HasIndex("FeatureId");

                    b.HasIndex("RoleId1");

                    b.ToTable("RolePermissions");
                });

            modelBuilder.Entity("EventCheckin.DbContext.Entities.TicketPass", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1, 1);

                    b.Property<int>("AllowedGuest")
                        .HasColumnType("int");

                    b.Property<int>("AllowedParkingCount")
                        .HasColumnType("int");

                    b.Property<int>("AssignedBy")
                        .HasColumnType("int");

                    b.Property<DateTime>("AssignedDateUtc")
                        .HasColumnType("datetime2");

                    b.Property<int>("CreatedBy")
                        .HasColumnType("int");

                    b.Property<DateTime>("CreatedDateUtc")
                        .HasColumnType("datetime2");

                    b.Property<int>("DeletedBy")
                        .HasColumnType("int");

                    b.Property<DateTime>("DeletedDateUtc")
                        .HasColumnType("datetime2");

                    b.Property<int>("EventDayId")
                        .HasColumnType("int");

                    b.Property<string>("TicketNo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("UpdateDateUtc")
                        .HasColumnType("datetime2");

                    b.Property<int>("UpdatedBy")
                        .HasColumnType("int");

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("TicketPasses");
                });

            modelBuilder.Entity("EventCheckin.DbContext.Entities.Feature", b =>
                {
                    b.HasOne("EventCheckin.DbContext.Entities.Feature", null)
                        .WithMany("Children")
                        .HasForeignKey("FeatureId");
                });

            modelBuilder.Entity("EventCheckin.DbContext.Entities.Identity.ApplicationRoleClaim", b =>
                {
                    b.HasOne("EventCheckin.DbContext.Entities.Identity.ApplicationRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("EventCheckin.DbContext.Entities.Identity.ApplicationUserClaim", b =>
                {
                    b.HasOne("EventCheckin.DbContext.Entities.Identity.ApplicationUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("EventCheckin.DbContext.Entities.Identity.ApplicationUserLogin", b =>
                {
                    b.HasOne("EventCheckin.DbContext.Entities.Identity.ApplicationUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("EventCheckin.DbContext.Entities.Identity.ApplicationUserRole", b =>
                {
                    b.HasOne("EventCheckin.DbContext.Entities.Identity.ApplicationRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("EventCheckin.DbContext.Entities.Identity.ApplicationUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("EventCheckin.DbContext.Entities.Identity.ApplicationUserToken", b =>
                {
                    b.HasOne("EventCheckin.DbContext.Entities.Identity.ApplicationUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("EventCheckin.DbContext.Entities.Logging", b =>
                {
                    b.HasOne("EventCheckin.DbContext.Entities.Identity.ApplicationUser", "UserNavigation")
                        .WithMany("Loggings")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("UserNavigation");
                });

            modelBuilder.Entity("EventCheckin.DbContext.Entities.RolePermission", b =>
                {
                    b.HasOne("EventCheckin.DbContext.Entities.Feature", "Feature")
                        .WithMany()
                        .HasForeignKey("FeatureId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("EventCheckin.DbContext.Entities.Identity.ApplicationRole", "Role")
                        .WithMany()
                        .HasForeignKey("RoleId1")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Feature");

                    b.Navigation("Role");
                });

            modelBuilder.Entity("EventCheckin.DbContext.Entities.Feature", b =>
                {
                    b.Navigation("Children");
                });

            modelBuilder.Entity("EventCheckin.DbContext.Entities.Identity.ApplicationUser", b =>
                {
                    b.Navigation("Loggings");
                });
#pragma warning restore 612, 618
        }
    }
}
