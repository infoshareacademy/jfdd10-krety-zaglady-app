import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './ProjectsList.css'

import ProjectItem from '../ProjectItem/ProjectItem'

class ProjectList extends Component {

    render() {
        return (
            <div>
            <ProjectItem />

            <ProjectItem />
            
            <ProjectItem />
            </div>
        )
    }
}

export default ProjectList