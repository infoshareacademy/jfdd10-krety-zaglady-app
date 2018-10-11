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
            <img src="https://cdn3.iconfinder.com/data/icons/avatar-55/64/Gardener-avatar-occupation-profession-woman-human-512.png" />
            <div>
              <h1>{this.props.userName} {this.props.userSurname}</h1>
              <p>I like gardening and my dream is to grow my own vegetables</p>
            </div>
          </div>
          <div className="ProjectListItem-fruitIcons">
            <img src="https://cdn3.iconfinder.com/data/icons/spring-23/32/carrot-vegetable-spring-food-512.png" />
            <img src="https://cdn3.iconfinder.com/data/icons/fruits-8/512/apple-512.png" />
            <img src="https://cdn3.iconfinder.com/data/icons/fruits-52/150/icon_fruit_cerejas-512.png" />
            <img src="https://cdn3.iconfinder.com/data/icons/fruits-52/150/icon_fruit_ameixa-512.png" />
            <img src="https://cdn3.iconfinder.com/data/icons/veggies/512/tomato.png" />
          </div>
        </div>

        <div className="ProjectListItem-boardImage">
          <img src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678074-map-512.png" />
        </div>


      </div>



    )
  }
}
export default ProjectListItem