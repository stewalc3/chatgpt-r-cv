namespace Chat_GPT_Resume_CV_Generator_Web.UserInfoData
{
    public class Education
    {
        public string school { get; set; }
        public string gpa { get; set; }
        public string degree { get; set; }
        public string start_date { get; set; }
        public string end_date { get; set; }
    }

    public class Reference
    {
        public string name { get; set; }
        public string title { get; set; }
        public string email { get; set; }
        public string phone { get; set; }
        public string relationship { get; set; }
    }

    public class WorkExperience
    {
        public string job_title { get; set; }
        public string company_name { get; set; }
        public string address { get; set; }
        public string start_date { get; set; }
        public string end_date { get; set; }
        public string responsibilities { get; set; }
    }

    public class Project
    {
        public string name { get; set; }
        public string description { get; set; }
        public string link { get; set; }
        public string start_date { get; set; }
        public string end_date { get; set; }
    }

    public class UserInfo
    {
        public string name { get; set; }
        public string phone { get; set; }
        public string email { get; set; }
        public string street { get; set; }
        public string city { get; set; }
        public string state { get; set; }
        public string zip { get; set; }
        public string about_me { get; set; }
        public List<string> skills { get; set; }
        public List<string> awards_honors { get; set; }
        public List<string> extracurricular_activities { get; set; }
        public List<string> publications { get; set; }
        public List<string> certifications_licences { get; set; }
        public List<Education> education { get; set; }
        public List<Reference> references { get; set; }
        public List<WorkExperience> work_experience { get; set; }
        public List<Project> projects { get; set; }
    }

}
