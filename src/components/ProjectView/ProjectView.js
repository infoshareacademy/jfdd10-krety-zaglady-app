import React, { Component } from "react";
import "./ProjectView.css";
import ProjectBoard from "../ProjectBoard/ProjectBoard";
import AuthorAvatar from '../AuthorAvatar/AuthorAvatar';

class ProjectView extends Component {
  state = {
    projectsWithAuthors: []
  };

  componentDidMount() {
    const usersPromise = fetch(
      "https://kretogrod-app.firebaseio.com/users.json"
    ).then(response => response.json());

    const projectsPromise = fetch(
      "https://kretogrod-app.firebaseio.com/projects.json"
    ).then(response => response.json());

    Promise.all([usersPromise, projectsPromise]).then(([users, projects]) => {
      return Object.entries(projects || {}).map(
        ([id, { authorId, ...project }]) => ({
          id,
          ...project,
          author: users[authorId] && {
            id: authorId,
            ...users[authorId]
          }
        })
      )
    }).then(
      projectsWithAuthors => this.setState({ projectsWithAuthors })
    )
  }

  render() {
    const projectId = this.props.match.params.projectId;
    const project = this.state.projectsWithAuthors.find(
      project => project.id === projectId
    );

    if (project === undefined) {
      return <div>Nie ma jeszcze projektu...</div>;
    }
    return (
      <div className="main_b">
        <div className="ProjectView-projectAuthor">
          <AuthorAvatar project={project} name={project.author.userName} userImage= {project.author.userImage} />
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
