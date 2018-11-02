import React, { Component } from "react";
import "./ProjectView.css";
import ProjectBoard from "../ProjectBoard/ProjectBoard";
import AuthorAvatar from '../AuthorAvatar/AuthorAvatar';
import BoardLegend from "../BoardLegend/BoardLegend";
import posed from "react-pose";

const PushUp = posed.div({
  idle: { scale: 1 },
  hovered: { scale: 1.5 }
});
class ProjectView extends Component {
  state = {
    projectsWithAuthors: [],
    hovering: false
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

  gardenTrigger() {

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
          <AuthorAvatar project={project} userId={project.author.id} name={project.author.userName} userImage= {project.author.userImage} />
        </div>
        <PushUp
        className="PushUpBox"
        pose={this.state.hovering ? "hovered" : "idle"}
        // onMouseEnter={() => this.setState({ hovering: true })}
        onMouseLeave={() => this.setState({ hovering: false })}
        onClick={() => this.setState({ hovering: false})}
        onDoubleClick={() => this.setState({ hovering: true})}
      
        >
        <div className="ProjectView-board">
          <div className="top_box" />
          <ProjectBoard size={project.size} fields={project.fields} />
        </div >
        <div className ="BoardLegend"><BoardLegend fruits={project.fruits}/></div>
        
      </PushUp>
      </div>
    );
  }
}
export default ProjectView;
