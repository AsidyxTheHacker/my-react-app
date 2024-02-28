import React, { useState } from 'react';

export default function Form() {

    const [name, setName] = useState("");

    function handleChange(e) {
        setName(e.target.value)
    }

    return(<>
    <div>
        <form>
            <input onChange={handleChange} type="text" value={name} placeholder="Name"/>
            <h1>Hello, {name}</h1>
        </form>
    </div>
    </>)
};