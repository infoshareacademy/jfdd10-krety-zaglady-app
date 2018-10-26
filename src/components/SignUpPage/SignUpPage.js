import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SignUpPage.css";

class SignUpPage extends Component {
  state = {
    name: "",
    surname: "",
    email: "",
    password: "",
    password2: "",
    error: null
  };

  render() {
    return (
      <div className="SignUpPage">
        <form onSubmit={this.handleSubmit} className="SignUpForm">
        {this.state.error && <p>{this.state.error.message}</p>}
        <input
          placeholder="Imię"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
         <input
          placeholder="Nazwisko"
          name="surname"
          value={this.state.surname}
          onChange={this.handleChange}
        />
        <input
          placeholder="Adres e-mail"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <input
          placeholder="Hasło"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <input
          placeholder="Powtórz hasło"
          name="password2"
          value={this.state.password2}
          onChange={this.handleChange}
        />

        <button id="register" className="register">Wyślij</button>
      </form>
      </div>
    );
  }
}

export default SignUpPage;