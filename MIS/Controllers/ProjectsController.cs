using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MIS.Controllers
{
    [RoutePrefix("api/Projects")]
    public class ProjectsController : ApiController
    {
        // GET: api/Projects
        [Route("GetAll")]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Projects/5
        public string Get(int id)
        {
            return "value";
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
