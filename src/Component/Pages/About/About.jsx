import React from 'react'
import About2 from './About2'
import About1 from './About1'
import PageTitle from '../PageTitle'
import AboutSection from '../Home/AboutSection'
import Footer from '../../Footer/Footer'

const About = () => {
  return (
    <>
     <PageTitle title="ABOUT US"/>
      <AboutSection/>
     <About1/>
      <About2/> 
      <Footer/>
    </>
  )
}

export default About
