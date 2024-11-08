import React, { Fragment } from 'react';
import img from '/assets/mobilepic.png';
import StatsSection from './StatsSection';
import TechnologiesSlider from './TechnologiesSlider';

const MainSec = () => {
  return (
    <Fragment>
      <div className='w-full h-lvh'>
        <div className='text-center py-10 text-blue border-b-4 border-t-4 border-green bg-dark w-full h-[20%]'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-4xl mb-24'>
            We are One Step Solution Providers
          </h1>
          <img 
            src={img} 
            alt=""  
            className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-4xl mx-auto py-10"
          />
          <StatsSection />
          <TechnologiesSlider />
        </div>
      </div>
    </Fragment>
  );
}

export default MainSec;
