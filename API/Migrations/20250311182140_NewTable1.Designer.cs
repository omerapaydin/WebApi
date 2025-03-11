﻿// <auto-generated />
using API.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace API.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20250311182140_NewTable1")]
    partial class NewTable1
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "9.0.3");

            modelBuilder.Entity("API.Entity.Product", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Description")
                        .HasColumnType("TEXT");

                    b.Property<string>("ImageUrl")
                        .HasColumnType("TEXT");

                    b.Property<bool>("IsActive")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<decimal>("Price")
                        .HasColumnType("TEXT");

                    b.Property<int>("Stock")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.ToTable("Products");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Description = "Apple Watch Series",
                            ImageUrl = "1.jpg",
                            IsActive = true,
                            Name = "Apple Watch Series 1",
                            Price = 70000m,
                            Stock = 100
                        },
                        new
                        {
                            Id = 2,
                            Description = "Telefon açıklaması",
                            ImageUrl = "2.jpg",
                            IsActive = true,
                            Name = "Apple Watch Series 2",
                            Price = 80000m,
                            Stock = 100
                        },
                        new
                        {
                            Id = 3,
                            Description = "Telefon açıklaması",
                            ImageUrl = "3.jpg",
                            IsActive = false,
                            Name = "Apple Watch Series 3",
                            Price = 90000m,
                            Stock = 100
                        },
                        new
                        {
                            Id = 4,
                            Description = "Telefon açıklaması",
                            ImageUrl = "4.jpg",
                            IsActive = true,
                            Name = "Xiaomi Redmi Watch 1",
                            Price = 100000m,
                            Stock = 100
                        },
                        new
                        {
                            Id = 5,
                            Description = "Telefon açıklaması",
                            ImageUrl = "5.jpg",
                            IsActive = true,
                            Name = "Xiaomi Redmi Watch 2",
                            Price = 100000m,
                            Stock = 100
                        },
                        new
                        {
                            Id = 6,
                            Description = "Telefon açıklaması",
                            ImageUrl = "6.jpg",
                            IsActive = true,
                            Name = "Xiaomi Redmi Watch 3",
                            Price = 100000m,
                            Stock = 100
                        },
                        new
                        {
                            Id = 7,
                            Description = "Telefon açıklaması",
                            ImageUrl = "7.jpg",
                            IsActive = true,
                            Name = "Xiaomi Redmi Watch 4",
                            Price = 100000m,
                            Stock = 100
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
