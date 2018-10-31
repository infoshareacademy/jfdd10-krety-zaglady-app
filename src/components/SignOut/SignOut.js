import React, { Component } from "react";
import firebase from 'firebase'


import "./SignOut.css";


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
        return user ? (
            <>
              <p>
                {user.email} <button onClick={() => signOut()}>sign out</button>
              </p>
              {this.props.children}
            </>
          ) : (
            <>
              <SignInForm />
              <SignUpForm />
            </>
          );
    }
}


export default SignOut;