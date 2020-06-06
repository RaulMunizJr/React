import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Testing</h1>

        <Person name="Raul" age="23" />
        <Person />

      </div>
    )
  }
}

export default App;
