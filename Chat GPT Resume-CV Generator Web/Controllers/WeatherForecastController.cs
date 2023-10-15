using Google.Apis.Auth.OAuth2;
using Google.Apis.Oauth2.v2;
using Google.Apis.Services;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace Chat_GPT_Resume_CV_Generator_Web.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            foreach (var item in Request.Cookies)
            {
                if(item.Key== "googleToken")
                {  
                    string userAccessToken = item.Value;
                    Console.WriteLine(Google_Authentication.GoogleAuthenticator.GetEmailFromToken(userAccessToken));
                }
            }
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }
        [HttpPost]
        public JsonContent Google([FromBody] GoogleAuth auth)
        {
            throw new NotImplementedException();
            Console.WriteLine(auth.access_token);
            return null;
        }
        public class GoogleAuth
        {
            public string access_token { get; set; }
            public string authuser { get; set; }
            public int expires_in { get; set; }
            public string prompt { get; set; }
            public string scope { get; set; }
            public string token_type { get; set; }
        }
    }
}