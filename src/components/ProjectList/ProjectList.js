import React, { Component } from "react";
import ProjectListItem from "../ProjectListItem";

import "./ProjectList.css";

class ProjectList extends Component {

  render() {
    return (
      <div className="ProjectList">
        <h2>Projects</h2>
        {this.props.projects.map(project => (
          <div key={project.id}>
            <ProjectListItem {...project} />
          </div>
        ))}
      </div>
    );
  }
}

export default ProjectList;
