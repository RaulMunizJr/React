import React from 'react';

{/* App2
const Person = (props) => {
    return <p>I'm {props.name} and I am {props.age} years old!</p>
};

export default Person;
*/}

const Person = (props) => {
    return (
        <div>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.child}</p>
        </div>
    )
};

export default Person;