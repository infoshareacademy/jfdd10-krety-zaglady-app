import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './UserProjectItem.css'

class UserProjectItem extends Component {

    render() {
        return (
            <div class="UserProjectItem">
                <div class="ProjectImage"><img src={this.props.userProjectImage} alt="userProjectImage" /></div>
                <div class="DescriptionOfProject">
                <h3>Mój ogródek</h3>
                <p>Ogródek ze szklarnią i małym oczkiem wodnym. Powierzchnia pięćdziesięciu metrów kwadratowych, grządka z warzywami korzeniowymi. 
                    Pięć jabłoni i dwie grusze.</p>
                </div>
            </div>
        )
    }
}

export default UserProjectItem