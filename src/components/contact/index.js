import React from 'react'
import ContactContent from './ContactContent'
import Layout from '../layout/Layout'
import Preloader from '../preloader'

const Index = () => {

  return (
    <div className="contact">
      <Preloader/>
      <ContactContent/>
      <Layout name="Contact"/>
    </div>
  )
}

export default Index