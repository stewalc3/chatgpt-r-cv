using Chat_GPT_Resume_CV_Generator_Web.UserInfoData;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Chat_GPT_Resume_CV_Generator_Web.Controllers
{
   [Route("[controller]")]
    [ApiController]
    public class UserInfoController : ControllerBase
    {
        [HttpPost]
        public IActionResult Post([FromBody] Model data)
        {
            
            Console.WriteLine("yes!");
            Console.WriteLine(data.dynamicData);
            // Process the JSON data here
            return new JsonResult("{result:\"hello\"}");
        }
        public class Model
        {
            public string dynamicData { get; set; }
            public override string ToString()
            {
                return dynamicData;
            }
        }
    }
}
