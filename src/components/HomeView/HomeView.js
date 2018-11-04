import React, { Component } from "react";
import ProjectList from "../ProjectList";
import AppIntro from "../AppIntro/AppIntro";
import "./HomeView.css";

const funFacts = [
  "\"Skorupki od jajek rozsyp koło sałaty, fasolki, ogórków, aby ślimaki ich nie zjadały\"",
  "\"Koło bobu i koperku posadź cebulę - mszyce nie lubią tego zapachu\"",
  "\"Jeżeli na porzeczce pojawią się mszyce, to spryskaj je rozwodnionym mlekiem\"",
  "\"Problem z kretami? Wyplenisz je lawendą lub czosnkiem\""
]

const randomFunFact = funFacts[Math.floor(Math.random()*funFacts.length)];
class HomeView extends Component {
  state = {
    projectsWithAuthors: null
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
          author: users[authorId] && {
            id: authorId,
            ...users[authorId]
          }
        })
      )
    }).then(
      projectsWithAuthors => this.setState({ projectsWithAuthors })
    )
  }

  render() {
    const state = this.state.projectsWithAuthors;
    if (state === null) {
      return <p>pobieranie danych...</p>;
    }

    return (
      <>
        <div className="HomeView-main_box">
          <AppIntro />
          <h4> 
            {randomFunFact}
             </h4>

          
        </div>
        <div className="HomeView-top_box">
          <ProjectList projects={this.state.projectsWithAuthors} />
        </div>
      </>
    );
  }
}
export default HomeView;
