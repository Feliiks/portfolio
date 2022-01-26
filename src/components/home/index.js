import React from 'react'
import Wbox from './Wbox'
import Preloader from '../preloader'
import Layout from '../layout/Layout'

const Index = () => {
  return (
    <div className="home">
      <Preloader/>
      <Wbox/>
      <Layout name="Home"/>
    </div>
  )
}

export default Index