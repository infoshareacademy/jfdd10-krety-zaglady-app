import React, { Component } from "react";
import "./UserProjectItem.css";

class UserProjectItem extends Component {
  render() {
    return (
      <div class="UserProjectItem">
        <div class="ProjectImage">
          <img src={this.props.boardImage} alt="userGardenImage" />
        </div>
        <div class="UserGardenProject">
          <h3>{this.props.userDescriptionTitle}</h3>
          {this.props.userGardenDescription}
        </div>
      </div>
    );
  }
}

export default UserProjectItem;
