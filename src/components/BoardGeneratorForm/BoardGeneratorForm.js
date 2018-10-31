import React, { Component } from "react";

import "./BoardGeneratorForm.css";



class BoardGeneratorForm extends Component {
  
  
  state = {
    authorId: "",
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
      bluberries: null,
      broccoli: null,
      tomato: null,
      carrot: null
    },
    fields: {
      0: {
        3: "tree",
        4: "tree"
      },
      3: {
        1: "pond"
      },
      2: {
        2: "pond"
      }
    }
  };


  
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

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
                value={this.state.userDescriptionTitle}
                onChange={this.handleInputChange}
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
                onChange={this.handleInputChange}
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
                onChange={this.handleInputChange}
              />
            </label>
            <span>{this.state.size} rzędów i kolumn</span>
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
                <input type="checkbox" name="cherry" onChange={this.handleInputChange}/>
              </label>
              <label name="apple">
                <img src="https://cdn3.iconfinder.com/data/icons/fruits-8/512/apple-512.png" />
                <input type="checkbox" name="apple" onChange={this.handleInputChange}/>
              </label>
              <label name="plum">
                <img src="https://cdn3.iconfinder.com/data/icons/fruits-52/150/icon_fruit_ameixa-512.png" />
                <input type="checkbox" name="plum" onChange={this.handleInputChange}/>
              </label>
              <label name="pear">
                <img src="https://cdn1.iconfinder.com/data/icons/fresh-fruit-2/128/pear-512.png" />
                <input type="checkbox" name="pear" onChange={this.handleInputChange}/>
              </label>
              <label name="blueberries">
                <img src="https://cdn3.iconfinder.com/data/icons/spring-2-1/30/Black_Berries-512.png" />
                <input type="checkbox" name="blueberries" onChange={this.handleInputChange}/>
              </label>
            </div>
            <div className="BoardGeneratorForm-vegetableContainer">
              <label name="broccoli">
                <img src="https://cdn4.iconfinder.com/data/icons/breakfast-14/48/broccoli-512.png" />
                <input type="checkbox" name="broccoli" onChange={this.handleInputChange}/>
              </label>
              <label name="tomato">
                <img src="https://cdn3.iconfinder.com/data/icons/veggies/512/tomato.png" />
                <input type="checkbox" name="tomato" onChange={this.handleInputChange}/>
              </label>
              <label name="carrot">
                <img src="https://cdn3.iconfinder.com/data/icons/spring-23/32/carrot-vegetable-spring-food-512.png" />
                <input type="checkbox" name="carrot" onChange={this.handleInputChange}/>
              </label>
            </div>
            <div className="BoardGeneratorForm-selectAll">
              <label name="checkAllFriuits">
                <span>Zaznacz wszystko</span>
                <input type="checkbox" name="checkAllFriuits" />
              </label>
              <label name="uncheckAllFriuits">
                <span>Odznacz wszystko</span>
                <input type="checkbox" name="uncheckAllFriuits" />
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
