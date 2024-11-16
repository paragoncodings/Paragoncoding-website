import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Hero1 from './Hero1';
import Hero2 from './Hero2';
import Hero3 from './Hero3';
import { EffectFlip } from 'swiper';

const HeroSection = () => {
  useEffect(() => {
    // Get the Swiper navigation buttons
    const nextButton = document.querySelector('.swiper-button-next');
    const prevButton = document.querySelector('.swiper-button-prev');

    if (nextButton && prevButton) {
      // Apply green as the default color with !important
      nextButton.style.color = '#7CFC0A';
      prevButton.style.color = '#7CFC0A';

      // Add hover effect using JavaScript
      nextButton.addEventListener('mouseenter', () => (nextButton.style.color = '#73FAF9'));
      nextButton.addEventListener('mouseleave', () => (nextButton.style.color = '#7CFC0A'));
      
      prevButton.addEventListener('mouseenter', () => (prevButton.style.color = '#73FAF9'));
      prevButton.addEventListener('mouseleave', () => (prevButton.style.color = '#7CFC0A'));
    }
  }, []);

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay,EffectFlip]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      navigation
      // pagination={{ clickable: true }}
     effect="flip"
     

    >
      <SwiperSlide>
        <Hero1 />
      </SwiperSlide>
      <SwiperSlide>
        <Hero2 />
      </SwiperSlide>
      <SwiperSlide>
        <Hero3 />
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSection;
