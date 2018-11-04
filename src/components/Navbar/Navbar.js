import React, { Component } from "react";
import "./Navbar.css";
import SignOut from "../SignOut/SignOut";

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
