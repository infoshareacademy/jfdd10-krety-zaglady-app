import React, { Component } from "react";
import "./AuthorAvatar.css";
import posed from "react-pose";
import { Link } from "react-router-dom";

const PushUp = posed.div({
  idle: { scale: 1 },
  hovered: { scale: 1.1 }
});

class AuthorAvatar extends Component {
  state = { hovering: false };

  render() {
    return (
      <Link
        onClick={e => this.props.noLink && e.preventDefault()}
        to={"/user/" + this.props.userId}
      >
        <div className="nameBox">
          <PushUp
            pose={this.state.hovering ? "hovered" : "idle"}
            onMouseEnter={() => this.setState({ hovering: true })}
            onMouseLeave={() => this.setState({ hovering: false })}
          >
            <img
              className="avatar"
              src={this.props.userImage}
              alt="userImage"
            />
          </PushUp>
          <div>{this.props.name}</div>
        </div>
      </Link>
    );
  }
}

export default AuthorAvatar;
