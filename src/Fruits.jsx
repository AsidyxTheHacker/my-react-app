export default function Fruits() {

    const fruits = ['Apple', 'Mango', 'Banana', 'Orange', 'Pineapple'];

    return(
    <div>
        <ul>
            {fruits.map((f) => <li key={f}>{f}</li>)}
        </ul>
    </div>
    )
};