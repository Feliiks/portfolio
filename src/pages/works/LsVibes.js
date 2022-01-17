import React from 'react';
import Navigation from '../../components/Navigation';
import Preloader from '../../components/Preloader';
import { Carousel } from 'react-carousel-minimal';

const LsVibes = () => {

    const data = [
        {image: "./images/lsvibes1.jpg"},
        {image: "./images/lsvibes2.jpg"},
        {image: "./images/lsvibes3.jpg"} 
    ]

    return (
        <div className="lsvibes">
            <Navigation />
            <Preloader />
            <div className="up">
                <div className="fond">
                    <Carousel className="carousel"
                        data={data}
                        time={4000}
                        width="1090px"
                        height="auto"
                        radius="5px"
                        slideNumber={true}
                        captionPosition="bottom"
                        automatic={true}
                        dots={true}
                        slideImageFit="cover"
                        cursor='none'
                    />
                </div>
                <div className="content">
                    <div className="left">
                        <p>
                            <u>Organisation</u> : lsvibes.fr
                            <br /><br />
                            <u>Project leader</u> : Leito
                            <br /><br />
                            <u>Developers</u> : Flydexo, Feliiks
                        </p>
                    </div>
                    <div className="right">
                        <p>
                            <u>Frameworks</u> : React.js, Node.js
                            <br /><br />
                            <u>Languages</u> : Html, sass, JavaScript
                            <br /><br />
                            <u>Utility</u> : website for game server.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LsVibes;