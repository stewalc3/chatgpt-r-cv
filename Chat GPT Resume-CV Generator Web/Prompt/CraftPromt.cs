namespace Chat_GPT_Resume_CV_Generator_Web.Prompt
{
	public class CraftPromt
	{
		public string CraftPrompt(UserInformation userInfo, string promptStart)
		{
			promptStart += $"Contact Info: {string.Join(", ", userInfo.ContactInfo.Values)}\n";
			promptStart += $"Objective: {userInfo.Objective}\n";
			promptStart += $"Education: {string.Join("; ", userInfo.Education)}\n";
			promptStart += $"Experience: {string.Join("; ", userInfo.Experience)}\n";
			promptStart += $"Skills: {string.Join("; ", userInfo.Skills)}\n";
			promptStart += $"Certificates: {string.Join("; ", userInfo.Certificates)}\n";
			promptStart += $"References: {string.Join("; ", userInfo.References)}\n";

			return promptStart;
		}

		/*
		 
		This function can be used to generate both resume and cover letter prompts. It is expected to be called using the 
		constents: resumePrompt and coverLetterPrompt located in PromptConstents.cs. (These prompts are placeholders until we 
		create a better base prompt) 

		 */
	}
}
