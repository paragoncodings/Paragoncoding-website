import React, { useEffect } from 'react';
import { FaMapMarkerAlt, FaCircle } from 'react-icons/fa';
import strategyImage from './../../../assets/home-concept-item-1.png';
import planningImage from './../../../assets/home-concept-item-2.png';
import buildImage from './../../../assets/home-concept-item-3.png';
import workImage from './../../../assets/project-home-1.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Timeline = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  const steps = [
    { id: 1, title: 'Strategy', image: strategyImage, isLarge: false },
    { id: 2, title: 'Planning', image: planningImage, isLarge: false },
    { id: 3, title: 'Build', image: buildImage, isLarge: false },
    { id: 4, title: 'Our Work', image: workImage, isLarge: true },
  ];

  // Array of positions for the wave effect
  const wavePositions = [
    'top-0 left-10', 'top-2 left-20', 'top-4 left-32', 'top-2 left-44', 
    'top-0 left-56', 'top-2 left-68', 'top-4 left-80', 'top-2 left-92', 'top-0 right-10'
  ];

  return (
    <div className="relative flex flex-col items-center overflow-hidden p-8 bg-white" >
      {/* Left and Right Icons */}
      <FaMapMarkerAlt className="absolute top-1/2 left-4 text-dark text-3xl transform -translate-y-1/2 z-10" />
      <FaMapMarkerAlt className="absolute top-1/2 right-4 text-dark text-3xl transform -translate-y-1/2 z-10" />

      {/* Wavy Line using Icons */}
      <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex items-center justify-between w-full">
        {wavePositions.map((position, index) => (
          <FaCircle
            key={index}
            className={`text-gray-300 text-xs ${position} transform`}
          />
        ))}
      </div>

      {/* Steps */}
      <div className="flex items-center space-x-12"data-aos="fade-up-left">
        {steps.map((step, index) => (
          <div key={step.id} className="relative text-center">
            <div className="flex flex-col items-center">
              <div
                className={`${
                  step.isLarge ? 'w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56' : 'w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32'
                } rounded-full overflow-hidden border-4 border-green shadow-xl mb-3 transition-transform transform hover:scale-110`}
              >
                <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
              </div>
              <p className={`${step.isLarge ? 'text-xl md:text-2xl lg:text-3xl font-bold' : 'text-lg md:text-xl'} text-blue hover:text-green font-semibold`}>
                {step.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
