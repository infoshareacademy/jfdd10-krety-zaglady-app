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
        return (
            <div></div>
        )
    }
}


export default SignOut;