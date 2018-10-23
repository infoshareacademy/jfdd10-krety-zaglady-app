import React, { Component } from "react";
import "./UserPanel.css";

class UserPanel extends Component {
  render() {
    return (
      <div className="UserPanel">
        <div className="UserPanelAvatar">
          <img src={this.props.userImage} alt="userAvatar" />
        </div>

        <div className="UserPanelInfo">
          <div className="UserName">
            {this.props.userName} {this.props.userSurname}
          </div>

          <div className="UserInfos">
            <div className="UserInfo">
              <p>
                Miasto: {this.props.userCity}
                <br />
                Płeć: {this.props.userGender}
                <br />
                Wiek: {this.props.userAge}
              </p>
              <div className="Description">
                <p>{this.props.userDescription}</p>
              </div>
            </div>
            <div className="UserMail" />
          </div>
        </div>
      </div>
    );
  }
}
export default UserPanel;
