import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import "./UserInfo.css";
import EditableList from './Editable List/EditableList';
import DetailedList from './DetailedList/DetailedList';
import { createRef } from 'react';

class UserInfo extends Component {
    constructor(props) {
        super(props);
        
        console.log("userinfo",this);
        this.SkillsRef=createRef();
        this.AwardsHonorsRef=createRef();
        this.ExtracurricularActivitiesRef=createRef();
        this.PublicationsRef=createRef();
        this.CertificationsLicencesRef=createRef();

        this.EducationRef=createRef();
        this.ReferencesRef=createRef();
        this.WorkExperienceRef=createRef();
    }
    setData(data){
        
    }
    getData(){
        let ret = {};
    ["name", "phone", "email", "street", "city", "state", "zip", "about_me"].forEach(e => {
        const element = document.getElementById(e + "Input");
        if (element) {
            ret[e] = element.value;
        }
    });
        
    [
        ["skills",this.SkillsRef],
        ["awards_honors",this.AwardsHonorsRef],
        ["extracurricular_activities",this.ExtracurricularActivitiesRef],
        ["publications",this.PublicationsRef],
        ["certifications_licences",this.CertificationsLicencesRef],
        ["education",this.EducationRef],
        ["references",this.ReferencesRef],
        ["work_experience",this.WorkExperienceRef]
    ].forEach(e=>{
        console.log(e[1]);
        ret[e[0]]=e[1].current.getData();
    });

    return ret;
    }
    render() {
        return (
            <div className='container'>
                <p>To do:</p>
                <ul>
                    <li>Add max items for lists</li>
                    <li>Add max string lengths</li>
                    <li>add detailed list limits</li>
                    <li>Icons?</li>
                </ul>
                <h4>General</h4>
                <div className='row'>
                    <div className='col'>
                        <TextField id="nameInput" label="Name" variant="outlined" fullWidth/>
                    </div>
                    <div className='col'>
                        <TextField id="phoneInput" label="Phone" variant="outlined" fullWidth />
                    </div>
                    <div className='col'>
                        <TextField id="emailInput" label="Email" variant="outlined" fullWidth />
                    </div>
                </div>
                <h4>Address</h4>
                <div className='row'>
                    <div className='col'>
                        <TextField id="streetInput" label="Street" variant="outlined" fullWidth />
                    </div>
                    <div className='col'>
                        <TextField id="cityInput" label="City" variant="outlined" fullWidth />
                    </div>
                    <div className='col'>
                        <TextField id="stateInput" label="State" variant="outlined" fullWidth />
                    </div>
                    <div className='col'>
                        <TextField id="zipInput" label="Zip" variant="outlined" fullWidth />
                    </div>
                </div>
                <h4>About Me</h4>
                <div className='row'>
                    <div className='col'>
                        <TextField id="about_meInput" label="General Info About Me" fullWidth variant='outlined' maxRows={5} minRows={3} multiline />
                    </div>
                </div>
                <div className='row lists'>
                <div className='col'>
                        <EditableList title="Skills" items={["C#", "Java"]} ref={this.SkillsRef}/>
                    </div>
                    <div className='col'>
                        <EditableList title="Awards / Honors" ref={this.AwardsHonorsRef} />
                    </div>
                    <div className='col'>
                        <EditableList title="Extracurricular Activities" ref={this.ExtracurricularActivitiesRef} />
                    </div>
                    <div className='col'>
                        <EditableList title="Publications" ref={this.PublicationsRef} />
                    </div>
                    <div className='col'>
                        <EditableList title="Certifications / Licences" ref={this.CertificationsLicencesRef} />
                    </div>
                    <div className='col'>
                        <DetailedList title="Education" fields={["School", "Gpa", "Degree", "Start Date", "End Date"]} ref={this.EducationRef}/>
                    </div>
                    <div className='col'>
                        <DetailedList title="References" fields={["Name", "Title", "Email", "Phone", "Relationship"]} ref={this.ReferencesRef}/>
                    </div>
                    <div className='col'>
                        <DetailedList title="Work Experience" fields={["Job Title", "Company Name","Address", "Start Date","End Date", "Responsibilities"]}  ref={this.WorkExperienceRef}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserInfo;
