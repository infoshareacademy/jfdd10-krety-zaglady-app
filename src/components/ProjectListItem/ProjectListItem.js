import React, { Component } from "react";
import ProjectAuthor from "../ProjectAuthor/ProjectAuthor";
import PropTypes from "prop-types";
import "./ProjectListItem.css";
import { Link } from "react-router-dom";
import posed from "react-pose";

const PushUp = posed.div({
  idle: { scale: 1 },
  hovered: { scale: 1.1 }
});
class ProjectListItem extends Component {
  static propTypes = {
    /**
     * Function called during form submission
     *
     * @param {string} title text written in the form field
     */
  };

  state = { hovering: false };
  render() {

    return (
      <div className="ProjectListItem-container">
          <ProjectAuthor
            {...this.props}
          />

        <PushUp
        pose={this.state.hovering ? "hovered" : "idle"}
        onMouseEnter={() => this.setState({ hovering: true })}
        onMouseLeave={() => this.setState({ hovering: false })}
      
        className="ProjectListItem-boardImage">
          <Link
            to={"projects/" + this.props.id}
            style={{ textDecoration: "none" }}
            className="ProjectListItem"
          >
            <img src={this.props.boardImage} alt="boardImage" />
            <div className="ProjectListItem-fruitIcons">
            {this.props.fruits.map(fruit => (
              <img src={fruit.image} alt={fruit.alt} />
            ))}
          </div>
          </Link>
        </PushUp>
      </div>
    );
  }
}
export default ProjectListItem;
