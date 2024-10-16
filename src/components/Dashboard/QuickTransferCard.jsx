import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation'; // Import the navigation styles
import { Navigation } from 'swiper/modules';
import { BiLogoTelegram } from 'react-icons/bi';

const QuickTransferCard = () => {
  return (
    <div className="card quick-transfer-card rounded-5 w-100 h-100 position-relative border border-dark border-opacity-10 mb-0">
      <div className="card-body w-100">
        <Swiper
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          breakpoints={{
            1400: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
            576: {
              slidesPerView: 3,
            },
            0: {
              slidesPerView: 2,
            },
          }}
        >
          <SwiperSlide>
            <div className="text-center py-lg-4">
              <img src="/src/assets/images/users/avatar-1.jpg" alt="" className="avatar-md rounded-circle d-block mx-auto" />
              <h5 className='mt-2 font-size-14'>Livia Bator</h5>
            </div>
          </SwiperSlide>
          {/* Repeat other SwiperSlides as necessary */}
          <SwiperSlide>
            <div className="text-center py-lg-4">
              <img src="/src/assets/images/users/avatar-1.jpg" alt="" className="avatar-md rounded-circle d-block mx-auto" />
              <h5 className='mt-2 font-size-14'>Livia Bator</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center py-lg-4">
              <img src="/src/assets/images/users/avatar-1.jpg" alt="" className="avatar-md rounded-circle d-block mx-auto" />
              <h5 className='mt-2 font-size-14'>Livia Bator</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center py-lg-4">
              <img src="/src/assets/images/users/avatar-1.jpg" alt="" className="avatar-md rounded-circle d-block mx-auto" />
              <h5 className='mt-2 font-size-14'>Livia Bator</h5>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className='d-xxl-flex align-items-center mt-2 mt-lg-4'>
          <label className='text-nowrap mb-xxl-0'>Write Amount</label>
          <div className="input-group rounded-pill bg-light pe-0 ms-xxl-2">
            <input placeholder="Amount" type="number" className="amount-input form-control form-control-lg bg-transparent border-0" />
            <button type="button" className="btn btn-primary rounded-pill px-3 font-size-16"> 
              Send <BiLogoTelegram className='ms-1 font-size-22'/> 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickTransferCard;
