import React, { Component } from 'react';
import './App.css';
import ProjectBoard from './components/ProjectBoard/ProjectBoard'
import Test from './Test/Test'

class App extends Component {
  render() {

    return (
      <div>
        <ProjectBoard />
        <div>
          <Test />
        </div>
      </div>
    );
  }
}

export default App;
