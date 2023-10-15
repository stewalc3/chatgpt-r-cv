using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Chat_GPT_Resume_CV_Generator_Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserInfoController : ControllerBase
    {
        // GET: api/<UserInfoController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<UserInfoController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<UserInfoController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<UserInfoController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<UserInfoController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
