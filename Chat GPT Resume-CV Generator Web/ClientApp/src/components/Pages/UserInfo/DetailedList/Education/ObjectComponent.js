import React, { Component, createRef } from "react";
import { Card, Stack, TextField, CardContent, Button } from "@mui/material";
import "./Card.css";

export default class ObjectComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: true,
      fields: {},
    };
    
    //props["myself"]=this;
    this.cardRef = createRef();
    
  }

  componentDidMount() {
    const fields = {};
    this.props.fields.forEach((field) => {
      fields[field] = "";
    });
    this.setState({ fields });
  }

  handleDelete = () => this.props.owner.handleDelete(this);


  handleInputChange = (field) => (event) => {
    this.setState((prevState) => ({
      fields: {
        ...prevState.fields,
        [field]: event.target.value,
      },
    }));
  };

  toggleEdit = () => {
    this.setState({ editing: !this.state.editing });
  };

  editClick = () => {
    if ([...this.cardRef.current.classList].includes("clickable")) {
      this.toggleEdit();
    }
  };

  render() {
    const { editing, fields } = this.state;

    return (
      <div className={editing ? "" : "clickable"} onClick={this.editClick} ref={this.cardRef}>
        <Card sx={{ margin: "5px 5px" }}>
          <CardContent>
            
              <Stack spacing={2} sx={{display:editing? "":"none"}}>
                <div className="row">
                  <Button className="col" color="error" onClick={this.handleDelete}>
                    Delete
                  </Button>
                  <Button className="col" color="success" onClick={this.toggleEdit}>
                    Done
                  </Button>
                </div>
                {this.props.fields.map((field) => (
                  <TextField
                    key={field}
                    label={field}
                    onChange={this.handleInputChange(field)}
                    value={fields[field]}
                  />
                ))}
              </Stack>
            
              <Stack spacing={1} className="text-stack" sx={{display:!editing? "":"none"}}>
                {this.props.fields.map((field) => (
                  <p key={field}>
                    {field}: {fields[field]}
                  </p>
                ))}
              </Stack>
          </CardContent>
        </Card>
      </div>
    );
  }
}
