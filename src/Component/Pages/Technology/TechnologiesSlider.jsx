import React, { Fragment } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Footer from '../../Footer/Footer';

const TechnologiesSlider = () => {
  return (
    <Fragment>
      <div className="p-6 md:p-8 lg:p-10 bg-dark mt-10">
        <h2 className="text-center text-2xl md:text-3xl font-extrabold mb-6 md:mb-8 lg:mb-10 text-[#99FF00]">
          We are working with <span className="text-[#73FAF9]">Top Technologies</span>
        </h2>
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={6} // Default for large screens
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 10 }, // Mobile screens
            768: { slidesPerView: 3, spaceBetween: 15 }, // Tablets
            1024: { slidesPerView: 4, spaceBetween: 20 }, // Laptops
            1280: { slidesPerView: 6, spaceBetween: 25 }, // Large screens
          }}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }}
          pagination={{ clickable: true }}
          className="flex w-[90%] mx-auto bg-[#1e2630] p-4 md:p-6 lg:p-8 rounded-lg shadow-lg "
        >
          {[ 
            { imgSrc: "./assets/html.png", label: "HTML" },
            { imgSrc: "./assets/andriod.png", label: "Android" },
            { imgSrc: "./assets/bootstrap.png", label: "Bootstrap" },
            { imgSrc: "./assets/javascript.png", label: "JavaScript" },
            { imgSrc: "./assets/mysql.png", label: "MySQL" },
            { imgSrc: "./assets/node.png", label: "Node.js" },
            { imgSrc: "./assets/php.png", label: "PHP" },
            { imgSrc: "./assets/python.png", label: "Python" },
            { imgSrc: "./assets/wordpress.png", label: "WordPress" }
          ].map((tech, index) => (
            <SwiperSlide key={index} className="flex justify-center ">
              <div className="bg-[#333842] rounded-md p-3 md:p-4 shadow-md transition-transform transform hover:scale-105 hover:shadow-xl border-green border-2">
                <img src={tech.imgSrc} alt={tech.label} className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 mx-auto" />
                <p className="text-center mt-2 text-sm md:text-base font-semibold text-[#73FAF9]">{tech.label}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Footer className="mt-8 md:mt-10" />
      
      {/* Apply Tailwind CSS for arrow buttons */}
      <style jsx>{`
        .swiper-button-next, .swiper-button-prev {
          color: #7CFC0A; /* Green color for the arrows */
        }
        .swiper-button-next:hover, .swiper-button-prev:hover {
          color: #73FAF9; /* Blue color on hover */
        }
      `}</style>
    </Fragment>
  );
};

export default TechnologiesSlider;
