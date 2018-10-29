import React, { Component } from "react";

import "./BoardGeneratorForm.css";

class BoardGeneratorForm extends Component {
  render() {
    return (
      <div className="BoardGeneratorForm">
        <h2>Generator Projektu</h2>
        <form className="BoardGeneratorForm-form">
          <label>
            <input
              type="text"
              name="userDescriptionTitle"
              placeholder="Tytuł projektu..."
            />
          </label>
          <label>
            <textarea
              type="textarea"
              name="userGardenDescription"
              placeholder="Opis projektu..."
            />
          </label>
          <label>
            <input type="number" min="3" max="10" name="size" placeholder="3" />
          </label>
          <div className="BoardGeneratorForm-fruitsContainer">
            <label name="cherry">
              <img src="https://cdn3.iconfinder.com/data/icons/fruits-52/150/icon_fruit_cerejas-512.png" />
              <input type="checkbox" name="cherry" />
            </label>
            <label name="apple">
              <img src="https://cdn3.iconfinder.com/data/icons/fruits-8/512/apple-512.png" />
              <input type="checkbox" name="apple" />
            </label>
            <label name="carrot">
              <img src="https://cdn3.iconfinder.com/data/icons/spring-23/32/carrot-vegetable-spring-food-512.png" />
              <input type="checkbox" name="carrot" />
            </label>
            <label name="plum">
              <img src="https://cdn3.iconfinder.com/data/icons/fruits-52/150/icon_fruit_ameixa-512.png" />
              <input type="checkbox" name="plum" />
            </label>
            <label name="tomato">
              <img src="https://cdn3.iconfinder.com/data/icons/veggies/512/tomato.png" />
              <input type="checkbox" name="tomato" />
            </label>
            <label name="carrot">
              <img src="https://cdn3.iconfinder.com/data/icons/spring-23/32/carrot-vegetable-spring-food-512.png" />
              <input type="checkbox" name="carrot" />
            </label>
            <label name="carrot">
              <img src="https://cdn3.iconfinder.com/data/icons/spring-23/32/carrot-vegetable-spring-food-512.png" />
              <input type="checkbox" name="carrot" />
            </label>
            <label name="carrot">
              <img src="https://cdn3.iconfinder.com/data/icons/spring-23/32/carrot-vegetable-spring-food-512.png" />
              <input type="checkbox" name="carrot" />
            </label>

          </div>
          <label name="allFriuits">
            <span>Zaznacz wszystkie</span>
            <input type="checkbox" name="allFruits" />
          </label>
        </form>
      </div>
    );
  }
}

export default BoardGeneratorForm;
