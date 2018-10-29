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
        <div className="SignText">Zachęcamy do rejestracji</div>
        {this.state.error && <p>{this.state.error.message}</p>}
        <div><label for="name">Imię</label> 
        <input
          placeholder="Imię"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        </div>
        <div>
        <label for="surname">Nazwisko</label>
         <input
          placeholder="Nazwisko"
          name="surname"
          value={this.state.surname}
          onChange={this.handleChange}
        />
        </div>
        <div>
        <label for="email">Adres e-mail</label>
        <input
          placeholder="Adres e-mail"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        </div>
        <div>
          <label for="password">Hasło</label>
        <input
          placeholder="Hasło"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        </div>
        <div>
        <label for="passoword2">Powtórz hasło</label>
        <input
          placeholder="Powtórz hasło"
          name="password2"
          value={this.state.password2}
          onChange={this.handleChange}
        />
        </div>

        
        <div>
        <button id="register" className="register">Wyślij</button>
          <img src="/data/signmole.png" alt="sign" className="Sign-drawing" /></div>
    
      </form>
      
      </div>
      
    );
  }
}

export default SignUpPage;