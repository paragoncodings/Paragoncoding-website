import React from 'react'
// import Services from './Services/Services'
import FeatureSection from './FeatureSection/FeatureSection'
import Timeline from './Timeline/Timeline'
import MainSec from './Technology/MainSec'
// import WhatsAppButton from './Home/WhatsAppButton'

import HeroSection from './Home/HeroSection'

import AboutSection from './Home/AboutSection'
// import Project from './Projects/Project'
// import Team from './Team/Team'
import TeamSection from './Team/TeamSection'
import AllServices from './Services/AllServices'
import HomeProjects from './Projects/HomeProjects'
// import Footer from '../Footer/Footer'


const Home = () => {
  return (
    <div className=''>
       <HeroSection/>
      <AboutSection/> 
       
        <HomeProjects />
        <AllServices/>
        <TeamSection />
        <FeatureSection/>
        <Timeline/>
        <MainSec />

      
      
    </div>
  )
}

export default Home