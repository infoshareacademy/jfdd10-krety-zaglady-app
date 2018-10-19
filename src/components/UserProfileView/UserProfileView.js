import React, { Component } from "react";
import PropTypes from "prop-types";
import "./UserProfileView.css";

import UserPanel from "../UserPanel/UserPanel";
import ProjectsList from "../ProjectsList/ProjectsList";

class UserProfileView extends Component {
  render() {
    return (
      <div class="UserProfileView">
        <div>
          <UserPanel />
          <ProjectsList />
        </div>
      </div>
    );
  }
}

export default UserProfileView;
