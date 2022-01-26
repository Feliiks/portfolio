import React from 'react'
import AboutContent from './AboutContent'
import Preloader from '../preloader'
import Layout from '../layout/Layout'

const Index = () => {

  return (
    <div className="about">
      <Preloader/>
      <AboutContent/>
      <Layout name="About"/>
    </div>
  )
}

export default Index