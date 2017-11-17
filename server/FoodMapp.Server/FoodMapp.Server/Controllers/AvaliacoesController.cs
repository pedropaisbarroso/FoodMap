using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using FoodMap.Server;


namespace FoodMapp.Server.Controllers
{
    public class AvaliacoesController : ApiController
    {
        private AedsUfmgPedroBarrosoEntities db = new AedsUfmgPedroBarrosoEntities();

        // GET: api/Avaliacoes
        public IQueryable<Avaliaco> GetAvaliacoes()
        {
            return db.Avaliacoes;
        }

        // GET: api/Avaliacoes/5
        [ResponseType(typeof(Avaliaco))]
        public IHttpActionResult GetAvaliaco(int id)
        {
            Avaliaco avaliaco = db.Avaliacoes.Find(id);
            if (avaliaco == null)
            {
                return NotFound();
            }

            return Ok(avaliaco);
        }

        // PUT: api/Avaliacoes/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutAvaliaco(int id, Avaliaco avaliaco)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != avaliaco.id)
            {
                return BadRequest();
            }

            db.Entry(avaliaco).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AvaliacoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Avaliacoes
        [ResponseType(typeof(Avaliaco))]
        public IHttpActionResult PostAvaliaco(Avaliaco avaliaco)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Avaliacoes.Add(avaliaco);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = avaliaco.id }, avaliaco);
        }

        // DELETE: api/Avaliacoes/5
        [ResponseType(typeof(Avaliaco))]
        public IHttpActionResult DeleteAvaliaco(int id)
        {
            Avaliaco avaliaco = db.Avaliacoes.Find(id);
            if (avaliaco == null)
            {
                return NotFound();
            }

            db.Avaliacoes.Remove(avaliaco);
            db.SaveChanges();

            return Ok(avaliaco);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool AvaliacoExists(int id)
        {
            return db.Avaliacoes.Count(e => e.id == id) > 0;
        }
    }
}
