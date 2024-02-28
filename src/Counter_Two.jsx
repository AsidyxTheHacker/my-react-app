import React, { useState } from 'react';

export default function Counter_Two() {
    const [count, setCount] = useState(0);
    const [incrementBy, setIncrementBy] = useState(1);

    function handleClickAdd() {
        setCount((c) => c + incrementBy);
    }

    function handleClickSub() {
        setCount((c) => c - incrementBy);
    }

    function increaseIncrement() {
        setIncrementBy((i) => i + 1);
    }

    function decreaseIncrement() {
        setIncrementBy((i) => i - 1);
    }

    return(<>
        <div>
            <h1>Count Value is: {count}</h1>
            <button onClick={handleClickAdd}>Add</button>
            <button onClick={handleClickSub}>Sub</button>

            <h1>We are incremementing the value by: {incrementBy}</h1>
            <button onClick={increaseIncrement}>Increase</button>
            <button onClick={decreaseIncrement}>Decrease</button>
        </div>
    </>)
};