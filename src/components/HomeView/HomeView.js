import React, { Component } from "react";
import ProjectList from "../ProjectList";

import "./HomeView.css";
import Navbar from "../Navbar/Navbar";
class HomeView extends Component {
  state = {
    projects: []
  };

  componentDidMount() {
    fetch(process.env.PUBLIC_URL + "/data/projects.json")
      .then(response => response.json())
      .then(arrayOfProjects =>
        this.setState({
          projects: arrayOfProjects
        })
      );
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
