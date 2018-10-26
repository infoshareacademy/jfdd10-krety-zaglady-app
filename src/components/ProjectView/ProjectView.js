import React, { Component } from "react";
import "./ProjectView.css";
import ProjectBoard from "../ProjectBoard/ProjectBoard";
import AuthorAvatar from '../AuthorAvatar/AuthorAvatar';

class ProjectView extends Component {
  state = {
    projects: []
  };

  componentDidMount() {
    fetch(process.env.PUBLIC_URL + "/data/projects.json")
      .then(response => response.json())
      .then(projects => this.setState({ projects }));
  }

  render() {
    const projectId = parseInt(this.props.match.params.projectId);
    const project = this.state.projects.find(
      project => project.id === projectId
    );

    if (project === undefined) {
      return <div>Loading...</div>;
    }

    return (
      <div className="main_b">
        <div className="ProjectView-projectAuthor">
          <AuthorAvatar project={project} name={project.userName} userImage= {project.userImage} />
        </div>
        <div className="ProjectView-board">
          <div className="top_box" />
          <ProjectBoard size={project.size} fields={project.fields} />
        </div>
      </div>
    );
  }
}
export default ProjectView;
