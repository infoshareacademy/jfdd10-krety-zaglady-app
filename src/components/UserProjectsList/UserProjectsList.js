import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './UserProjectsList.css'

import UserProjectItem from '../UserProjectItem/UserProjectItem'

class UserProjectList extends Component {

    render() {
        return (
            <div>
            <UserProjectItem />
            </div>
        )
    }
}

export default UserProjectList