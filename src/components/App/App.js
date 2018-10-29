import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import HomeView from "../HomeView";
import ProjectView from "../ProjectView";
import UserProfileView from "../UserProfileView";
import posed from "react-pose";
import "./App.css";
import BoardGeneratorForm from "../BoardGeneratorForm/BoardGeneratorForm";


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
            <NavLink to="/userId/edit-form">Nowy Projekt</NavLink>

            <Route exact path="/" component={HomeView} />
            <Route exact path="/projects/:projectId" component={ProjectView} />
            <Route exact path="user/projects/:userId" component={ProjectView} />
            <Route exact path="/user/:userId" component={UserProfileView} />
            <Route exact path="/userId/edit-form" component={BoardGeneratorForm} />
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
