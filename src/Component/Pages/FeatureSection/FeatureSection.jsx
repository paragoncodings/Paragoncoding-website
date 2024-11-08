import React from 'react';
import { FaCheckCircle, FaClock, FaGlobe, FaAnchor } from 'react-icons/fa';
import codingImage from '../../../assets/Working.png'; // Make sure to replace with the actual path to your image

const FeatureSection = () => {
  const features = [
    {
      id: 1,
      icon: <FaCheckCircle className="text-white text-3xl hover:text-green" />,
      title: 'QUALITY PRODUCTS',
      description:
        'We believe in Software Quality that is essential to deliver the product on time and on the required quality.',
    },
    {
      id: 2,
      icon: <FaClock className="text-white text-3xl hover:text-green" />,
      title: 'TIMELY WORK',
      description:
        'We always plan the Project Development schedule for deploying the Project on time with all completed requirements.',
    },
    {
      id: 3,
      icon: <FaGlobe className="text-white hover:text-green text-3xl  " />,
      title: 'RELIABILITY',
      description:
        'Failure Free Products are our main target. We always develop the most reliable Products without any failure issue on future.',
    },
    {
      id: 4,
      icon: <FaAnchor className="text-white text-3xl hover:text-green" />,
      title: 'MAINTAINABLE',
      description:
        'Our Products are fully maintainable for the injection of any new Functionality or Requirement.',
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center bg-dark text-white p-8 border-green border-t-4 border-b-4">
      <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 lg:mb-0">
        {features.map((feature) => (
          <div key={feature.id} className="flex items-start space-x-4">
            <div>{feature.icon}</div>
            <div>
              <h3 className="font-semibold text-lg text-green">{feature.title}</h3>
              <p className="text-blue">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full lg:w-1/2">
        <img
          src={codingImage}
          alt="Coding"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default FeatureSection;
