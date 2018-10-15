import React, { Component } from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import ProjectList from './components/ProjectList'
// import ProjectView from './components/ProjectView'
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
              <NavLink to="/project">Project</NavLink>
            </li>
            <li>
              <NavLink to="/user">Project</NavLink>
            </li>
          </ul>
          
          <Route exact path="/" component={ProjectList} />
          {/* <Route path="/project" component={ProjectView} />
          <Route exact path="/user" component={UserProfileView} /> */}
        </header>

        
      </div>
      </Router>
    );
  }
}
export default App;
