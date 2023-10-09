import React, { Component } from "react";
import { Card, IconButton, TextField, Typography } from "@mui/material";
//import ListCard from "./ListCard";
import { CardBody, CardHeader } from "reactstrap";
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default class DetailedList extends Component {
  constructor(props) {
    super(props);


    this.state = {
      title: "Unnamed",
      items: [],
      anchorEl: null,
    };
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

  addItemButtonClick() {
    alert("not implemented");
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
                <AddIcon onClick={this.addItemButtonClick}  sx={{fontSize:"35px"}}/>
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
          <div style={{ maxHeight: "200px", overflowY: "auto" }}>
            {/*items.map((item, index) => (
              <ListCard key={index} value={item} onDelete={() => this.handleDelete(index)} />
            ))*/}
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
