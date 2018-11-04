import React, { Component } from "react";
import "./EditProfilePage.css";
import { updateUser } from "../../services/users";
import EditProfile from "../EditProfile/EditProfile";
import firebase from "firebase";

class EditProfilePage extends Component {
  state = {
    user: null,
    userName: '',
    userSurname: '',
    userDescription: '',
    userCity: '',
    userAge: '',
    userGender: ''
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        firebase
          .database()
          .ref("users")
          .child(user.uid)
          .once("value")
          .then(snapshot => snapshot.val())
          .then(data => this.setState({
            user,
            ...data
          }))
      }
    });
  }
  


  render() {
    const userInfo = this.state
    const user = userInfo.user;
    
    if (user === null) {
      return <p>pobieranie danych...</p>;
    }

    return (
      <EditProfile
        userId={user.uid}
        {...userInfo}
      />
    );
  }
}

export default EditProfilePage;
