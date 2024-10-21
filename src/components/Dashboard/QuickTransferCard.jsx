import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation'; // Import the navigation styles
import { Navigation } from 'swiper/modules';
import { BiLogoTelegram } from 'react-icons/bi';
import QuickPaySlider from '../Common/QuickPaySlider';

const QuickTransferCard = () => {
  return (
    <div className="card bg-primary rounded-4 quick-transfer-card w-100 h-100 position-relative mb-0 text-white mb-3">
      <div className="card-body w-100">
        <QuickPaySlider />
      </div>
    </div>
  );
}

export default QuickTransferCard;
