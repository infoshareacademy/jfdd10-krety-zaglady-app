import React, { Component } from 'react'
import './ProjectBoard.css'

const range = length => Array.from({ length }, (_, i) => i)

class ProjectBoard extends Component {


  render() {
    const rows = range(this.props.size);
    const grid = rows.map(
      y => (
        <tr>
          {
            range(this.props.size).map(
              x => (
                <td class='cell' style={{ border: this.props.editable ? '1px solid black' : '5px solid black' }}>
                  {/* Pozycja wyswietlana w tablicy - do umieszczenia obrazek zastepczy / dodac plik css osobny dla fields */}
                  {x}, {y}
                  {this.props.fields[y] && this.props.fields[y][x]}
                </td>
              )
            )
          }
        </tr>
      )
    )

    return (
      <table>
        <tbody>
          {grid}
        </tbody>
      </table>
    )
  }
}

export default ProjectBoard