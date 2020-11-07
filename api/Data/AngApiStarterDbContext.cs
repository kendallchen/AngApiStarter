using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using Data.Model;

namespace Data
{
    public class AngApiStarterDbContext : DbContext
    {
        public DbSet<Customer> Customer { get; set; }

        public AngApiStarterDbContext(DbContextOptions<AngApiStarterDbContext> options)
            : base(options)
        {
        }
    }
}
