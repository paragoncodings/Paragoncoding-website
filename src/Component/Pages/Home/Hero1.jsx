import React from 'react';
import bgimage1 from '../../../assets/hero3.png';

const Hero1 = () => {
  return (
    <div 
      className="relative bg-cover bg-center h-[40rem] w-full" 
      style={{ backgroundImage: `url(${bgimage1})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-6 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#7CFC0A]">
          Welcome to Paragon Codings
        </h1>
        <p className="text-base md:text-lg max-w-md lg:max-w-2xl">
          At Paragon Codings, we specialize in delivering high-quality web and app development services to help your business thrive in the digital world.
        </p>
      </div>
    </div>
  );
}

export default Hero1;
