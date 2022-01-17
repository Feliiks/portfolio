import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedLine from './animations/AnimatedLine';
import HomeTitle from './animations/HomeTitle';
import BtnContact from './BtnContact';


function Wbox() {
    return (
        <div className="Wbox">
            <HomeTitle />
            <AnimatedLine />
            <Link to="/contact"><BtnContact /></Link>
        </div>
    );
}

export default Wbox;