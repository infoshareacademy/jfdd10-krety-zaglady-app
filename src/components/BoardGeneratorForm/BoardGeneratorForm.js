import React, { Component } from "react";
import firebase from "firebase";

import "./BoardGeneratorForm.css";

class BoardGeneratorForm extends Component {
  state = {
    // authorId: firebase.auth().currentUser.uid,
    boardImage:
      "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678074-map-512.png",
    userDescriptionTitle: "",
    userGardenDescription: "",
    size: 3,
    fruits: {
      cherry: null,
      apple: null,
      plum: null,
      pear: null,
      blueberries: null,
      broccoli: null,
      tomato: null,
      carrot: null,
      tree: null
    },
    fields: {}
  };

  //
  getCheckedFruits = () => {
    return Object.keys(this.state.fruits).filter(
      fruitName => this.state.fruits[fruitName]
    );
  };

  pickRandomFruit = checkedFruits => {
    return checkedFruits[Math.floor(Math.random() * checkedFruits.length)];
  };

  generateEmptyBoard = () => {
    let board = {};
    for (let i = 0; i < this.state.size; i++) {
      board[i] = {};
    }
    this.setState({
      fields: board
    });
  };

  generateBoard = () => {
    let board = this.state.fields;
    let checkedFruits = this.getCheckedFruits();
    for (let row = 0; row < this.state.size; row++) {
      for (let col = 0; col < this.state.size; col++) {
        if (Math.random() > 0.5) {
          board[row] = board[row] || {}
          board[row][col] = this.pickRandomFruit(checkedFruits);
        }
      }
    }

  handleSizeChange = event => {
    this.setState({
      size: event.target.value
    });
    this.generateEmptyBoard();
  };
    return board;
  };

  handleTextInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.checked;
    const name = target.name;

    this.setState({
      fruits: {
        ...this.state.fruits,
        [name]: value
      }
    });
  };

  handleAddAllFruits = event => {
    const fruitsArray = Object.keys(this.state.fruits);
    const updatedFruitsArray = fruitsArray.map(fruit => ({
      [fruit]: event.target.checked
    }));

    this.setState({
      fruits: Object.assign({}, ...updatedFruitsArray)
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const board = this.generateBoard();
    fetch("https://kretogrod-app.firebaseio.com/projects.json", {
      method: "POST",
      body: JSON.stringify({ ...this.state, fields: board }),
      headers: {
        "Content-Type": "application/json"
      }
    });
  };

  render() {
    return (
      <div className="BoardGeneratorForm">
        <h2>Generator Projektu</h2>
        <form className="BoardGeneratorForm-form" onSubmit={this.handleSubmit}>
          <div className="BoardGeneratorForm-formContainer">
            <h3>Informacje</h3>
            <p>Nazwij i opisz swój projekt ogródka</p>
            <label>
              <input
                className="BoardGeneratorForm-title"
                type="text"
                name="userDescriptionTitle"
                placeholder="Tytuł projektu..."
                value={this.state.userDescriptionTitle}
                onChange={this.handleTextInputChange}
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
                value={this.state.userGardenDescription}
                onChange={this.handleTextInputChange}
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
                value={this.state.size}
                onChange={this.handleSizeChange}
              />
            </label>
            <span>{this.state.size}</span>
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
                <input
                  type="checkbox"
                  name="cherry"
                  checked={this.state.fruits.cherry}
                  onChange={this.handleInputChange}
                />
              </label>
              <label name="apple">
                <img src="https://cdn3.iconfinder.com/data/icons/fruits-8/512/apple-512.png" />
                <input
                  type="checkbox"
                  name="apple"
                  checked={this.state.fruits.apple}
                  onChange={this.handleInputChange}
                />
              </label>
              <label name="plum">
                <img src="https://cdn3.iconfinder.com/data/icons/fruits-52/150/icon_fruit_ameixa-512.png" />
                <input
                  type="checkbox"
                  name="plum"
                  checked={this.state.fruits.plum}
                  onChange={this.handleInputChange}
                />
              </label>
              <label name="pear">
                <img src="https://cdn1.iconfinder.com/data/icons/fresh-fruit-2/128/pear-512.png" />
                <input
                  type="checkbox"
                  name="pear"
                  checked={this.state.fruits.pear}
                  onChange={this.handleInputChange}
                />
              </label>
              <label name="blueberries">
                <img src="https://cdn3.iconfinder.com/data/icons/spring-2-1/30/Black_Berries-512.png" />
                <input
                  type="checkbox"
                  name="blueberries"
                  checked={this.state.fruits.blueberries}
                  onChange={this.handleInputChange}
                />
              </label>
              <label name="tree">
                <img src="../tree.jpg" />
                <input
                  type="checkbox"
                  name="tree"
                  checked={this.state.fruits.tree}
                  onChange={this.handleInputChange}
                />
              </label>
            </div>
            <div className="BoardGeneratorForm-vegetableContainer">
              <label name="broccoli">
                <img src="https://cdn4.iconfinder.com/data/icons/breakfast-14/48/broccoli-512.png" />
                <input
                  type="checkbox"
                  name="broccoli"
                  checked={this.state.fruits.broccoli}
                  onChange={this.handleInputChange}
                />
              </label>
              <label name="tomato">
                <img src="https://cdn3.iconfinder.com/data/icons/veggies/512/tomato.png" />
                <input
                  type="checkbox"
                  name="tomato"
                  checked={this.state.fruits.tomato}
                  onChange={this.handleInputChange}
                />
              </label>
              <label name="carrot">
                <img src="https://cdn3.iconfinder.com/data/icons/spring-23/32/carrot-vegetable-spring-food-512.png" />
                <input
                  type="checkbox"
                  name="carrot"
                  checked={this.state.fruits.carrot}
                  onChange={this.handleInputChange}
                />
              </label>
            </div>
            <div className="BoardGeneratorForm-selectAll">
              <label name="checkAllFriuits">
                <span>Zaznacz wszystko</span>
                <input
                  type="checkbox"
                  name="checkAllFriuits"
                  onChange={this.handleAddAllFruits}
                />
              </label>
            </div>
          </div>
          <button>GENERUJ PROJEKT</button>
        </form>
      </div>
    );
  }
}

export default BoardGeneratorForm;
