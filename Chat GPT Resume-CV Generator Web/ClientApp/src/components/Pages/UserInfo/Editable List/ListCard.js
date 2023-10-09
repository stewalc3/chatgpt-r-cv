import React, { useState,useEffect } from 'react';
import Card from '@mui/material/Card';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import "./ListCard.css";

export default function ListCard(props) {
    const [text, setText] = useState('');

    useEffect(() => {
        // Update the text state when props.value changes
        if (props.value != null) {
            setText(props.value);
        }
    }, [props.value]);

    return (
        <Card sx={{margin:"7px"}} className='list-item'>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <p style={{ margin: "auto 5px", lineHeight: 2 }}>{text}</p>
                    </div>

                    <div className='col-auto'>
                        <IconButton aria-label="delete" className='delete-icon' onClick={props.onDelete}>
                            <DeleteIcon />
                        </IconButton>
                    </div>
                </div>
            </div>
        </Card>
    );
}
