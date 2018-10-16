import React, { Component } from 'react'
import ProjectAuthor from "../ProjectAuthor/ProjectAuthor"
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
          <ProjectAuthor userName={this.props.userName} userSurname={this.props.userSurname} userImage={this.props.userImage}/>
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