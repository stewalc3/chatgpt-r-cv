using Chat_GPT_Resume_CV_Generator_Web.Prompt;

namespace Chat_GPT_Resume_CV_Generator_Web.Prompt
{
	public class UserInformation
	{
		public Dictionary<string, string> ContactInfo { get; set; } = new Dictionary<string, string>();
		// Examples would be { "Name", "Carson Simms" },
		//                   { "Email", "simmscj@mail.uc.edu" }, etc.
		public string Objective { get; set; }
		public List<string> Education { get; set; } = new List<string>();
		public List<string> Experience { get; set; } = new List<string>();
		public List<string> Skills { get; set; } = new List<string>();
        public List<string> Certificates { get; set; } = new List<string>();
        public List<string> References { get; set; } = new List<string>();
		// These fields are totally up for change. Waiting on UI to have more correct fields.
    }

};





// After the controllers are setup, we can use something like this to controll values:

/*

var userInfo = new UserInformation
{
	BasicInfo = new Dictionary<string, string>
	{
		{ "name", formInput["name"] }
    },
	Objective = formInput["objective"],
	Education = formInput["education"].ToList(),
};

*/