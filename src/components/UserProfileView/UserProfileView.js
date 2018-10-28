import React, { Component } from "react";
import "./UserProfileView.css";
import { Link } from "react-router-dom";
import posed from "react-pose";

import UserPanel from "../UserPanel/UserPanel";
import UserProjectItem from "../UserProjectItem/UserProjectItem";

const PushUp = posed.div({
  idle: { scale: 1 },
  hovered: { scale: 1.1 }
});

class UserProfileView extends Component {
  state = {
    projectsWithAuthors: []
  };

  componentDidMount() {
    this.componentIsMount = true;
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
    const userId = this.props.match.params.userId
    const user = this.state.projectsWithAuthors.find(user => user.id === userId)
    if (user === undefined) {
      return <p>Nie ma jeszcze użytkownika...</p>;
    }
    const project = this.state.projects.find(
      project => project.authorId === userId
    );

    if (project === undefined) {
      return <p>Coś poszło nie tak :(</p>;
    }
    return (
      <div class="UserProfileView">
        <div>
          <UserPanel {...project}/>

          <PushUp
            pose={this.state.hovering ? "hovered" : "idle"}
            onMouseEnter={() => this.setState({ hovering: true })}
            onMouseLeave={() => this.setState({ hovering: false })}
            className="User-Project-Item"
          >
            <Link
              to={"/projects/" + userId}
              style={{ textDecoration: "none" }}
              className="ProjectListItem"
            >
              <div className="User-Project-Item">
                <UserProjectItem {...project} />
              </div>
            </Link>
          </PushUp>
        </div>
      </div>
    );
  }
}

export default UserProfileView;
