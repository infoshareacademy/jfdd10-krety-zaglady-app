import React, { Component } from "react";
import firebase from "firebase";
import { withRouter } from 'react-router-dom';
import "./SignIn.css";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    error: null
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {this.setState({ error: null })
      this.props.history.push("/")})
      .catch(error => this.setState({ error }));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="SignInForm">
        {this.state.error && <p>{this.state.error.message}</p>}
        <table>
          <tbody>
            <tr>
              <td>
                <input
                  placeholder="Adres e-mail"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </td>
              <td>
                <input
                  placeholder="Hasło"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  type="password"
                />
              </td>
              <td>
                <button id="sign-in" className="sign-in">
                  Zaloguj się
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    );
  }
}

export default withRouter(SignIn);
