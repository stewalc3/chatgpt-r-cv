import React, { Component } from "react";
import { Card, IconButton, TextField, Typography } from "@mui/material";
import ListCard from "./ListCard";
import { CardBody, CardHeader } from "reactstrap";
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import "./EditableList.css";

class EditableList extends Component {
  constructor(props) {
    super(props);
    this.textFieldRef = React.createRef();
    this.maxItems=props.maxItems;
    this.maxTextLength=this.props.maxTextLength;
    this.state = {
      title: "Unnamed",
      items: [],
      errorText:undefined,
      anchorEl: null,
    };
    //this.maxItems=this.props.maxItems===undefined? 999:this.props.maxItems;
  }

  getData(){
    return this.state.items;
  }
  setData(items){
    this.setState({items:items});
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.items !== prevProps.items) {
      this.setState({ items: this.props.items });
    }
  }
  componentDidMount() {
    if (this.props.title != null) {
      this.setState({ title: this.props.title });
    }

    if (this.props.items != null) {
      this.setState({ items: this.props.items });
    }
  }

  handleDelete = (index) => {
    const updatedItems = [...this.state.items];
    updatedItems.splice(index, 1);
    this.setState({ items: updatedItems });
  };

  errorMessage=(message)=>{
    this.setState({isError:true,errorText:message});
    setTimeout(()=>{
      this.setState({isError:false,errorText:null});
    },2000);
  }

  addItemButtonClick = () => {
    this.inputGiven({
      target: this.textFieldRef.current,
      code: "Enter",
    });
  };
  
  inputGiven = (args) => {
    let input = args.target.value;
    if(this.maxItems>this.state.items.length){
      if (args.code === "Enter" && input.length > 0 && !this.state.items.includes(input)) {
        this.setState((prevState) => ({
          items: [...prevState.items, input],
        }));
        args.target.value = "";
      }
    }else if(args.code==="Enter"){
      this.errorMessage("Max Items Reached");
    }
  };

  popupMenuClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  closePopup = () => {
    this.setState({ anchorEl: null });
  };

  handleDeleteAll = () => {
    //console.log('Delete All clicked');
    this.setState({ items: [] });
    this.closePopup();
  };

  render() {
    const { title, items, anchorEl } = this.state;

    return (
      <Card sx={{ border: "1px solid #c4c4c4" }} className="editableList">
        <CardHeader>
          <div className="row">
            <div className="col">
              <h4 variant="h4" style={{ textAlign: "center", marginLeft: "64px", marginTop: "5px", marginBottom: "0" }}>{title}</h4>
            </div>
            <div className="col-auto">
              <IconButton aria-controls="menu" aria-haspopup="true" onClick={this.popupMenuClick}>
                <MoreVertIcon sx={{ fontSize: "35px" }} className="more-icon" />
              </IconButton>
              <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.closePopup}>
                <MenuItem onClick={this.handleDeleteAll}>Delete All</MenuItem>
              </Menu>
            </div>
          </div>
          <div className="row" style={{ margin: "0px 0px 0 10px" }}>
            <div className="col" style={{ paddingRight: "0px" }}>
              <TextField fullWidth label=" " variant="standard" onKeyDown={this.inputGiven} inputRef={this.textFieldRef} error={this.state.isError} helperText={this.state.errorText} inputProps={{maxLength:this.maxTextLength}} />
            </div>
            <div className="col-auto" style={{ padding: "0px" }}>
              <IconButton sx={{ marginTop: '8px' }}>
                <AddIcon onClick={this.addItemButtonClick} style={{ fontSize: '37px' }} />
              </IconButton>
            </div>
          </div>
        </CardHeader>
        <hr></hr>
        <CardBody>
          <div style={{ maxHeight: "200px", overflowY: "auto" }}>
            {items.map((item, index) => (
              <ListCard key={index} value={item} onDelete={() => this.handleDelete(index)} />
            ))}
          </div>
          {items.length === 0 ? <Typography variant="body2" sx={{ textAlign: 'center', padding: "5px", marginBottom: "5px" }}>None</Typography> : null}
        </CardBody>
      </Card>
    );
  }
}

export default EditableList;
