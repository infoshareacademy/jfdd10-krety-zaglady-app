import React, { Component } from "react";
import "./ProjectAuthor.css";
import { Link } from "react-router-dom";
class ProjectAuthor extends Component {
  render() {
    return (
      <Link
        to={"/projects/user/" + this.props.id}
        className="ProjectAuthorLink"
      >
        <div className="ProjectAuthor">
          <h1 className="ProjectAuthor-header">{this.props.name}</h1>
          <div className="ProjectListItem-userInfo">
            <img src={this.props.userImage} alt="userImage" />
            <div>
              <h1>
                {this.props.userName} {this.props.userSurname}
              </h1>
              <p>{this.props.description}</p>
            </div>
          </div>
          {/* <p className="ProjectAuthor-photo">{this.props.photo}</p> */}
          {/* <img src="https://via.placeholder.com/350x150" /> */}
        </div>
      </Link>
    );
  }
}

export default ProjectAuthor;
