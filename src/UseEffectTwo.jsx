import React, { useState, useEffect } from 'react';

function UseEffectTwo() {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        console.log("EVENT LISTENER ADDED");

        return() => {
            // BEFORE NEXT RE-RENDER OR WHEN COMPONENT UNMOUNTS (CLEANUP)
            window.removeEventListener("resize", handleResize);
            console.log("EVENT LISTENER REMOVED");
        }
    }, []);

    useEffect(() => {
        document.title = `Size: ${width} x ${height}`;
    }, [width, height])

    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(<>
        <p>Window Width: {width}px</p>
        <p>Window Height: {height}px</p>
    </>)
};

export default UseEffectTwo;