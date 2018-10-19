import React, { Component } from "react";
import "./ProjectBoard.css";

const range = length => Array.from({ length }, (_, i) => i);

class ProjectBoard extends Component {
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
      <table>
        <tbody>{grid}</tbody>
      </table>
    );
  }
}

export default ProjectBoard;
