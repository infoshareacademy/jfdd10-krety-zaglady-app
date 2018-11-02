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
              <p>
                <div className="navbar-user"> {user.email} <button id="sign-out" className="sign-out" onClick={this.handleSignOutClick}>Wyloguj się</button>
                </div>              </p>
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