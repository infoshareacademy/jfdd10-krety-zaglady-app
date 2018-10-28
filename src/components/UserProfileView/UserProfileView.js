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
    projects: [],
    users: []
  };

  componentDidMount() {
    this.componentIsMount = true;
    fetch(
      "https://kretogrod-app.firebaseio.com/users.json"
    )
    .then(response => response.json())
    .then(users => this.setState({
      users: Object.entries(users)
        .map(([id, value]) => ({
          id, ...value
        }))
      })
    )

    fetch(
      "https://kretogrod-app.firebaseio.com/projects.json"
    )
    .then(response => response.json())
    .then(projects => this.setState({
      projects: Object.entries(projects)
        .map(([id, value]) => ({ 
          id, ...value 
        }))
      })
    )
  }



  render() {
    const userId = this.props.match.params.userId
    const user = this.state.users.find(user => user.id === userId)
    if (user === undefined) {
      return <p>Nie ma jeszcze użytkownika...</p>;
    }
    const project = this.state.projects.find(
      project => project.authorId === userId
    );
    console.log(user)

    if (project === undefined) {
      return <p>Coś poszło nie tak :(</p>;
    }
    return (
      <div class="UserProfileView">
        <div>
          <UserPanel {...project} />

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
