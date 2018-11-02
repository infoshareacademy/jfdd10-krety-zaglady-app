import React, { Component } from "react";
import "./Navbar.css";
import SignIn from "../SignIn/SignIn";
import SignUpButton from "../SignUpButton/SignUpButton";
import SignOut from "../SignOut/SignOut";
import AddProjectButton from "../AddProjectButton/AddProjectButton";
// import { Link } from "react-router-dom";
// import posed from "react-pose";

class Navbar extends Component {
  render() {
    return (
      <div class="navbar">
       
        <div class="menu">
          <div class="navigation">
            <SignOut />
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
