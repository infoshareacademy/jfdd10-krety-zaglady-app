import React, { Component } from "react";
import PropTypes from "prop-types";
import "./UserPanel.css";

class UserPanel extends Component {
  static propTypes = {
    /**
     * Function called during form submission
     *
     * @param {string} title text written in the form field
     */
  };

  render() {
    return (
      <div className="UserPanel">
        <div className="UserPanelAvatar">
          <img src={this.props.userAvatar} alt="userAvatar" />
        </div>

        <div className="UserPanelInfo">
          <div className="UserName">
            {this.props.userName} {this.props.userSurname}
          </div>
          <div className="UserInfos">
            <p>
              {this.props.userCity}
              <br />
              {this.props.userGender}
              <br />
              {this.props.userAge}
            </p>
            <div className="Description">
              <p>{this.props.userDescription}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default UserPanel;
