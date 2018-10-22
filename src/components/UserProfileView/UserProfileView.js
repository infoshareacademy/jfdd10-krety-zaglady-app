import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './UserProfileView.css'
import { Link } from "react-router-dom";
import posed from "react-pose";


import UserPanel from '../UserPanel/UserPanel'
import UserProjectsList from '../UserProjectsList/UserProjectsList'
import UserProjectItem from '../UserProjectItem/UserProjectItem'


const PushUp = posed.div({
    idle: { scale: 1 },
    hovered: { scale: 1.1 }
  });

class UserProfileView extends Component {
    state = {
      projects: []
    };

  
    componentDidMount() {
      this.componentIsMount = true;
      fetch("/data/projects.json")
        .then(response => response.json())
        .then(arrayOfProjects => {
          if (this.componentIsMount) {
            this.setState({ projects: arrayOfProjects });
          }
        });
        

    }
  



    render() {
        const userId = parseInt(this.props.match.params.userId)
        const project = this.state.projects.find(project => project.userId === userId)

        if (project === undefined) {
            return <p>Loading...</p>
        }
        return (
            <div class="UserProfileView">
            
            <div>
                <UserPanel {...project}/>
                {/* <UserProjectsList /> */}
                

                 <PushUp
        pose={this.state.hovering ? "hovered" : "idle"}
        onMouseEnter={() => this.setState({ hovering: true })}
        onMouseLeave={() => this.setState({ hovering: false })}
      
        className="User-Project-Item">
          <Link
            to={"/projects/" + userId}
            style={{ textDecoration: "none" }}
            className="ProjectListItem"
          >
          <div className="User-Project-Item"><UserProjectItem {...project}/></div>
    
            
          </Link>
        </PushUp>
            </div>
            </div>
        )
    }
}

export default UserProfileView