import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.jpg';
import img4 from '../img/safety.avif';

const Swipe = () => {
  return (
    <div className="mt-18 w-full h-[50vh] md:h-[60vh] lg:h-[50vh]">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,       // Time between slides in ms
          disableOnInteraction: false, // Keeps autoplay even after user interacts
        }}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="w-full h-full"
      >
        <SwiperSlide className="relative w-full h-full">
          <img src={img1} alt="Plant 1" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold  bg-opacity-50 px-4 py-2 rounded-lg">
              Zoetis Petcare Products & Solutions
            </h2>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative w-full h-full">
          <img src={img2} alt="Plant 2" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold  bg-opacity-50 px-4 py-2 rounded-lg">
              Pioneering pet care solutions with PetTech
            </h2>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative w-full h-full">
          <img src={img3} alt="Plant 3" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold bg-opacity-50 px-4 py-2 rounded-lg">
            7 Important Animal Care Tips for Pet Owners 
            </h2>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative w-full h-full">
          <img src={img4} alt="Plant 4" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold  bg-opacity-50 px-4 py-2 rounded-lg">
              Winter Care Tips 
            </h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Swipe;
