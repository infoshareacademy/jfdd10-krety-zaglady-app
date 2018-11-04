import React, { Component } from "react";
import "./ProjectBoard.css";


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
              "cell " + (this.props.fields && this.props.fields[y] && this.props.fields[y][x])
            }
            style={{
              border: this.props.editable
                ? "1px solid black"
                : "5px solid black"
            }}
            
          >
          </td>
        ))}
      </tr>
    ));

    return (
      <div
      pose={this.state.hovering ? "hovered" : "idle"}
          onMouseEnter={() => this.setState({ hovering: true })}
          onMouseLeave={() => this.setState({ hovering: false })}
          
        >
      <table>
        <tbody>{grid}</tbody>
      </table>
      </div>
    );
  }
}

export default ProjectBoard;
