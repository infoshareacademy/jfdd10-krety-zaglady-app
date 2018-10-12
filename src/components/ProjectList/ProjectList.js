import React, { Component } from "react";
import ProjectListItem from "../ProjectListItem";

import "./ProjectList.css";

class ProjectList extends Component {

  // showHeadline = () => {
  //   if (this.props.projects === []) {
  //     <span>There are no projects yet</span>
  //     }
  //     <span>Projects</span>
  //   }

  // }

  render() {
    return (
      <div className="ProjectList">
        <span>Projects</span>
        {this.props.projects.map(project => (
          <div class="ProjectList-projectListItem" key={project.id}>
            <ProjectListItem {...project} />
          </div>
        ))}
      </div>
    );
  }
}

export default ProjectList;
