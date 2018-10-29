import React, { Component } from "react";

import "./BoardGeneratorForm.css";

class BoardGeneratorForm extends Component {
  render() {
    return (
      <div className="BoardGeneratorForm">
        <h2>Generator Projektu</h2>
        <form className="BoardGeneratorForm-form">
          <input
            type="text"
            name="userDescriptionTitle"
            placeholder="Tytuł projektu..."
          />
          <textarea
            type="textarea"
            name="userGardenDescription"
            placeholder="Opis projektu..."
          />
          <input type="number" min="3" max="10" name="size" placeholder="3" />
          <label name="cherry">
            <input type="checkbox" name="cherry" />
            <img src="https://cdn3.iconfinder.com/data/icons/fruits-52/150/icon_fruit_cerejas-512.png" />
          </label>
        </form>
      </div>
    );
  }
}

export default BoardGeneratorForm;
