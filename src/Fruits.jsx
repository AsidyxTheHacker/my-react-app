import Fruit from './Fruit'

export default function Fruits() {

    const fruits = [
        { name: "Apple", price: 10, emoji: "🍎" },
        { name: "Mango", price: 7, emoji: "🥭" },
        { name: "Banana", price: 2, emoji: "🍌" },
        { name: "Orange", price: 5, emoji: "🍊" },
        { name: "Pineapple", price: 8, emoji: "🍍" },
    ];

    return(
    <div>
        <ul>
            {fruits.map((f) => <Fruit 
            key={f.name} 
            name={f.name} 
            price={f.price} 
            emoji={f.emoji} 
            />)}
        </ul>
    </div>
    )
};