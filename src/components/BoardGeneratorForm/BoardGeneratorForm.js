import React, { Component } from "react";

import "./BoardGeneratorForm.css";

class BoardGeneratorForm extends Component {
  render() {
    return (
      <div className="BoardGeneratorForm">
        <h2>Generator Projektu</h2>
        <form className="BoardGeneratorForm-form">
          <div className="BoardGeneratorForm-formContainer">
            <h3>Informacje</h3>
            <p>Nazwij i opisz swój projekt ogródka</p>
            <label>
              <input
                className="BoardGeneratorForm-title"
                type="text"
                name="userDescriptionTitle"
                placeholder="Tytuł projektu..."
              />
            </label>
            <label>
              <textarea
                className="BoardGeneratorForm-description"
                type="textarea"
                name="userGardenDescription"
                rows="10"
                cols="30"
                placeholder="Opis projektu..."
              />
            </label>
            <h3>Wielkość ogródka</h3>
            <p>Wybierz liczbę rzędów/kolumn w projekcie</p>
            <label>
              <input
                className="BoardGeneratorForm-size"
                type="range"
                min="3"
                max="10"
                name="size"
              />
            </label>
            <span>10 rzędów i kolumn</span>
          </div>
          <div className="BoardGeneratorForm-itemsContainer">
            <h3>Elementy</h3>
            <p>
              Wybierz elementy do <br />
              zastosowania w projekcie
            </p>
            <div className="BoardGeneratorForm-fruitContainer">
              <label name="cherry">
                <img src="https://cdn3.iconfinder.com/data/icons/fruits-52/150/icon_fruit_cerejas-512.png" />
                <input type="checkbox" name="cherry" />
              </label>
              <label name="apple">
                <img src="https://cdn3.iconfinder.com/data/icons/fruits-8/512/apple-512.png" />
                <input type="checkbox" name="apple" />
              </label>
              <label name="plum">
                <img src="https://cdn3.iconfinder.com/data/icons/fruits-52/150/icon_fruit_ameixa-512.png" />
                <input type="checkbox" name="plum" />
              </label>
              <label name="pear">
                <img src="https://cdn1.iconfinder.com/data/icons/fresh-fruit-2/128/pear-512.png" />
                <input type="checkbox" name="pear" />
              </label>
              <label name="blueberries">
                <img src="https://cdn3.iconfinder.com/data/icons/spring-2-1/30/Black_Berries-512.png" />
                <input type="checkbox" name="blueberries" />
              </label>
            </div>
            <div className="BoardGeneratorForm-vegetableContainer">
              <label name="broccoli">
                <img src="https://cdn4.iconfinder.com/data/icons/breakfast-14/48/broccoli-512.png" />
                <input type="checkbox" name="broccoli" />
              </label>
              <label name="tomato">
                <img src="https://cdn3.iconfinder.com/data/icons/veggies/512/tomato.png" />
                <input type="checkbox" name="tomato" />
              </label>
              <label name="carrot">
                <img src="https://cdn3.iconfinder.com/data/icons/spring-23/32/carrot-vegetable-spring-food-512.png" />
                <input type="checkbox" name="carrot" />
              </label>
            </div>
            <div className="BoardGeneratorForm-selectAll">
              <label name="allFriuits">
                <span>Zaznacz wszystko</span>
                <input type="checkbox" name="allFruits" />
              </label>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default BoardGeneratorForm;
