function Event() {

    const handleClick = (e) => e.target.textContent = "OUCH!";

    return(
        <>
        <button onClick={(e) => handleClick(e)}>Click Me</button>
        </>
    );
};

export default Event;