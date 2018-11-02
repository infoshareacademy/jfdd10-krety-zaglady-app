import React, { Component } from "react";
import ProjectAuthor from "../ProjectAuthor/ProjectAuthor";
import "./ProjectListItem.css";
import { Link } from "react-router-dom";
import posed from "react-pose";
// import ProjectBoard from '../ProjectBoard/ProjectBoard'

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
          className="ProjectListItem-boardImage"
          pose={this.state.hovering ? "hovered" : "idle"}
          onMouseEnter={() => this.setState({ hovering: true })}
          onMouseLeave={() => this.setState({ hovering: false })}
        >
          <Link
            to={"projects/" + this.props.id}
            style={{ textDecoration: "none" }}
            className="ProjectListItem"
          >
            <div className="ProjectListItem-fruitIcons">

              {Object.entries(this.props.fruits).map(([key, value]) => {
                return {key, value}})
              
             .map(fruit => {
                return(<div className={fruit.key} ></div>);
              })}
            </div>
                <img className="BoardImage" src={this.props.boardImage} alt="boardImage" />
          </Link>
        </PushUp>
      </div>
    );
  }
}
export default ProjectListItem;


// alt={fruit.key}