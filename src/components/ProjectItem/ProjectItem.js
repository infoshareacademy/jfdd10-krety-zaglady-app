import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './ProjectItem.css'

class ProjectItem extends Component {

    render() {
        return (
            <div class="ProjectItem">
                <div class="ProjectImage"><img src={this.props.projectImage} alt="projectImage" /></div>
                <div class="DescriptionOfProject">
                <h3>Mój ogródek</h3>
                <p>Ogródek ze szklarnią i małym oczkiem wodnym. Powierzchnia pięćdziesięciu metrów kwadratowych, grządka z warzywami korzeniowymi. 
                    Pięć jabłoni i dwie grusze.</p>
                </div>
            </div>
        )
    }
}

export default ProjectItem