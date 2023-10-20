import TextField from '@mui/material/TextField';
function getParam(param){
    var p=decodeURIComponent(new URL(window.location.href).searchParams.get(param))
    return p==="null"? "":p;
}

export default function Create(){
    let company = getParam("Company");
    let title = getParam("Title");
    let description = getParam("Description");

    return (<div className='container'>
        <form>
        <h4>Job Info</h4>
        <div className='row'>
            <div className='col'>
                <TextField label="Company" variant="outlined" fullWidth defaultValue={company}/>
            </div>
            <div className='col'>
                <TextField label="Job Title" variant="outlined" fullWidth defaultValue={title}/>
            </div>
        </div>
        
       <div className='row'>
            <div className='col'>
                <TextField label="Job Description" multiline maxRows={11} fullWidth defaultValue={description}/>
            </div>        
       </div>
       <div className='row'>
            <div className='col'>
            <button className='btn btn-primary' type='submit'>Generate Cover Letter</button>
            </div>
        </div>
        </form>
    </div>);
}