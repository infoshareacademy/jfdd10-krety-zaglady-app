import React, { Component } from "react";
import "./WelcomePage.css"

class WelcomePage extends Component {
  render() {
    return (
      <div className="WelcomeText">
        <img src="/data/signwelcome.png" alt="sign" className="Sign-welcome" />
      </div>
    );
  }
}
export default WelcomePage;