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
    fetch("https://kretogrod-app.firebaseio.com/users.json")
      .then(response => response.json())
      .then(objectOfUsers => {
        console.log(objectOfUsers)
        if (this.componentIsMount) {
          this.setState({
            users: Object.entries(objectOfUsers || {}).map(
              ([id, other]) => ({ id, ...other })
            )
          });
          console.log(this.state.users)
        }
      });
  }

  render() {
    const userId = parseInt(this.props.match.params.userId);
    const project = this.state.projects.find(
      project => project.userId === userId
    );

    if (project === undefined) {
      return <p>Loading...</p>;
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
