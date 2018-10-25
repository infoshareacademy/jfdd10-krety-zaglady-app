import React, { Component } from "react";
import "./AppIntro.css";

class AppIntro extends Component {
  state = {
      alreadyShown: localStorage.getItem("alreadyShown")
  };

  handleCloseClick = () => {
      this.setState({
          alreadyShown: true
      });
      localStorage.setItem("alreadyShown", "true");
  }

  render() {
      if (this.state.alreadyShown) {
          return null;
      }
    return (
      <div className="AppIntro">
        <div className="MeloIintro" />
        <div className="Intro">
          <h1> WITAJCIE W KRETOGRODZIE! </h1>
        </div>
        <button className="ButtonIntro"
        onClick={this.handleCloseClick}
        >Zacznij zabawę
        </button>



      </div>
    );
  }
}
export default AppIntro;
