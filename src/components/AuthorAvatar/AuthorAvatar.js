import React, { Component } from "react";
import "./AuthorAvatar.css";
import posed from "react-pose";


const PushUp = posed.div({
  idle: { scale: 1 },
  hovered: { scale: 1.1 }
});


class AuthorAvatar extends Component {

  state = { hovering: false };

  render() {
    return (
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
          <div>
              {this.props.name}
          </div>
        </div>
    );
  }
}

export default AuthorAvatar;
