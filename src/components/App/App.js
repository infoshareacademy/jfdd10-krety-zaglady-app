import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import HomeView from "../HomeView";
import ProjectView from "../ProjectView";
import UserProfileView from "../UserProfileView";

import "./App.css";
import ProjectAuthor from "../ProjectAuthor/ProjectAuthor";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <NavLink exact to="/">
              <img src="/data/molelogo.png" alt="home" className="App-logo" />
            </NavLink>

            <Route exact path="/" component={HomeView} />
            <Route path="/projects/:projectId" component={ProjectView} />
            <Route exact path="/user" component={UserProfileView} />
            <Route path="/projects/user/:projectId" component={ProjectAuthor} />
          </header>
          <div className="App-footer">
            <a href="http://krety-zaglady.jfdd10.is-academy.pl" target="_blank">
              Strona WWW
            </a>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
