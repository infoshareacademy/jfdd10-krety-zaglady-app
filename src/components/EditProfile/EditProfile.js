import React, { Component } from "react";
// import PropTypes from 'prop-types'

import "./EditProfile.css";


class UserEditForm extends Component {
  // static propTypes = {

  // }

  state = {
    name: this.props.name,
    surname: this.props.surname
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.updateUser(
      this.props.userId,
      this.state.name,
      this.state.surname
    );
  };

  handleNameChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  handleSurnameChange = event => {
    this.setState({
      surname: event.target.value
    });
  };

  render() {
    return (
     
       
        <div className="EditProfileDiv">
        <form onSubmit={this.handleSubmit} className="EditProfileForm">
        {this.state.error && <p>{this.state.error.message}</p>}
        <table>
          <tbody>
            <tr>
        <td><label for="name">Imię</label></td>
        <td> 
        <input
          placeholder="Imię"
          required
          name="name"
          value={this.state.userName}
          onChange={this.handleChange}
          
        /></td>
        </tr>
        <tr><td><label for="surname">Nazwisko</label></td>
         <td><input
          placeholder="Nazwisko"
          name="surname"
          value={this.state.surname}
          onChange={this.handleChange}
        /></td>
       </tr>
       <tr><td><label for="city">Miejscowość</label></td>
         <td><input
          placeholder="Miejscowość"
          name="city"
          value={this.state.city}
          onChange={this.handleChange}
        /></td>
       </tr>
       <tr><td><label for="age">Wiek</label></td>
         <td><input
          placeholder="Wiek"
          name="age"
          value={this.state.surname}
          onChange={this.handleChange}
        /></td>
       </tr>
        <tr>
          <td>
            <label for="email">Adres e-mail</label>
            </td>
            <td>
        <input
          placeholder="Adres e-mail"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        </td>
       </tr>
          <tr>
            <td>
          <label for="password">Hasło</label>
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
      </tr>
        <tr>
          <td>
        <label for="password2">Powtórz hasło</label>
        </td>
        <td>
        <input
          placeholder="Powtórz hasło"
          name="password2"
          value={this.state.password2}
          onChange={this.handleChange}
          type="password"
        />
        </td>
        </tr>
        </tbody>
      </table>
        
        <div>
      
        <button id="register" className="register">Wyślij</button>
        
          <img src="/data/signmole.png" alt="sign" className="Sign-drawing" /></div>
    
      </form>
      
      </div>
        
      
    );
  }
}

export default UserEditForm;