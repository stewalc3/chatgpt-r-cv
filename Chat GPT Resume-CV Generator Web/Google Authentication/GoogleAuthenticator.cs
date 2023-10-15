using Google.Apis.Auth.OAuth2;
using Google.Apis.Oauth2.v2;
using Google.Apis.Services;

namespace Chat_GPT_Resume_CV_Generator_Web.Google_Authentication
{
    public static class GoogleAuthenticator
    {
        public static string? GetEmailFromToken(string token)
        {
            try
            {
                GoogleCredential credential = GoogleCredential.FromAccessToken(token).CreateScoped("https://www.googleapis.com/auth/userinfo.email");

                var oauth2Service = new Oauth2Service(new BaseClientService.Initializer
                {
                    HttpClientInitializer = credential
                });

                var userInfo = oauth2Service.Userinfo.Get().Execute();

                return userInfo.Email;
            }
            catch
            {
                return null;
            }
        }
    }
}
