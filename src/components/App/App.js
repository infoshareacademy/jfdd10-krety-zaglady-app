import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import HomeView from "../HomeView";
import ProjectView from "../ProjectView";
import UserProfileView from "../UserProfileView";
import posed from "react-pose";
import "./App.css";
import ProjectAuthor from "../ProjectAuthor/ProjectAuthor";
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

            <Route exact path="/" component={HomeView} />
            <Route path="/projects/:userId" component={ProjectView} />
          
            <Route path="/projects/user/:userId" component={UserProfileView} />
        
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
