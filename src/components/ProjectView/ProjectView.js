import React, { Component } from "react";
import "./ProjectView.css";
import ProjectList from "../ProjectList";
class ProjectView extends Component {
  render() {
    return (
      <div className="main_box">
        <ProjectList projects={[]} />
        <div className="top_box" />
      </div>
    );
  }
}
export default ProjectView;
