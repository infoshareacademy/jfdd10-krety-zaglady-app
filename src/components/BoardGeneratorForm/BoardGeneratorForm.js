import React, { Component } from "react";
import firebase from "firebase";
import posed from "react-pose";

import "./BoardGeneratorForm.css";

const PushUp = posed.div({
  idle: { scale: 1 },
  hovered: { scale: 1.1 }
});
class BoardGeneratorForm extends Component {
  state = {
    hovering: false,
    authorId: null,
    boardImage:
      "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678074-map-512.png",
    userDescriptionTitle: "",
    userGardenDescription: "",
    size: 4,
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

  componentDidMount() {
    firebase.auth().onAuthStateChanged(
      user => {
        if (user) {
          this.setState({ authorId: user.uid })
        }
      }
    )
  }

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
          board[row] = board[row] || {};
          board[row][col] = this.pickRandomFruit(checkedFruits);
        }
      }
    }

    return board;
  };

  handleSizeChange = event => {
    this.setState({
      size: event.target.value
    });
    this.generateEmptyBoard();
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
    })
      .then(response => response.json())
      .then(({ name }) => this.props.history.push(`/projects/${name}`));
  };

  render() {
    return (
      <div className="BoardGeneratorForm">
        <h2 className="BoardGeneratorForm-header">Generator Projektu</h2>
        <form className="BoardGeneratorForm-form" onSubmit={this.handleSubmit}>
          <div className="BoardGeneratorForm-formContainer">
            <h3 className="BoardGeneratorForm-text">Informacje</h3>
            <p className="BoardGeneratorForm-text">Nazwij i opisz swój projekt ogródka</p>
            <label>
              <input
                className="BoardGeneratorForm-title"
                type="text"
                required
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
                required
                name="userGardenDescription"
                rows="10"
                cols="30"
                placeholder="Opis projektu..."
                value={this.state.userGardenDescription}
                onChange={this.handleTextInputChange}
              />
            </label>
            <h3 className="BoardGeneratorForm-text">Wielkość ogródka</h3>
            <p className="BoardGeneratorForm-text">Wybierz liczbę rzędów/kolumn w projekcie</p>
            <label>
              <input
                className="BoardGeneratorForm-size"
                type="range"
                min="4"
                max="10"
                name="size"
                value={this.state.size}
                onChange={this.handleSizeChange}
              />
            </label>
            <span className="BoardGeneratorForm-text">{this.state.size}</span>
          </div>
          <div className="BoardGeneratorForm-itemsContainer">
            <h3 className="BoardGeneratorForm-text">Elementy</h3>
            <p className="BoardGeneratorForm-text">
              Wybierz elementy do <br />
              zastosowania w projekcie
            </p>
            <div className="BoardGeneratorForm-fruitContainer">
              <label name="cherry">
                <div className="cherry formFruit"/>
                <input
                  type="checkbox"
                  name="cherry"
                  checked={this.state.fruits.cherry}
                  onChange={this.handleInputChange}
                />
              </label>
              <label name="apple">
                <div className="apple formFruit" />
                <input
                  type="checkbox"
                  name="apple"
                  checked={this.state.fruits.apple}
                  onChange={this.handleInputChange}
                />
              </label>
              <label name="plum">
                <div className="plum formFruit" />
                <input
                  type="checkbox"
                  name="plum"
                  checked={this.state.fruits.plum}
                  onChange={this.handleInputChange}
                />
              </label>
              <label name="pear">
                <div className="pear formFruit" />
                <input
                  type="checkbox"
                  name="pear"
                  checked={this.state.fruits.pear}
                  onChange={this.handleInputChange}
                />
              </label>
              <label name="blueberries">
                <div className="blueberries formFruit" />
                <input
                  type="checkbox"
                  name="blueberries"
                  checked={this.state.fruits.blueberries}
                  onChange={this.handleInputChange}
                />
              </label>
              <label htmlFor="tree">
                <div className="tree formFruit" />
                <input
                  type="checkbox"
                  name="tree"
                  id="tree"
                  checked={this.state.fruits.tree}
                  onChange={this.handleInputChange}
                />
              </label>
            </div>
            <div className="BoardGeneratorForm-vegetableContainer">
              <label name="broccoli">
                <div className="broccoli formFruit" />
                <input
                  type="checkbox"
                  name="broccoli"
                  checked={this.state.fruits.broccoli}
                  onChange={this.handleInputChange}
                />
              </label>
              <label name="tomato">
                <div className="tomato formFruit" />
                <input
                  type="checkbox"
                  name="tomato"
                  checked={this.state.fruits.tomato}
                  onChange={this.handleInputChange}
                />
              </label>
              <label name="carrot">
                <div className="carrot formFruit" />
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
                <span className="BoardGeneratorForm-text">Zaznacz wszystko</span>
                <input
                  type="checkbox"
                  name="checkAllFriuits"
                  onChange={this.handleAddAllFruits}
                />
              </label>
            </div>
          <PushUp className="GenerateButtonBox"
          pose={this.state.hovering ? "hovered" : "idle"}
          onMouseEnter={this.props.disabled ? null : () => this.setState({ hovering: true })}
          onMouseLeave={this.props.disabled ? null : () => this.setState({ hovering: false })}
          >
          <button className="GenerateButton">GENERUJ PROJEKT</button>
        </PushUp>
          </div>
        </form>
      </div>
    );
  }
}

export default BoardGeneratorForm;
