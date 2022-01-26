import React, { useEffect, useRef } from 'react'

const images = [
  '../images/html.svg',
  '../images/css.svg',
  '../images/javascript.svg',
  '../images/bootstrap.svg',
  '../images/reactjs.svg',
  '../images/sass.svg',
  '../images/nodejs.svg',
  '../images/git.svg'
]

const AboutSlider = () => {
  const slide = useRef()
  useEffect(() => {
    const interval = setInterval(() => {
      let randomImage = images[Math.floor(Math.random() * 8)]
      slide.current.style.backgroundImage = `url(${randomImage})`
    }, 1500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="AboutSlider">
      <div className="slider-container">
        <div className="base"/>
        <div ref={slide} className="slide" id="slide"
             style={{ backgroundImage: `url(${images[0]})` }}/>
      </div>
    </div>
  )
}

export default AboutSlider