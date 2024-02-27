import React, { useState } from 'react';

export default function Counter_Two() {
    const [count, setCount] = useState(0);

    function handleClickAdd() {
        setCount((c) => c + 1)
    }

    function handleClickSub() {
        setCount((c) => c - 1)
    }

    return(<>
        <div>
            <h1>Count Value is: {count}</h1>
            <button onClick={handleClickAdd}>Add</button>
            <button onClick={handleClickSub}>Sub</button>
        </div>
    </>)
};