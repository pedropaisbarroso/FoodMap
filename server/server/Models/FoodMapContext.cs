using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace server.Models
{
    public class FoodMapContext : DbContext
    {
      public FoodMapContext() : base("name=FoodMapContext")
      {
      }
      public DbSet<Usuario> Usuarios { get; set; }
    }   
}
