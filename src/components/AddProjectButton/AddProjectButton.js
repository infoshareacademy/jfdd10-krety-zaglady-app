import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import "./AddProjectButton.css";

class AddProjectButton extends Component {

  render() {
    return (
      <Link to={"/sign-up"} style={{ textDecoration: "none" }} className="SignUpPage">
      <button id="add-project-button" className="add-project-button" onClick={this.props.handleClick}>
        Utwórz projekt
      </button>
      </Link>
    )
  }
}

AddProjectButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
}

export default AddProjectButton;