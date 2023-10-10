import React, { Component, createRef } from "react";
import { Card, IconButton, Typography } from "@mui/material";
//import ListCard from "./ListCard";
import { CardBody, CardHeader } from "reactstrap";
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ObjectComponent from "./Education/ObjectComponent";

export default class DetailedList extends Component {
  constructor(props) {
    super(props);
    console.log(this);
    this.state = {
      title: "Unnamed",
      items: [],
    };

    this.addItemButtonClick=this.addItemButtonClick.bind(this);
    this.componentContainerRef=createRef();
  }

  
  handleDelete(comp) {
    let i=this.state.items;
    i.pop(i.indexOf(comp));
       this.setState({items:i});
  }  
  
   
/**
 * THIS IS HELD ON BY A GOD DAMN THREAD BECAUSE REACT DIDNT FEEL LIKE LINKING THE CLASS TO THE DAMN COMPONENT
 * @returns the data
 */
  getData(){
    console.log(this.componentContainerRef);
    console.log([...this.componentContainerRef.current.querySelectorAll(".objectComponent")]);
    
    return [...this.componentContainerRef.current.querySelectorAll(".objectComponent")].map(e=>{
      let labels=[...e.querySelectorAll("label")];  
      let pairing=labels.map(h=>{
        return {
          "key":h.innerText,
          "value":h.parentElement.querySelector("input").value
        }
        })
      let ret={};
      for(var i of pairing){
        ret[i.key.toLowerCase().replace(" ","_")]=i.value;
      }
      console.log("pairing", pairing);
      
      return ret;
    });
  
  }
  componentDidMount() {
    if (this.props.title != null) {
      this.setState({ title: this.props.title });
    }

    if (this.props.items != null) {
      this.setState({ items: this.props.items });
    }
  }


  addItemButtonClick() {
    //const newObject =new ObjectComponent({fields:this.props.fields,owner:this});
//    const newObject = <ObjectComponent fields={this.props.fields} owner={this}/>;
    //const newObject = <ObjectComponent fields={this.props.fields} owner={this} />;
    //console.log(newObject);
    this.setState({ items: [...this.state.items, 1] });
  };


  popupMenuClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  closePopup = () => {
    this.setState({ anchorEl: null });
  };

  handleDeleteAll = () => {
    console.log("Delete All clicked");
    this.setState({ items: [] });
    this.closePopup();
  };

  render() {
    const { title, items, anchorEl } = this.state;

    return (
      <Card sx={{ border: "1px solid #c4c4c4" }}>
        <CardHeader>
          <div className="row">
            <div className="col">
              <h4 variant="h4" style={{ textAlign: "center", marginLeft: "100px", marginTop: "5px", marginBottom: "0" }}>
                {title}
              </h4>
            </div>
            <div className="col-auto" style={{ padding: "0px" }}>
              <IconButton>
                <AddIcon onClick={this.addItemButtonClick} sx={{fontSize:"35px"}}/>
              </IconButton>
            </div>
            <div className="col-auto" style={{paddingLeft:0}}>
              <IconButton aria-controls="menu" aria-haspopup="true" onClick={this.popupMenuClick}>
                <MoreVertIcon sx={{fontSize:"35px"}}/>
              </IconButton>
              <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.closePopup}>
                <MenuItem onClick={this.handleDeleteAll}>Delete All</MenuItem>
              </Menu>
            </div>
          </div>
          
        </CardHeader>
        <hr></hr>
        <CardBody>
          <div style={{ maxHeight: "500px", overflowY: "auto" }} ref={this.componentContainerRef}>
            {items.map(e=>(
            <div className="objectComponent">
            <ObjectComponent fields={this.props.fields} owner={this}/>
            </div>)
            )}
          </div>
          {items.length === 0 ? (
            <Typography variant="body2" sx={{ textAlign: "center", padding: "5px", marginBottom: "5px" }}>
              None
            </Typography>
          ) : null}
        </CardBody>
      </Card>
    );
  }
}
