import React from 'react'
import SkillsContent from './SkillsContent'
import Preloader from '../preloader'
import Layout from '../layout/Layout'

const Index = () => {

  return (
    <div className="skills">
      <Preloader/>
      <SkillsContent/>
      <Layout name="Skills"/>
    </div>
  )
}

export default Index