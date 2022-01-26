import React from 'react'
import Preloader from '../../preloader'
import { Carousel } from 'react-carousel-minimal'

const AndreaNaturo = () => {

  const data = [
    { image: '../images/andrea1.jpg' }
  ]

  return (
    <div className="app-meteo">
      <Preloader/>
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
                    cursor="none"
          />
        </div>
        <div className="content">
          <div className="left">
            <p>
              <u>Organisation</u> : Andrea Naturopathie
              <br/><br/>
              <u>Project leader</u> : Feliiks
              <br/><br/>
              <u>Developers</u> : Feliiks
            </p>
          </div>
          <div className="right">
            <p>
              <u>Frameworks</u> : React.js, Node.js - Express.js
              <br/><br/>
              <u>Languages</u> : Html, Css, Sass, JavaScript
              <br/><br/>
              <u>Utility</u> : Website of naturopath Andrea Sobrero
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AndreaNaturo