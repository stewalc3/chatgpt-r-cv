import TextField from '@mui/material/TextField';
import Education from "./Education"
import "./UserInfo.css";

import EditableList from './Editable List/EditableList';
import DetailedList from './DetailedList/DetailedList';

export default function UserInfo(){
    return (
        <div className='container'>
            <h4>General</h4>
        <div className='row'>
            <div className='col'>
            <TextField id="nameInput" label="Name" variant="outlined" fullWidth/>
            </div>
            <div className='col'>
            <TextField id="phoneInput" label="Phone" variant="outlined" fullWidth/>            
            </div>
            <div className='col'>
            <TextField id="emailInput" label="Email" variant="outlined" fullWidth/>
            </div>
        </div>
        <h4>Address</h4>
        <div className='row'>
            <div className='col'>
                <TextField id="streetInput" label="Street" variant="outlined" fullWidth />
            </div>
            <div className='col'>
                <TextField id="cityInput" label="City" variant="outlined" fullWidth/>
            </div>
            <div className='col'>
                <TextField id="stateInput" label="State" variant="outlined" fullWidth/>
            </div>
            <div className='col'>
                <TextField id="zipInput" label="Zip" variant="outlined" fullWidth/>
            </div>
        </div>
        <div className='row lists'>
            <div className='col'>
                <EditableList title="Skills" items={["C#","Java"]}/>
            </div>
            <div className='col'>
                <EditableList title="Awards / Honors"/>
            </div>
            <div className='col'>
                <EditableList title="Extracurricular Activities"/>
            </div>
            <div className='col'>
                <EditableList title="Publications"/>
            </div>
            <div className='col'>
                <EditableList title="Certifications / Licences"/>
            </div>
            <div className='col'>
                <DetailedList title="Education"/>
            </div>
        </div>
        
        </div>
        );
}