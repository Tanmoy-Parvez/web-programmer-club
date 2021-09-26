import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    // destructuring 
    const { cart } = props;
    // using reduce method
    const total = cart.reduce((prevValue, currValue) => prevValue + currValue.salary, 0)
    return (
        <div className=" cart">
            <h5>
                <i class="fas fa-users"></i> Selected Programmers: {cart.length}
            </h5>
            <p><i class="fas fa-coins"></i> Total Amount: {total}</p>
            {/* selected names */}
            <div>
                {
                    cart.map(person => <p> <i class="fas fa-user"></i> {person.name}</p>)
                }
            </div>
        </div>
    );
};

export default Cart;