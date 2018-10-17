import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
// import HomeView from "../HomeView";
import ProjectView from "../ProjectView";
// import UserProfileView from './components/UserProfileView'

import "./App.css";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <ul>
              <li>
                <NavLink exact to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/project">My Project</NavLink>
              </li>
              <li>
                <NavLink to="/user">My Profile</NavLink>
              </li>
            </ul>

            {/* <Route exact path="/" component={HomeView} /> */}
            <Route path="/project" component={ProjectView} />
            {/* <Route exact path="/user" component={UserProfileView} /> */}
          </header>
        </div>
      </Router>
    );
  }
}
export default App;
