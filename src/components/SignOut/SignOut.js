import React, { Component } from "react";
import firebase from 'firebase'


import "./SignOut.css";
import SignIn from "../SignIn/SignIn";
import SignUpButton from "../SignUpButton/SignUpButton";


class SignOut extends Component {
    state = {
        user: null
    }

    handleSignOutClick = () => {
        firebase.auth().signOut()
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => this.setState({ user }))
    }
    render() {
        const user = this.state.user
        return user ? (
            <>
              <div className="sign-out-navbar">
              <button id="add-project-button" className="add-project-button" onClick={this.handleSignOutClick}>Utwórz projekt</button>
                  {/* <div className="add-project-button"> </div> */}
                <div className="navbar-user"> {user.email} <button id="sign-out" className="sign-out" onClick={this.handleSignOutClick}>Wyloguj się</button>
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