import React, {useState} from 'react';

function Change() {

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState();
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Delivery");

    function handleNameChange(event) {
        setName(event.target.value);
    };

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    };

    function handleCommentChange(event) {
        setComment(event.target.value);
    };

    function handlePaymentChange(event) {
        setPayment(event.target.value);
    };

    function handleShippingChange(event) {
        setShipping(event.target.value);
    };

    return(
        <div>
            <input value={name} onChange={handleNameChange} type="text" />
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type="number" />
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder="Enter delivery instructions"></textarea>
            <p>Comment: {comment}</p>

            <label >Select Payment Option:</label>
            <select value={payment} onChange={handlePaymentChange}>
                <option value="Giftcard">Giftcard</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value="Pick Up" checked={shipping === "Pick Up"}
                onChange={handleShippingChange}/>
                Pick Up
            </label><br></br>
            <label>
            <input type="radio" value="Delivery" checked={shipping === "Delivery"}
                onChange={handleShippingChange}/>
                Delivery
            </label>
            <p>Shipping Method: {shipping}</p>
        </div>
    );
}

export default Change;