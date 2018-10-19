import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './UserProfileView.css'


import UserPanel from '../UserPanel/UserPanel'
import UserProjectsList from '../UserProjectsList/UserProjectsList'
import UserProjectItem from '../UserProjectItem/UserProjectItem'

class UserProfileView extends Component {
    state = {
      users: []
    };

  
    componentDidMount() {
      this.componentIsMount = true;
      fetch("/data/users.json")
        .then(response => response.json())
        .then(arrayOfUsers => {
          if (this.componentIsMount) {
            this.setState({ users: arrayOfUsers });
          }
        });
        

    }
  



    render() {
        const userId = parseInt(this.props.match.params.userId)
        const user = this.state.users.find(user => user.userId === userId)

        if (user === undefined) {
            return <p>Loading...</p>
        }
        return (
            <div class="UserProfileView">
            
            <div>
                <UserPanel {...user}/>
                {/* <UserProjectsList /> */}
                <UserProjectItem {...user}/>
            </div>
            </div>
        )
    }
}

export default UserProfileView