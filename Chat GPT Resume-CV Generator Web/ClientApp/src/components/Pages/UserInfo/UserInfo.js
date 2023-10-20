import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import "./UserInfo.css";
import EditableList from './Editable List/EditableList';
import DetailedList from './DetailedList/DetailedList';
import { createRef } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
class UserInfo extends Component {
    constructor(props) {
        super(props);
        
        console.log("userinfo",this);
        window["temp0"]=this;
        //editable lists
        this.SkillsRef=createRef();
        this.AwardsHonorsRef=createRef();
        this.ExtracurricularActivitiesRef=createRef();
        this.PublicationsRef=createRef();
        this.CertificationsLicencesRef=createRef();

        //detailed data
        this.EducationRef=createRef();
        this.ReferencesRef=createRef();
        this.WorkExperienceRef=createRef();
        this.ProjectsRef = createRef();

        this.state = {
            values:{
                name:"",
                phone:"",
                email:"",
                street:"",
                city:"",
                state:"",
                zip:"",
                about_me:"",
                skills:[],
                extracurricular_activities:[],
                publications:[],
                certifications_licences:[],
                awards_honors:[],

                education:[],
                projects:[],
                work_experience:[],
                references:[]
            },
            snackbarVisiblity:false,
            snackbarText:"Error",
            snackbarSeverity:"error"
          };

        this.snackbarRef=createRef();
    }
    showErrorMessage(message,severity){
        this.setState({
            snackbarVisiblity:true,
            snackbarText:message,
            snackbarSeverity:severity
        });
    }
    saveData=async ()=>{
        console.log("saving data");
        try {
            this.showErrorMessage("test", "error");

            // Construct your JSON data object
            var dataToSend = this.getData();
            dataToSend={
                name:"nick"
            };
            fetch('UserInfo/Post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // You may need to include authentication headers if required.
                },
                body: JSON.stringify(dataToSend), // Convert the data object to a JSON string
            })
            .then(response => response.json())
            .then(responseData => {
                // Handle the response from the server if needed
                this.showErrorMessage("yay", "success");
            })
            .catch(error => {
                console.error(error);
                this.showErrorMessage("error 2.0 " + error, "error");
                console.log(dataToSend);
                // Handle any errors that occur during the request
            });

        } catch (ex) {
            this.showErrorMessage("Unable to save data", "error");
            console.error(ex);
        }
    }
    setData(data){
        this.setState({values:data});        
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
        ["work_experience",this.WorkExperienceRef],
        ["projects",this.ProjectsRef]
    ].forEach(e=>{
       // console.log(e[1]);
        ret[e[0]]=e[1].current.getData();
    });

    return ret;
    }
    setValue = (name, value) => {
        this.setState((prevState) => ({
          values: {
            ...prevState.values,
            [name]: value,
          },
        }));
      };
    snackbarHandleClose = (event, reason) => {
        this.setState({snackbarVisiblity:false});
    }
    render() {
        return (
            <div className='container'>
                
                <Button  onClick={this.saveData}>Save</Button>
                
                <Snackbar open={this.state.snackbarVisiblity} onClose={this.snackbarHandleClose} autoHideDuration={6000} ref={this.snackbarRef} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} >
                    <Alert onClose={this.snackbarHandleClose} severity={this.state.snackbarSeverity} sx={{minWidth:"300px" }}>
                        {this.state.snackbarText}
                    </Alert>
                </Snackbar>
                <p>To do:</p>
                <ul>
                    <li>add detailed list limits</li>
                    <li>Icons?</li>
                </ul>
                <h4>General</h4>
                <div className='row'>
                    <div className='col'>
                    <TextField id="nameInput" name="name" value={this.state.values.name} label="Name" variant="outlined" fullWidth inputProps={{maxLength:50}} onInput={(e) => this.setValue(e.target.name, e.target.value)} ref={this.nameRef}/>
                    </div>
                    <div className='col'>
                    <TextField id="phoneInput" value={this.state.values.phone} name="phone" label="Phone" variant="outlined" fullWidth inputProps={{ maxLength: 15 }} onInput={(e) => this.setValue(e.target.name, e.target.value)}/>
                    </div>
                    <div className='col'>
                        <TextField id="emailInput" value={this.state.values.email} name="email" label="Email" variant="outlined" fullWidth inputProps={{ maxLength: 254 }} onInput={(e) => this.setValue(e.target.name, e.target.value)}/>
                    </div>
                    </div>
                    <h4>Address</h4>
                    <div className='row'>
                        <div className='col'>
                        <TextField id="streetInput" value={this.state.values.street} name="street" label="Street" variant="outlined" fullWidth inputProps={{ maxLength: 100 }} onInput={(e) => this.setValue(e.target.name, e.target.value)}/>
                        </div>
                        <div className='col'>
                        <TextField id="cityInput" value={this.state.values.city} name="city" label="City" variant="outlined" fullWidth inputProps={{ maxLength: 50 }} onInput={(e) => this.setValue(e.target.name, e.target.value)}/>
                        </div>
                        <div className='col'>
                        <TextField id="stateInput" value={this.state.values.state} name="state" label="State" variant="outlined" fullWidth inputProps={{ maxLength: 29 }} onInput={(e) => this.setValue(e.target.name, e.target.value)}/>
                        </div>
                        <div className='col'>
                        <TextField id="zipInput" value={this.state.values.zip} name="zip" label="Zip" variant="outlined" fullWidth inputProps={{ maxLength:  5}} onInput={(e) => this.setValue(e.target.name, e.target.value)}/>
                        </div>
                </div>
                <h4>About Me</h4>
                <div className='row'>
                    <div className='col'>
                        <TextField id="about_meInput" value={this.state.values.about_me} name="about_me" label="General Info About Me" fullWidth variant='outlined' maxRows={5} minRows={3} multiline inputProps={{ maxLength: 805 }} onInput={(e) => this.setValue(e.target.name, e.target.value)}/>
                    </div>
                </div>
                <div className='row lists'>
                    <div className='col'>
                        <EditableList title="Skills" items={this.state.values.skills} ref={this.SkillsRef} maxItems={20} maxTextLength={50}/>
                    </div>
                    
                    <div className='col'>
                        <EditableList title="Extracurricular Activities" items={this.state.values.extracurricular_activities} ref={this.ExtracurricularActivitiesRef} maxItems={5} maxTextLength={30}/>
                    </div>
                    
                    <div className='col'>
                        <DetailedList title="Education" items={this.state.values.education} fields={[{
                            "name":"School",
                            "maxLength":50
                            },{
                            "name":"Gpa",
                            "maxLength":5
                            },{
                            "name":"Degree",
                            "maxLength":50
                            },{
                            "name":"Start Date",
                            "maxLength":20
                            },{
                            "name":"End Date",
                            "maxLength":20
                            },]} ref={this.EducationRef}/>
                    </div>
                    <div className='col'>
                        <DetailedList title="References" items={this.state.values.references} fields={[
                            {
                            "name":"Name",
                            "maxLength":50
                            },{
                            "name":"Title",
                            "maxLength":50
                            },{
                            "name":"Email",
                            "maxLength":50
                            },{
                            "name":"Phone",
                            "maxLength":20
                            },{
                            "name":"Relationship",
                            "maxLength":20
                            },]} ref={this.ReferencesRef}/>
                    </div>
                    <div className='col'>
                        <DetailedList title="Work Experience" items={this.state.values.work_experience} fields={[{
                            "name":"Job Title",
                            "maxLength":50
                            },{
                            "name":"Company Name",
                            "maxLength":50
                            },{
                            "name":"Address",
                            "maxLength":100
                            },{
                            "name":"Start Date",
                            "maxLength":20
                            },{
                            "name":"End Date",
                            "maxLength":20
                            },{
                            "name":"Responsibilities",
                            "maxLength":200,
                            "multiline":true
                            },]}  ref={this.WorkExperienceRef}/>
                    </div>
                    <div className='col'>
                        <DetailedList title="Projects" maxItems={5} items={this.state.values.projects} fields={[{
                            "name":"Name",
                            "maxLength":50
                            },{
                            "name":"Description",
                            "maxLength":500,
                            multiline:true
                            },{
                            "name":"Link",
                            "maxLength":50
                            },{
                            "name":"Start Date",
                            "maxLength":20
                            },{
                            "name":"End Date",
                            "maxLength":20
                            },]} ref={this.ProjectsRef } />
                    </div>
                </div>
                <div className='row'>
                        <div className='col'>
                            <EditableList title="Publications" items={this.state.values.publications} ref={this.PublicationsRef} maxItems={5} maxTextLength={50}/>
                        </div>
                        <div className='col'>
                            <EditableList title="Certifications / Licences" items={this.state.values.certifications_licences} ref={this.CertificationsLicencesRef} maxItems={5} maxTextLength={50} />
                        </div>
                        <div className='col'>
                            <EditableList title="Awards / Honors" items={this.state.values.awards_honors} ref={this.AwardsHonorsRef} maxItems={5} maxTextLength={50}/>
                        </div>
                    </div>
            </div>
        );
    }
}

export default UserInfo;
