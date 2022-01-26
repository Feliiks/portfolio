import React from 'react';
import { Link } from 'react-router-dom';
import imgLogo from '../../assets/images/img-logo.png';

function Logo() {
    return (
        <div className="logo">
            <Link to="/"><img src={imgLogo} alt="logo" height="70" /></Link>
            <span> Ludovic </span>
            <p> Computer development student</p>
        </div>
    );
};

export default Logo;