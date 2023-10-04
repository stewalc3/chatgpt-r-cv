﻿import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import Education from "./Education"
import "./UserInfo.css";
import AddIcon from '@mui/icons-material/Add';
export default function UserInfo(){
    return (
        <div>
            <Box component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' },}} noValidate autoComplete="off">
                <TextField id="nameInput" label="Name" variant="outlined" />
                <TextField id="phoneInput" label="Phone" variant="outlined"/>
                <TextField id="emailInput" label="Email" variant="outlined" />
            </Box>
            <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">
                <TextField id="streetInput" label="Street" variant="outlined" />
                <TextField id="cityInput" label="City" variant="outlined" />
                <TextField id="stateInput" label="State" variant="outlined" />
                <TextField id="zipInput" label="Zip" variant="outlined" />
            </Box>
            <div className='row edu-proj'>
                <div className='col card'>
                    
                        <AddIcon/>
                    
                </div>
                <div className='col'>

                </div>
            </div>
            <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">
                <Education/>
            </Box>
</div>
        );
}