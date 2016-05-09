using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MIS.Controllers
{
    [RoutePrefix("api/Project")]
    public class ProjectApiController : ApiController
    {
        // GET: api/Projects
        [Route("GetAll")]
        public IEnumerable<string> Get()
        {
            return new string[] { "project 1", "project 2","project 3", "project 4" };
        }

        // GET: api/Projects/5
        [Route("Get")]
        public string Get(int id)
        {
            if (id == 2)
            {
                return "this is project 2";
            }
                
            return "random value";
        }

        // POST: api/Projects
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Projects/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Projects/5
        public void Delete(int id)
        {
        }
    }
}
