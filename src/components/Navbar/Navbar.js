import React, { Component } from "react";
import "./Navbar.css";
import SignInButton from "../SignInButton/SignInButton";
import SignUp from "../SignUp/SignUp";
// import { Link } from "react-router-dom";
// import posed from "react-pose";


class Navbar extends Component {

  render() {
    return (
        <div class="navbar">
        <div class="menu">
            <div class="navigation">
            <SignUp />
            <SignInButton /> 
            
            
            </div>
        </div>
    </div>
    );
  }
}

export default Navbar;