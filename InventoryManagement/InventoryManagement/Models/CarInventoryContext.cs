using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InventoryManagement.Models
{
    public partial class CarInventoryContext : DbContext
    {
        public CarInventoryContext(DbContextOptions<CarInventoryContext> options)
            : base(options) { }
        public DbSet<Car> Car { get; set; }
        public DbSet<Login> Login { get; set; }
    }
}
