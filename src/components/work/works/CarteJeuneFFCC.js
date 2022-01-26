import React from 'react'
import Preloader from '../../preloader'
import { Carousel } from 'react-carousel-minimal'

const CarteJeuneFFCC = () => {

  const data = [
    { image: '../images/cartejeuneffcc1.jpg' },
    { image: '../images/cartejeuneffcc2.jpg' },
    { image: '../images/cartejeuneffcc3.jpg' },
  ]

  return (
    <div className="portfolio">
      <Preloader/>
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
                    cursor="none"
          />
        </div>
        <div className="content">
          <div className="left">
            <p>
              <u>Organisation</u> : French federation of Camargaise race
              <br/><br/>
              <u>Project leader</u> : ROMAND Gil
              <br/><br/>
              <u>Developers</u> : Feliiks
            </p>
          </div>
          <div className="right">
            <p>
              <u>Frameworks</u> : Angular / Node.js - Express.js
              <br/><br/>
              <u>Languages</u> : Html, sass, JavaScript, Typescript
              <br/><br/>
              <u>Utility</u> : Website (youth card) of the French Federation of Camargue Race
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarteJeuneFFCC