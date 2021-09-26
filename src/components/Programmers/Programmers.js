import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Programmer from '../Programmer/Programmer';
import './Programmers.css'

const Programmers = () => {
    // declare sates 
    const [programmers, setProgrammers] = useState([]);
    const [cart, setCart] = useState([]);

    // load fake data 
    useEffect(() => {
        fetch("/persons.json")
            .then(res => res.json())
            .then(data => setProgrammers(data))
    }, [])

    // handle add to cart button 
    const handleAddToCart = (programmer) => {
        const newCart = [...cart, programmer];
        setCart(newCart);
        console.log(newCart);
    }
    return (
        <div className="row">
            <div className="col-md-9">
                <div className="row gy-5">
                    {
                        programmers.map(programmer => <Programmer
                            programmer={programmer}
                            key={programmer.id}
                            handleAddToCart={handleAddToCart}>
                        </Programmer>)
                    }
                </div>
            </div>
            <div className="col-md-3">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Programmers;