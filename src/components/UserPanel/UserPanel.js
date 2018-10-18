import React, { Component } from "react";
import PropTypes from "prop-types";
import "./UserPanel.css";

class UserPanel extends Component {
 

  render() {
    return (
      <div className="UserPanel">
        <div className="UserPanelAvatar">
          {this.props.userAvatar}
        </div>

        <div className="UserPanelInfo">
          <div className="UserName">
            {this.props.userName} {this.props.userSurname}
          </div>

          <div className="UserInfos">
            <div className="UserInfo">
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
            <div className="UserMail">
               
              </div>
          </div>
        </div>
      </div>
    );
  }
}
export default UserPanel;
