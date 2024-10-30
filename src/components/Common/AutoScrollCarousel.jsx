import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper core styles
import 'swiper/css/autoplay'; // Import autoplay-specific styles if available

import { Autoplay } from 'swiper/modules'; // Import Autoplay from 'swiper/modules'

// Import Images
import img01 from "../../assets/images/carousel_images/carousel1.jpg";
import img02 from "../../assets/images/carousel_images/carousel2.png";
import img03 from "../../assets/images/carousel_images/carousel3.jpg";

const AutoScrollCarousel = () => {
  return (
    <React.Fragment>
      <style>
        {`
          .swiper-button-prev,
          .swiper-button-next {
            display: none;
          }
        `}
      </style>

      
      <div className="home-banner-carousel shadow">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4000 }}
          loop={true}
          spaceBetween={0}
          slidesPerView={1}
        >
          <SwiperSlide>
            <img className='w-100' src={img02} alt=" " />
          </SwiperSlide>
          <SwiperSlide>
            <img className='w-100' src={img01} alt=" " />
          </SwiperSlide>
          <SwiperSlide>
            <img className='w-100' src={img03} alt=" " />
          </SwiperSlide>
        </Swiper>
      </div>
    </React.Fragment>
  );
};

export default AutoScrollCarousel;
