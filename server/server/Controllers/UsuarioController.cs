using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using server.Models;

namespace server.Controllers
{
  public class usuarioController : ApiController
  {
    private FoodMapContext db = new FoodMapContext();

    // GET api/Usuario
    public IEnumerable<Usuario> GetUsuarios()
    {
      return db.Usuarios.AsEnumerable();
    }

    // GET api/Usuario/5
    public Usuario GetUsuario(int id)
    {
      Usuario usuario = db.Usuarios.Find(id);
      if (usuario == null)
      {
        throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound));
      }

      return usuario;
    }

    // PUT api/Usuario/5
    public HttpResponseMessage PutUsuario(int id, Usuario usuario)
    {
      if (!ModelState.IsValid)
      {
        return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
      }

      if (id != usuario.matricula)
      {
        return Request.CreateResponse(HttpStatusCode.BadRequest);
      }

      db.Entry(usuario).State = EntityState.Modified;

      try
      {
        db.SaveChanges();
      }
      catch (DbUpdateConcurrencyException ex)
      {
        return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex);
      }

      return Request.CreateResponse(HttpStatusCode.OK);
    }

    // POST api/Usuario
    public HttpResponseMessage PostUsuario(Usuario usuario)
    {
      try
      {
        if (ModelState.IsValid)
        {
          db.Usuarios.Add(usuario);
          db.SaveChanges();

          HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created, usuario);
          response.Headers.Location = new Uri(Url.Link("DefaultApi", new { id = usuario.matricula }));
          return response;
        }
        else
        {
          return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
        }
      }
      catch (Exception ex)
      {
        throw ex;
      }
    }

    // DELETE api/Usuario/5
    public HttpResponseMessage DeleteUsuario(int id)
    {
      Usuario usuario = db.Usuarios.Find(id);
      if (usuario == null)
      {
        return Request.CreateResponse(HttpStatusCode.NotFound);
      }

      db.Usuarios.Remove(usuario);

      try
      {
        db.SaveChanges();
      }
      catch (DbUpdateConcurrencyException ex)
      {
        return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex);
      }

      return Request.CreateResponse(HttpStatusCode.OK, usuario);
    }

    protected override void Dispose(bool disposing)
    {
      db.Dispose();
      base.Dispose(disposing);
    }
  }
}


