import React from 'react';
import NavBar from '../NavBar/NavBar';
import "./Header.css"

const Header = () => {
    return (
        <div>
            {/* call navigation bar */}
            <NavBar />
            <div className="text-center header">
                <h3>Make a Programmer Club</h3>
                <h5>
                    "Programming isn't about what you know; it's about what you can figure out."
                </h5>
                <h3>Total Budget: 50+ Million</h3>
            </div>
        </div>
    );
};

export default Header;