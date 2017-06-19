namespace WebAPIEmployeeSystem.Migrations
{
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using WebAPIEmployeeSystem.Models;

    internal sealed class Configuration : DbMigrationsConfiguration<WebAPIEmployeeSystem.DAL.EmployeeDetailContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
            ContextKey = "WebAPIEmployeeSystem.DAL.EmployeeDetailContext";
        }

        protected override void Seed(WebAPIEmployeeSystem.DAL.EmployeeDetailContext context)
        {
            var employees = new List<Employee>
            {
                new Employee{Name="Jiyan",JoinDate=DateTime.Parse("2010-03-10"),Department="Administrator",Age=30, Photo="logo.png"},
                new Employee{Name="Rushil",JoinDate=DateTime.Parse("2015-04-03"),Department="Testing",Age=20, Photo=""},
                new Employee{Name="Kavya",JoinDate=DateTime.Parse("2012-05-06"),Department="Developer",Age=22, Photo="Notebook.png"},
                new Employee{Name="Tanaya",JoinDate=DateTime.Parse("2013-09-18"),Department="Developer",Age=23, Photo="GraduationCap.png"},
                new Employee{Name="Monali",JoinDate=DateTime.Parse("2014-01-07"),Department="Advocate",Age=23, Photo=""}
            };

            employees.ForEach(s => context.Employees.AddOrUpdate(p => p.Name, s));
            context.SaveChanges();
        }
    }
}
