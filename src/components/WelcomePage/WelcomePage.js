import React, { Component } from "react";
import "./WelcomePage.css"
import { Redirect } from 'react-router'



class WelcomePage extends Component {
  state = {
    redirect: false
  }
  
componentDidMount() {
  setTimeout(() => this.props.history.push ("/"),
    3000)  
}


 


  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to='/'/>;
    }


    return (
      <div className="WelcomeText">
        <img src="/data/signwelcome.png" alt="sign" className="Sign-welcome" />
      </div>
    );
  }
}
export default WelcomePage;