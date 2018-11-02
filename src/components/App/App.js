import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import HomeView from "../HomeView";
import ProjectView from "../ProjectView";
import UserProfileView from "../UserProfileView";
import SignUpPage from "../SignUpPage/SignUpPage";
import WelcomePage from "../WelcomePage/WelcomePage";
import EditProfile from "../EditProfile/EditProfile";

import posed from "react-pose";
import "./App.css";


const PushUp = posed.div({
  idle: { scale: 1 },
  hovered: { scale: 1.5 }
});
class App extends Component {
  state = { hovering: false };

  render() {
    return (
      <Router>
        <div className="App">
        <Navbar />
          <header className="App-header">
            <NavLink exact to="/">
              <PushUp
                pose={this.state.hovering ? "hovered" : "idle"}
                onMouseEnter={() => this.setState({ hovering: true })}
                onMouseLeave={() => this.setState({ hovering: false })}
              >
                <img src="/data/molelogo.png" alt="home" className="App-logo" />
              </PushUp>
            </NavLink>

            <Route exact path="/" component={HomeView} />
            <Route exact path="/projects/:projectId" component={ProjectView} />
            <Route exact path="user/projects/:userId" component={ProjectView} />
            <Route exact path="/user/:userId" component={UserProfileView} />
            <Route exact path="/sign-up" component={SignUpPage} />
            <Route exact path="/welcome" component={WelcomePage} />
            <Route exact path="/edit-profile" component={EditProfile} />
            
          </header>
          <div className="App-footer">
            <a
              href="http://krety-zaglady.jfdd10.is-academy.pl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Strona WWW
            </a>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
