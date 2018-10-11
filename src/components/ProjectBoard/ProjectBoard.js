import React, { Component } from 'react'

const range = length => Array.from({ length }, (_, i) => i)

class ProjectBoard extends Component {


  state = {
    garden: {}
  }

  componentDidMount() {
    fetch('/data/garden.json').then(
      response => response.json()
      )
      .then(data => this.setState({ garden: data }))
  }
      
      render() {
        const rows = range(this.state.garden.size);
        const grid = rows.map(
          y => (
        <tr>
          {
            range(this.state.garden.size).map(
              x => (
                <td style={{ border: '1px solid black' }}>
                  {x}, {y}
                  {this.state.garden.fields[y] && this.state.garden.fields[y][x]}
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
            {this.state.garden.name}
      </table>
    )
  }
}

export default ProjectBoard