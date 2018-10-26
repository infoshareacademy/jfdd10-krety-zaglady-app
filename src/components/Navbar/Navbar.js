import React, { Component } from "react";
import "./Navbar.css";
import SignIn from "../SignIn/SignIn";
import SignUpButton from "../SignUpButton/SignUpButton";
// import { Link } from "react-router-dom";
// import posed from "react-pose";


class Navbar extends Component {

  render() {
    return (
        <div class="navbar">
        <div class="menu">
            <div class="navigation">
            <SignIn />
            <SignUpButton /> 
            
            </div>
        </div>
    </div>
    );
  }
}

export default Navbar;