import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation'; // Import the navigation styles
import { Navigation } from 'swiper/modules';
import { BiLogoTelegram } from 'react-icons/bi';
import avatar1 from '../../assets/images/users/avatar-1.jpg';


const QuickPaySlider = () => {
  return (
    <>
        <Swiper
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          breakpoints={{
            1650: {
              slidesPerView: 3,
            },
            1400: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 5,
            },
            576: {
              slidesPerView: 4,
            },
            400: {
              slidesPerView: 3,
            },
            0: {
              slidesPerView: 2,
            },
          }}
        >
          <SwiperSlide>
            <div className="text-center py-lg-4">
              <img src={avatar1} alt="" className="avatar-md rounded-circle d-block mx-auto p-1" />
              <h5 className='mt-2 font-size-13 fw-normal'>Livia Bator</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center py-lg-4">
              <img src={avatar1} alt="" className="avatar-md rounded-circle d-block mx-auto p-1" />
              <h5 className='mt-2 font-size-13 fw-normal'>Livia Bator</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center py-lg-4">
              <img src={avatar1} alt="" className="avatar-md rounded-circle d-block mx-auto p-1" />
              <h5 className='mt-2 font-size-13 fw-normal'>Livia Bator</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center py-lg-4">
              <img src={avatar1} alt="" className="avatar-md rounded-circle d-block mx-auto p-1" />
              <h5 className='mt-2 font-size-13 fw-normal'>Livia Bator</h5>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="input-group rounded-pill bg-light pe-0 mt-3">
            <input placeholder="Amount" type="number" className="number-input font-size-14 form-control form-control-lg bg-transparent border-0" />
            <button type="button" className="btn btn-secondary rounded-pill px-3 font-size-14"> 
                Send <BiLogoTelegram className='font-size-20'/> 
            </button>
        </div>
    </>
  )
}

export default QuickPaySlider