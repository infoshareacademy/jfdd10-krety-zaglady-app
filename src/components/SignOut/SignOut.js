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
                {user.userName} <button onClick={this.handleSignOutClick}>Wyloguj się</button>
              </p>
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