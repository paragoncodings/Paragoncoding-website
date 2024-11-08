import React from 'react';
import bgimge from './../../assets/page.png';
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

const PageTitle = ({title}) => {
  return (
    <div
      className="relative w-full h-[22rem]"
      style={{
        backgroundImage: `url(${bgimge})`,
        backgroundSize: 'cover',       // Ensures the image fully covers the div
        backgroundPosition: 'center',  // Centers the image within the div
        backgroundRepeat: 'no-repeat', // Prevents the image from repeating
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
      
      {/* Text */}
      <div className="relative flex justify-center items-center h-full  text-[#78FDFF] text-xl font-bold">
        <Link className=''>HOME</Link>
          <span className='text-[#99FF00]'><IoIosArrowForward size={30}/></span>
           <h1>{title}</h1>
      </div>
    </div>
  );
};

export default PageTitle;
