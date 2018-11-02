import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./EditProfilePage.css";
import {
    updateUser
  } from "../../services/users";



class EditProfilePage extends Component {
    state = {
        name: this.props.userName,
        surname: this.props.userSurname
      };
    
      handleSubmit = event => {
        event.preventDefault();
    
        this.props.updateUser(
          this.props.uid,
          this.state.name,
          this.state.surname
        );
      };
    
      handleNameChange = event => {
        this.setState({
          name: event.target.value
        });
      };
    
      handleSurnameChange = event => {
        this.setState({
          surname: event.target.value
        });
      };
    

  render() {
    return (
    <EditProfile  
    userId={user.id}
    name={user.name}
    surname={user.surname}
    updateUser={(id, name, surname) =>
      updateUser(id, name, surname).then(this.getUsers)
    }
  />
    );
  }
}

export default EditProfilePage;