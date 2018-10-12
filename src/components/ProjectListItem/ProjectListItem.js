import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './ProjectListItem.css'

class ProjectListItem extends Component {

  static propTypes = {
    /**
     * Function called during form submission 
     * 
     * @param {string} title text written in the form field
     */

  }

  render() {
    return (

      <div className="ProjectListItem-container">
        <div className="ProjectListItem-leftSide">
          <div className="ProjectListItem-userInfo">
            <img src={this.props.userImage} alt="userImage"/>
            <div>
              <h1>{this.props.userName} {this.props.userSurname}</h1>
              <p>{this.props.description}</p>
            </div>
          </div>
          <div className="ProjectListItem-fruitIcons">
            {
              this.props.fruits.map(
                fruit => (
                  <img src={fruit.image} alt={fruit.alt}/>
                )
              )
            }
          </div>
        </div>

        <div className="ProjectListItem-boardImage">
          <img src={this.props.boardImage} alt="boardImage" />
        </div>


      </div>



    )
  }
}
export default ProjectListItem