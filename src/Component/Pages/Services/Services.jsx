import React, { useEffect } from 'react';

import AIServiceCard from './AIServiceCard';
import services from './ServicesData'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <>
   
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 " data-aos="fade-right">
        {services.map((service) => (
          <AIServiceCard 
            key={service.id}
            title={service.title}
            description={service.description}
            imgUrl={service.imgUrl}
          />
        ))}
      </div>
    </>
  );
};

export default Services;
