import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import "./SignUpButton.css";

class SignUpButton extends Component {

  render() {
    return (
      <Link to={"/sign-up"} style={{ textDecoration: "none" }} className="SignUpPage">
      <button id="sign-up" className="sign-up" onClick={this.props.handleClick}>
        Zarejestruj się
      </button>
      </Link>
    )
  }
}

SignUpButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
}

export default SignUpButton;