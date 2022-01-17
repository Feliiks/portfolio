import React from 'react';
import Navigation from '../../components/Navigation';
import Preloader from '../../components/Preloader';
import { Carousel } from 'react-carousel-minimal';

const Meteo = () => {

    const data = [
        {image: "./images/meteo1.jpg"},
        {image: "./images/meteo2.jpg"},
        {image: "./images/meteo3.jpg"} 
    ]

    return (
        <div className="app-meteo">
            <Navigation />
            <Preloader />
            <div className="up">
                <div className="fond">
                    <Carousel className="carousel"
                        data={data}
                        time={4000}
                        width="300px"
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
                            <u>Organisation</u> : me
                            <br /><br />
                            <u>API's</u> : OpenWeather
                            <br /><br />
                            <u>Developers</u> : Me
                        </p>
                    </div>
                    <div className="right">
                        <p>
                            <u>Frameworks</u> : React.js
                            <br /><br />
                            <u>Languages</u> : Html, sass, JavaScript
                            <br /><br />
                            <u>Utility</u> : To improve my skills
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Meteo;