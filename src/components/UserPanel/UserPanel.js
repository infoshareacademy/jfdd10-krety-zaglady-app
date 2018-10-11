import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './UserPanel.css'

class UserPanel extends Component {

    render() {
        return (
            <div class="UserPanel">
                <div class="UserName">Grażyna Kretowska</div>
                <div class="UserAvatar"><img src="graza.jpg"></div>
                <div class="UserData"></div>
            </div>
        )
    }
}

export default UserPanel
