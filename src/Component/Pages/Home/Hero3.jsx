import React from 'react';
import bgimage1 from '../../../assets/hero.png';

const Hero3 = () => {
  return (
    <div 
      className="relative bg-cover bg-center h-[40rem] w-full" 
      style={{ backgroundImage: `url(${bgimage1})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-6 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-[#7CFC0A]">
          Software Development
        </h1>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-[#73FAF9]">
          We Focus on Quality
        </h1>
        <p className="text-base md:text-lg max-w-md lg:max-w-2xl">
          We work together with our Clients to build a compelling product that provides lasting excitement and value to our customers.
        </p>
      </div>
    </div>
  );
}

export default Hero3;
