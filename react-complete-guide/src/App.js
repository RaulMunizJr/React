import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

{/* Using React Hooks */ }

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons:
      [
        { name: "Raul", age: 23 }
      ]
  });

  console.log(personsState);

  const testHandler = () => {
    console.log('Clicked!');

    setPersonsState({
      persons: [
        { name: "Raul Jr", age: 25 }
      ]
    });
  };

  return (
    <div className="App">
      <h1>Testing</h1>

      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />

      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}
        click={testHandler}>
      </Person>

      <button onClick={testHandler}>Test</button>

    </div>
  );

};

export default App;