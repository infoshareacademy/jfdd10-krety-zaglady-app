import React, { Component } from 'react'
import PropTypes from 'prop-types'
import "./SignInButton.css";

class SignInButton extends Component {

  render() {
    return (
      <button id="sign-in" className="sign-in" onClick={this.props.handleClick}>
        Zarejestruj się
      </button>
    )
  }
}

SignInButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
}

export default SignInButton