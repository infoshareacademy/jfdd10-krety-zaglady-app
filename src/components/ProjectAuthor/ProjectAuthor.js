import React, { Component } from "react";
import "./ProjectAuthor.css";
import { Link } from "react-router-dom";
import posed from "react-pose";

const PushUp = posed.div({
  idle: { scale: 1 },
  hovered: { scale: 1.1 }
});

class ProjectAuthor extends Component {
  state = { hovering: false };

  render() {
    return (
      <Link to={"/user/" + this.props.userId} className="ProjectAuthorLink">
        <PushUp
          pose={this.state.hovering ? "hovered" : "idle"}
          onMouseEnter={() => this.setState({ hovering: true })}
          onMouseLeave={() => this.setState({ hovering: false })}
          className="ProjectAuthor"
        >
          <h1 className="ProjectAuthor-header">{this.props.name}</h1>
          <div className="ProjectListItem-userInfo">
            <img src={this.props.userImage} alt="userImage" />
            <div>
              <h1>
                {this.props.userName} {this.props.userSurname}
              </h1>
              <p>{this.props.userDescription}</p>
            </div>
          </div>
        </PushUp>
      </Link>
    );
  }
}

export default ProjectAuthor;
