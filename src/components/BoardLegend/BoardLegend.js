import React, { Component } from "react";
import "./BoardLegend.css";



class BoardLegend extends Component {






    render() {
        return (
<div className="BoardLegend">
    <div className="BordLegendFruit">
        <div className="FruitIcon Carrot"> </div>
        <div className="FruitName Carrot"></div>
    </div>
    <div className="BordLegendFruit">
    <div className="FruitIcon AppleIcon"></div>
        <div className="FruitName Apple"></div>
    </div>
    <div className="BordLegendFruit">
    <div className="FruitIcon Orange"></div>
        <div className="FruitName Orange"></div>
    </div>
</div>
        );
    }
}


           
      

export default BoardLegend;