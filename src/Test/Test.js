import React, { Component } from 'react'

class Test extends Component {

    state = {
        title: 'Test'
    }

    render() {
        return (
            <div>
                {this.state.title}
            </div>
        )
    }
}

export default Test