import React, { Component } from "react";
import ProjectList from "../ProjectList";
import AppIntro from "../AppIntro/AppIntro";
import "./HomeView.css";
class HomeView extends Component {
  state = {
    projects: [],
    users: [],
    projectsWithAuthors: []
  };

  componentDidMount() {
    this.componentIsMount = true;

    const usersPromise = fetch(
      "https://kretogrod-app.firebaseio.com/users.json"
    ).then(response => response.json());

    const projectsPromise = fetch(
      "https://kretogrod-app.firebaseio.com/projects.json"
    ).then(response => response.json());

    Promise.all([usersPromise, projectsPromise]).then(([users, projects]) => {
      return Object.entries(projects || {}).map(
        ([id, { authorId, ...project }]) => ({
          id,
          ...project,
          author: users[authorId]
        })
      )
    }).then(
      projectsWithAuthors => this.setState({ projectsWithAuthors })
    )
  }

  render() {
    return (
      <>
        <div className="HomeView-main_box">
          <AppIntro />
          <h1> WITAJCIE W KRETOGRODZIE! </h1>
        </div>
        <div className="HomeView-top_box">
          <ProjectList projects={this.state.projectsWithAuthors} />
        </div>
      </>
    );
  }
}
export default HomeView;
