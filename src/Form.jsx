import React, { useState } from 'react';

export default function Form() {

    const [person, setPerson] = useState({ firstName: "", lastName: "", age: 0 });

    function handleSubmit(e) {
        e.preventDefault();
        console.log(person);
    };

    return(<>
    <div>
        <form>
            <input onChange={(e) => setPerson({...person, firstName: e.target.value})} 
                type="text" 
                value={person.firstName} 
                placeholder="First Name" /><br></br>
            <input onChange={(e) => setPerson({...person, lastName: e.target.value})} 
                type="text" 
                value={person.lastName} 
                placeholder="Last Name" /><br></br>
            <input onChange={(e) => setPerson({...person, age: e.target.value})} 
                type="number" 
                value={person.age} 
                placeholder="Age" /><br></br>
                <button onClick={(e) => handleSubmit(e)}>Submit</button>
            <h1>Hello, {person.firstName} {person.lastName}</h1>
            <h2>You are {person.age} years old</h2>
        </form>
    </div>
    </>)
};