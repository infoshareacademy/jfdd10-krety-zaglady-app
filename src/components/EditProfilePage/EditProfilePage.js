import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./EditProfilePage.css";
import { updateUser } from "../../services/users";
import EditProfile from "../EditProfile/EditProfile";
import firebase from "firebase";

class EditProfilePage extends Component {
  state = {
    user: null,
    name: this.props.userName,
    surname: this.props.userSurname
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        firebase
          .database()
          .ref("users")
          .child(user.uid)
          .once("value")
          .then(snapshot => {
            const userData = snapshot.val();
            console.log(userData);
            this.setState({
              user,
              name: userData.userName,
              surname: userData.userSurname
            });
          });
      }
    });
  }

  render() {
    const user = this.state.user;
    if (user === null) {
      return <p>loading user data...</p>;
    }

    console.log(user)

    return (
      <EditProfile
        userId={user.uid}
        name={this.state.name}
        surname={this.state.surname}
      />
    );
  }
}

export default EditProfilePage;
