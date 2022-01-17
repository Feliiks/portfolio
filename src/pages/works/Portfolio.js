import React from 'react';
import Navigation from '../../components/Navigation';
import Preloader from '../../components/Preloader';
import { Carousel } from 'react-carousel-minimal';

const Portfolio = () => {

    const data = [
        {image: "./images/portfolio1.jpg"},
        {image: "./images/portfolio2.jpg"},
        {image: "./images/portfolio3.jpg"} 
    ]

    return (
        <div className="portfolio">
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
                            <u>Organisation</u> : Me
                            <br /><br />
                            <u>Project leader</u> : Me
                            <br /><br />
                            <u>Developers</u> : Me, me
                        </p>
                    </div>
                    <div className="right">
                        <p>
                            <u>Frameworks</u> : React.js
                            <br /><br />
                            <u>Languages</u> : Html, sass, JavaScript
                            <br /><br />
                            <u>Utility</u> : My portfolio, to give you pleasure
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;