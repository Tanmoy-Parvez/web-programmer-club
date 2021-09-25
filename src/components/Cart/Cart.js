import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    const { cart } = props;
    const total = cart.reduce((prevValue, currValue) => prevValue + currValue.salary, 0)
    return (
        <div>
            <h4>Selected Programmers: {cart.length}</h4>
            <p>Total: {total}</p>
            <ul>
                {
                    cart.map(person => <li>{person.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Cart;