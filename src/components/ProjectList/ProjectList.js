import React, { Component } from "react";
import ProjectListItem from "../ProjectListItem";

import "./ProjectList.css";

class ProjectList extends Component {
  // showHeadline = () => {
  //   if (this.props.projects === []) {
  //     <span>There are no projects yet</span>
  //     }
  //     return
  //   }

  // }

  render() {
    return (
      <div className="ProjectList">
        {this.props.projects.length !== 0 ? (
          <>

            {this.props.projects.map(project => (
              <div class="ProjectList-projectListItem" key={project.id}>
                <ProjectListItem {...project} />
              </div>
            ))}
          </>
        ) : (
          <>

          <span className="ProjectList-headline">Nie ma jeszcze żadnych projektów</span>
          <img class="ProjectList-sadPanda" src="https://cdn1.iconfinder.com/data/icons/panda-emojis-2/64/Sad_panda_face_bear_copy-512.png" alt="sad panda" />
          </>
        )}
      </div>
    );
  }
}

export default ProjectList;
