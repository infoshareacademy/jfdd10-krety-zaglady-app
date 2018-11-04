import React, { Component } from "react";
import "./EditProfile.css";
import { withRouter } from 'react-router-dom';
import firebase from 'firebase';


class UserEditForm extends Component {

  state = {
    name: this.props.name,
    surname: this.props.surname,
    age: '',
    city: '',
    description: '',
    isSubmitted: false
  };

  handleSubmit = event => {
    event.preventDefault();
    firebase.database().ref('/users/' + this.props.userId).set({
      userName: this.state.name,
      userSurname: this.state.surname,
      userAge: this.state.age,
      userCity: this.state.city,
      userDescription: this.state.description
    })
      .then(() => {
        this.setState({
          isSubmitted: true
        })
      })

  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {

    return (


      <div className="EditProfileDiv">
        <form onSubmit={this.handleSubmit} className="EditProfileForm">
        {this.state.isSubmitted === true && <p style={{color: 'green'}}>Zmiany zostały zapisane</p>}
        <div className="EditProfileFormHeader">EDYCJA PROFILU</div>
          {this.state.error && <p>{this.state.error.message}</p>}
          <table>
            <tbody>
              <tr>
                <td><label for="name">Imię</label></td>
                <td>
                  <input
                    required
                    name="name"
                    value={this.state.name}
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
                  value={this.state.age}
                  onChange={this.handleChange}
                /></td>
              </tr>
              <tr><td><label for="description">Opis profilu</label></td>
                <td><input
                  placeholder="Opis profilu"
                  name="description"
                  value={this.state.description}
                  onChange={this.handleChange}
                /></td>
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

export default withRouter(UserEditForm);
