import React, { Component } from "react";
import ProjectList from "../ProjectList";
import ProjectAuthor from "../ProjectAuthor/ProjectAuthor";

import "./HomeView.css";
class HomeView extends Component {
  render() {
    return (
      <div className="HomeView-main_box">
        <ProjectAuthor {...this.props.author} />
        <div className="HomeView-top_box" />
        <ProjectList projects={[]} />
      </div>
    );
  }
}
export default HomeView;
