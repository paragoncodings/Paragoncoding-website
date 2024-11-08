import React from 'react';
import bgimage1 from '../../../assets/hero2.png';

const Hero2 = () => {
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
          Web Development
        </h1>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-[#73FAF9]">
          Responsive & Reliable
        </h1>
        <p className="text-base md:text-lg max-w-md lg:max-w-2xl">
          We Plan, Design, & Develop Websites from start to finish, ensuring a high ROI for clients.
        </p>
      </div>
    </div>
  );
}

export default Hero2;
