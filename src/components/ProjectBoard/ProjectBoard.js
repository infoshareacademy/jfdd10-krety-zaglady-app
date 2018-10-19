import React, { Component } from "react";
import "./ProjectBoard.css";
import posed from "react-pose";

const PushUp = posed.div({
  idle: { scale: 1 },
  hovered: { scale: 1.5 }
});


const range = length => Array.from({ length }, (_, i) => i);

class ProjectBoard extends Component {
  state = { 
    hovering: false,
    active: false
  };
  
 

  render() {
    const rows = range(this.props.size);
    const grid = rows.map(y => (
      <tr>
        {range(this.props.size).map(x => (
          <td
            className={
              "cell " + (this.props.fields[y] && this.props.fields[y][x])
            }
            style={{
              border: this.props.editable
                ? "1px solid black"
                : "5px solid black"
            }}
          >
            {/* {x}, {y} wyświetla pozycje x,y w danej cell */}
            {/* {this.props.fields[y] && this.props.fields[y][x]} wyswietla nazwe z tablicy cell z klasa*/}
          </td>
        ))}
      </tr>
    ));

    return (
      <PushUp
      pose={this.state.hovering ? "hovered" : "idle"}
          onMouseEnter={() => this.setState({ hovering: true })}
          onMouseLeave={() => this.setState({ hovering: false })}
          
        >
      <table>
        <tbody>{grid}</tbody>
      </table>
      </PushUp>
    );
  }
}

export default ProjectBoard;
