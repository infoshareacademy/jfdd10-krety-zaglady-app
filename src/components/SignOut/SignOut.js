import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import firebase from "firebase";
import { Link } from "react-router-dom";

import "./SignOut.css";
import SignIn from "../SignIn/SignIn";
import SignUpButton from "../SignUpButton/SignUpButton";

class SignOut extends Component {
  state = {
    user: null
  };

  handleSignOutClick = () => {
    firebase.auth().signOut();
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => this.setState({ user }));
  }
  render() {
    const user = this.state.user;
    return user ? (
      <>
        <div className="sign-out-navbar">
          <div className="add-project-div">
            {" "}
            <NavLink to="/userId/edit-form">
              <button
                id="add-project-button"
                className="add-project-button"
                onClick={this.handleSignOutClick}
              >
                Utwórz projekt
              </button>
            </NavLink>{" "}
          </div>
          <div className="navbar-user">
            {" "}
            {user.email}{" "}
            <Link
              to={"/edit-profile"}
              style={{ textDecoration: "none" }}
              className="EditProfilePage"
            >
              <button
                id="edit-profile"
                className="edit-profile"
                onClick={this.props.handleClick}
              >
                Edytuj profil
              </button>
            </Link>
            <button
              id="sign-out"
              className="sign-out"
              onClick={this.handleSignOutClick}
            >
              Wyloguj się
            </button>
          </div>
        </div>
        {this.props.children}
      </>
    ) : (
      <>
        <SignIn />
        <SignUpButton />
      </>
    );
  }
}

export default SignOut;
