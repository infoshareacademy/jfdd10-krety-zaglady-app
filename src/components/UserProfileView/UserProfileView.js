import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './UserProfileView.css'

import UserPanel from '../UserPanel/UserPanel'
import ProjectsList from '../UserProjectsList/UserProjectsList'

class UserProfileView extends Component {
    state = {
        users: []
      }
    
    
      componentDidMount() {
        fetch(process.env.PUBLIC_URL + '/data/users.json').then(
          response => response.json()
        ).then(
          arrayOfUsers => this.setState({
            users: arrayOfUsers
          })
        )
      }
    render() {
        return (
            <div class="UserProfileView">
            
            <div>
                <UserPanel />
                <ProjectsList />
            </div>
            </div>
        )
    }
}

export default UserProfileView