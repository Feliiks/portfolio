import React from 'react';
import { Link } from 'react-router-dom';

function Logo() {
    return (
        <div className="logo">
            <Link to="/"><img src="./images/img-logo.png" alt="logo" height="70" /></Link>
            <span> Ludovic </span>
            <p> Computer development student</p>
        </div>
    );
};

export default Logo;