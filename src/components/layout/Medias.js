import React from 'react';
import { IconContext } from "react-icons";
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';

function Medias() {
    return (
        <div className="medias">
            <IconContext.Provider value={{ className: "media-icons" }}>
                <FaFacebook />
                <FaInstagram />
                <FaDiscord />
            </IconContext.Provider>
        </div>
    );
}

export default Medias;