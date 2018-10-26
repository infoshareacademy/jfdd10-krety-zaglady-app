import React, { Component } from "react";
import ProjectAuthor from "../ProjectAuthor/ProjectAuthor";
import "./ProjectListItem.css";
import { Link } from "react-router-dom";
import posed from "react-pose";

const PushUp = posed.div({
  idle: { scale: 1 },
  hovered: { scale: 1.1 }
});
class ProjectListItem extends Component {
  state = { hovering: false };
  render() {
    return (
      <div className="ProjectListItem-container">
        <ProjectAuthor {...this.props.author} />

        <PushUp
          pose={this.state.hovering ? "hovered" : "idle"}
          onMouseEnter={() => this.setState({ hovering: true })}
          onMouseLeave={() => this.setState({ hovering: false })}
          className="ProjectListItem-boardImage"
        >
          <Link
            to={"projects/" + this.props.id}
            style={{ textDecoration: "none" }}
            className="ProjectListItem"
          >
            <img src={this.props.boardImage} alt="boardImage" />
            <div className="ProjectListItem-fruitIcons">
              {Object.entries(this.props.fruits).map(([key, value]) => {
                console.log({key, value});
                return {key, value}})
              
             .map(fruit => {
                console.log(fruit)
                return(<img src={fruit.value} alt={fruit.key} />);
              })}
            </div>
          </Link>
        </PushUp>
      </div>
    );
  }
}
export default ProjectListItem;
