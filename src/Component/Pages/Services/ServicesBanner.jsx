import React from 'react';
import services1 from '../../../assets/services1.png';

const ServicesBanner = ({title}) => {
  return (
    <div
      className="w-full h-32 flex items-center justify-center bg-cover bg-center m-0"
      style={{ backgroundImage: `url(${services1})` }}
    >
      <h1 className="text-blue text-2xl font-bold">{title}</h1>
    </div>
  );
};

export default ServicesBanner;
