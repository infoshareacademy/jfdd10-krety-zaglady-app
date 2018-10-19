import React, { Component } from "react";
import ProjectList from "../ProjectList";

import styled from "styled-components";
import posed from "react-pose";

import "./HomeView.css";

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Square = posed.div({
  idle: { scale: 1 },
  hovered: { scale: 1.5 }
});

const StyledSquare = styled(Square)`
  width: 100px;
  height: 100px;
  background: red;
`;

const Header = posed.h1({
  idle: { scale: 1 },
  hovered: { scale: 1.5 }
})

class HomeView extends Component {
  state = {
    projects: [],
    hovering: false
  };

  componentDidMount() {
    fetch(process.env.PUBLIC_URL + "/data/projects.json")
      .then(response => response.json())
      .then(arrayOfProjects =>
        this.setState({
          projects: arrayOfProjects
        })
      );
  }

  render() {
    return (
      <>
        <div className="HomeView-main_box">
          <Header
            pose={this.state.hovering ? "hovered" : "idle"}
            onMouseEnter={() => this.setState({ hovering: true })}
            onMouseLeave={() => this.setState({ hovering: false })}
          > WITAJCIE W KRETOGRODZIE! </Header>{" "}
          <Container>
            <StyledSquare
              pose={this.state.hovering ? "hovered" : "idle"}
              onMouseEnter={() => this.setState({ hovering: true })}
              onMouseLeave={() => this.setState({ hovering: false })}
            />
          </Container>
        </div>
        <div className="HomeView-top_box">
          <ProjectList projects={this.state.projects} />
        </div>
      </>
    );
  }
}
export default HomeView;
