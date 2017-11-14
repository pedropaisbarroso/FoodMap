using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace server.Models
{
  public class Usuario
  {
    [Key]
    public Int32 matricula { get; set; }
    public String nome { get; set; }
    public String curso { get; set; }
    public String email { get; set; }
    public String senha { get; set; }
  }
}

