import React, { Component } from "react";
import "./BoardLegend.css";

const dictionary = {
  tomato: 'pomidory',
  carrot: 'marchew',
  apple: 'jabłoń',
  plum: 'śliwa',
  cherry: 'wiśnia',
  pear: 'grusza',
  broccoli: 'brokuły',
  blueberries: 'jagody',
  tree: 'drzewo'
}
class BoardLegend extends Component {
  render() {
    return (
        <div className="FruitLegendBox" BoardLegend-fruitIcon>
          <div className="BoardLegend-fruitIcon">
            {Object.entries(this.props.fruits || dictionary)
              .map(([key, value]) => {
                return { key, value };
              })
              .map(fruit => {
                return (
                  <div>
                  <div className={fruit.key} id="fruIco">
                  </div>
                    <span className="SpanName">{typeof fruit.value === 'string' ? fruit.value : dictionary[fruit.key]}</span>
                  </div>
                );
              })}
          </div>
        </div>
    );
  }
}

export default BoardLegend;
