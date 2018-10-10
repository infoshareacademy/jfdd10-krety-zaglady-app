import React, { Component } from 'react'

const range = length => Array.from({ length }, (_, i) => i)

class GridView extends Component {

  state = {
    size: 5,
    fields: {
      0: {
        0: 'tree',
        4: 'tree'
      },
      1: {
        2: 'pond'
      },
      4: {
        4: 'pond'
      }
    }
  }

  render() {

    const rows = range(this.state.size);
    const grid = rows.map(
      y => (
        <tr>
          {
            range(this.state.size).map(
              x => (
                <td style={{ border: '1px solid black' }}>
                  {x}, {y}
                  {this.state.fields[y] && this.state.fields[y][x]}
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

export default GridView