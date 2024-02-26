export default function Fruit({ name, price, emoji }) {

    return(
        // <li>{emoji} {name} ${price}</li>
        // <li>{price > 5 ? <h3>{emoji} {name} ${price}</h3> : ""}</li>
        <>
            {price > 5 ? <li>{emoji} {name} ${price}</li> : ""}
        </>
    )
};