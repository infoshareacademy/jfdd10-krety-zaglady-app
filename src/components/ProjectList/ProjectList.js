import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProjectListItem from '../ProjectListItem'

import './ProjectList.css'

class ProjectList extends Component {
  static propTypes = {

  }

  render() {
    return  (
      <div className="ProjectList">
      <h2>Projects</h2>
        {this.props.projects.map(
          project => <ProjectListItem {...project} />
        )}

      </div>
    )
  }
}

export default ProjectList