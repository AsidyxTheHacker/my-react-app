
function Button() {

    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        fontWeight: "bold",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        fontSize: "40px",
    }

    return(<button style={styles}>Click Me</button>);
}

export default Button;