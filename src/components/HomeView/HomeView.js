import React, { Component } from "react";
import ProjectList from "../ProjectList";

import "./HomeView.css";
class HomeView extends Component {
  state = {
    projects: [],
    users: []
  };

  componentDidMount() {
    this.componentIsMount = true;
    fetch("https://kretogrod-app.firebaseio.com/users.json")
      .then(response => response.json())
      .then(objectOfUsers => {
        // console.log(objectOfUsers)
        if (this.componentIsMount) {
          this.setState({
            users: Object.entries(objectOfUsers || {}).map(
              ([id, other]) => ({ id, ...other })
            )
          });
          console.log(this.state.users)
        }
      });

      fetch("https://kretogrod-app.firebaseio.com/projects.json")
      .then(response => response.json())
      .then(objectOfProjects => {
        // console.log(objectOfProjects)
        if (this.componentIsMount) {
          this.setState({
            projects: Object.entries(objectOfProjects || {}).map(
              ([id, other]) => ({ id, ...other })
            )
          });
          console.log(this.state.projects)
        }
      });
  }

  render() {
    return (
      <>
        <div className="HomeView-main_box">
          <h1> WITAJCIE W KRETOGRODZIE! </h1>
        </div>
        <div className="HomeView-top_box">
          <ProjectList projects={this.state.projects} />
        </div>
      </>
    );
  }
}
export default HomeView;
