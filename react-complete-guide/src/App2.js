import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

{/* Not Using React Hooks */ }

class App extends Component {

    state = {
        persons: [
            { name: "Raul", age: 23 }
        ]
    }

    testHandler = () => {
        console.log('Clicked!');

        this.setState({
            persons: [
                { name: "Raul Jr", age: 27 }
            ]
        })
    }

    render() {
        return (
            <div className="App">
                <h1>Testing</h1>

                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />

                <button onClick={this.testHandler}>Test</button>

            </div>
        )
    }
}

export default App;
