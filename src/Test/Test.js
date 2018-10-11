import React, { Component } from 'react'

class Test extends Component {
    state = {
        items: []
      }
    
      componentDidMount() {
        fetch('/data/garden.json').then(
          response => response.json()
        ).then(
          arrayOfItems => this.setState({ items: arrayOfItems })
        )
      }

    render() {
        return (
            <div>
                this.state.id
            </div>
        )
    }
}

export default Test