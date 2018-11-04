import React, { Component } from "react";
import "./Navbar.css";
import SignOut from "../SignOut/SignOut";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
       
        <div className="menu">
          <div className="navigation">
            <SignOut />
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
