import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './UserProfileView.css'


import UserPanel from '../UserPanel/UserPanel'
import UserProjectsList from '../UserProjectsList/UserProjectsList'
import UserProjectItem from '../UserProjectItem/UserProjectItem'

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

      // 
// componentDidMount() {
//     fetch(process.env.PUBLIC_URL + '/data/projects.json').then(
//       response => response.json()
//     ).then(
//       arrayOfProjects => this.setState({
//         projects: arrayOfProjects
//       })
//     )
//   }


    render() {
        
        const projectId = parseInt(this.props.match.params.projectId)
        const project = this.state.projects.find(project => project.id === projectId)

    // const userId = parseInt(this.props.match.params.userId)
    //     const user = this.state.users.find(user => user.userId === userId)

        if (project === undefined) {
            return <p>Loading...</p>
        }
        return (
            <div class="UserProfileView">
            
            <div>
                <UserPanel {...project}/>
                {/* <UserProjectsList /> */}
                <UserProjectItem {...project}/>
            </div>
            </div>
        )
    }
}

export default UserProfileView

