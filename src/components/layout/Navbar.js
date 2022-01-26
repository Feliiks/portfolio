import React from 'react';
import { NavLink } from 'react-router-dom';


function Navbar() {
    return (
        <div className="navbar">
            <NavLink className="nav-link" exact to="/about-me">
                About
            </NavLink>
            <NavLink className="nav-link" exact to="/my-skills">
                My skills
            </NavLink>
            <NavLink className="nav-link" exact to="/my-work">
                Work
            </NavLink>
            <NavLink className="nav-link" exact to="/contact">
                Contact
            </NavLink>
            <NavLink className="nav-link-game" exact to="/lets-play">
                Let's play
            </NavLink>
        </div>
    );
};

export default Navbar;
