import React from 'react'
import Layout from '../layout/Layout'
import WorkContent from './WorkContent'
import Preloader from '../preloader';


const Index = () => {
  return (
    <div className="work">
      <Preloader />
      <WorkContent/>
      <Layout name="Work"/>
    </div>
  )
}

export default Index
