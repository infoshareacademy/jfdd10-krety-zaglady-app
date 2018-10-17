import React, { Component } from "react";
import ProjectList from "../ProjectList";


import "./HomeView.css";
class HomeView extends Component {
  render() {
    return (
      <div className="HomeView-main_box">
        <h1> WITAJCIE W NASZEJ APLIKACJI </h1>
        <div className="HomeView-top_box" />
        <ProjectList projects={[]} />
      </div>
    );
  } 
}
export default HomeView;
