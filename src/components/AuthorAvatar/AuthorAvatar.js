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
      <Link className="AvatarLink"
        onClick={e => this.props.noLink && e.preventDefault()}
        to={"/user/" + this.props.userId}
      >
        <div className="nameBox">
          <PushUp
            pose={this.state.hovering ? "hovered" : "idle"}
            onMouseEnter={this.props.disabled ? null : () => this.setState({ hovering: true })}
            onMouseLeave={this.props.disabled ? null : () => this.setState({ hovering: false })}
          >
            <img
              className="avatar"
              src={this.props.userImage}
              alt="userImage"
            />
          </PushUp>
        </div>
          <div className="AvatarNameText"><span className="PrefixBox">Ogrodnik </span>{this.props.name}</div>
      </Link>
    );
  }
}

export default AuthorAvatar;
