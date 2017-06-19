using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Web;
using WebAPIEmployeeSystem.Models;

namespace WebAPIEmployeeSystem.DAL
{
    public class EmployeeDetailContext : DbContext
    {
        public EmployeeDetailContext() : base("EmployeeDetailContext")
        {
        }
        public DbSet<Employee> Employees { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
    }
}