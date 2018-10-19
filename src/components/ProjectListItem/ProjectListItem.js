import React, { Component } from "react";
import ProjectAuthor from "../ProjectAuthor/ProjectAuthor";
import PropTypes from "prop-types";
import "./ProjectListItem.css";
import { Link } from "react-router-dom";
class ProjectListItem extends Component {
  static propTypes = {
    /**
     * Function called during form submission
     *
     * @param {string} title text written in the form field
     */
  };

  render() {
    return (
      <Link
            to={"projects/" + this.props.id}
            style={{ textDecoration: "none" }}
            className="ProjectListItem"
          >
      <div className="ProjectListItem-container">
          <ProjectAuthor
            {...this.props}
          />

        <div className="ProjectListItem-boardImage">
          
            <img src={this.props.boardImage} alt="boardImage" />
            <div className="ProjectListItem-fruitIcons">
            {this.props.fruits.map(fruit => (
              <img src={fruit.image} alt={fruit.alt} />
            ))}
          </div>
          
        </div>
      </div>
      </Link>
    );
  }
}
export default ProjectListItem;
