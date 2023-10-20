using Chat_GPT_Resume_CV_Generator_Web.UserInfoData;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Chat_GPT_Resume_CV_Generator_Web.Controllers
{
    [Route("/UserInfo")]
    [ApiController]
    public class UserInfoController : ControllerBase
    {
        [HttpPost]
        [Route("/UserInfo")]
        public IActionResult Post([FromBody] UserInfo data)
        {
            Console.WriteLine(data.name);
            // Process the JSON data here
            return Ok();
        }
        [HttpPost]
        public IActionResult Post([FromBody] Test data)
        {
            
            Console.WriteLine("yes!");
            Console.WriteLine(data.name);
            // Process the JSON data here
            return new JsonResult("{result:\"hello\"}");
        }
        public class Test
        {
            public string? name { get; set; }
        }
    }
}
