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
        fetch(process.env.PUBLIC_URL + '/data/projects.json').then(
          response => response.json()
        ).then(
          arrayOfProjects => this.setState({
            projects: arrayOfProjects
          })
        )
      }
    



    render() {
        const userId = parseInt(this.props.match.params.projectId)
        const project = this.state.projects.find(project => project.userId === userId)

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