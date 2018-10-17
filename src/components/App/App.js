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
                  Strona Główna
                </NavLink>
              </li>
              <li>
                <NavLink to="/project">Projekt</NavLink>
              </li>
              <li>
                <NavLink to="/user">Profil</NavLink>
              </li>
              <li>
                <a href="http://krety-zaglady.jfdd10.is-academy.pl" target="_blank">Strona WWW</a>
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
