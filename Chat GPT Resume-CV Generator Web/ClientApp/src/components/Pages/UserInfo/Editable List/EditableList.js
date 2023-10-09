import { Card, IconButton, TextField, Typography } from "@mui/material";
import ListCard from "./ListCard";
import { useState,useEffect,useRef } from "react";
import { CardBody, CardHeader } from "reactstrap";
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
export default function EditableList(props){
    const textFieldRef = useRef(null);

    const [title,setTitle]=useState('Unnamed');
    
    useEffect(() => {
        if (props.title != null) {
            setTitle(props.title);
        }
    }, [props.title]);

    const [items,setItems]=useState(["hi","hi2"]);
    
    const handleDelete = (index) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
    };
    const addItemButtonClick=function(){
        inputGiven({
            target:textFieldRef.current,
            code:"Enter"
        });
    }
    const inputGiven=function(args){
        let input=args.target.value;
        if(args.code==="Enter" && input.length>0 && !items.includes(input)){
            setItems([...items,input]);
            args.target.value="";
        }
    }


    //Drop Down Menu
    const [anchorEl, setAnchorEl] = useState(null);

    const popupMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const closePopup = () => {
        setAnchorEl(null);
    };

    const handleDeleteAll = () => {
        console.log('Delete All clicked');
        setItems([]);
        closePopup();
    };

return (
    <Card sx={{border:"1px solid #c4c4c4"}}>
        <CardHeader>
            
            <div className="row">
                <div className="col">
                    <h4 variant="h4" style={{textAlign:"center",marginLeft:"64px",marginTop:"5px",marginBottom:"0"}}>{title}</h4>
                </div>
                <div className="col-auto">
                    <IconButton aria-controls="menu" aria-haspopup="true" onClick={popupMenuClick}>
                        <MoreVertIcon />
                    </IconButton>
                    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={closePopup}>
                        <MenuItem onClick={handleDeleteAll}>Delete All</MenuItem>
                    </Menu>
                </div>
            </div>
            

            
            <div className="row" style={{margin:"0 10px"}}>
                <div className="col">
                    <TextField fullWidth label=" " variant="standard" onKeyDown={inputGiven} inputRef={textFieldRef}/>
                </div>
                <div className="col-auto" style={{paddingLeft:"0px"}}>
                    <IconButton sx={{ marginTop: '8px' }}>
                        <AddIcon onClick={addItemButtonClick} style={{ fontSize: '37px' }} />
                    </IconButton>
                </div>
            </div>
        </CardHeader>
        <hr></hr>
       <CardBody>
            <div style={{maxHeight:"200px",overflowY:"auto"}}>
                {items.map((item, index) => (
                    <ListCard key={index} value={item} onDelete={() => handleDelete(index)} // Pass the onDelete callback
                    />
                ))}
            </div>
            {(items.length === 0) ? <Typography variant="body2" sx={{ textAlign: 'center', padding:"5px", marginBottom:"5px" }}>None</Typography> : null}

        </CardBody>
    </Card>
);
}
