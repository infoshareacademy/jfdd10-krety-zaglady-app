import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./SignUpButton.css";

class SignUpButton extends Component {
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <td>
      <Link to={"/sign-up"} style={{ textDecoration: "none" }} className="SignUpPage">
      <button id="sign-up" className="sign-up" onClick={this.props.handleClick}>
        Zarejestruj się
      </button>
      </Link>
      </td>
      </tr>
      </tbody>
      </table>
    )
  }
}



export default SignUpButton;