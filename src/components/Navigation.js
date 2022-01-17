import React, { useState } from 'react';
import Logo from './Logo';
import Navbar from './Navbar';
import Medias from './Medias';

function Navigation() {

// ........... Responsive de la navbar ..........
    const [navStatut, setNavStatut] = useState(false);

    const changeNavStatut = () => {
        setNavStatut(!navStatut);
        changeNavbar();
    }

    const changeNavbar = () => {
        let nav = document.getElementById('navbar-g');
        if (navStatut === false) {
            nav.style.visibility = "visible";
            nav.style.opacity = "1";
        } else {
            nav.style.visibility = "hidden";
            nav.style.opacity = "0";
        }
    }
// ......................................................


    return (
        <div className="navigation">
            <div className="navbar-g" id="navbar-g">
                <Logo />
                <Navbar />
                <Medias />
            </div>
            <div className="burger" onClick={changeNavStatut}>
                <div className="line-1"></div>
                <div className="line-2"></div>
                <div className="line-3"></div>
            </div>
        </div>
    );
};

export default Navigation;