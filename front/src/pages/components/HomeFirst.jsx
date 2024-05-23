import React from 'react'
import SliderImage1 from '../../assets/images/slider-1.jpg'
import SliderImage2 from '../../assets/images/slider-2.jpg'
import SliderImage3 from '../../assets/images/slider-3.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
const HomeFirst = () => {
  return (
    <div>
       <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='SliderImg'>
            <img src={SliderImage1} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='SliderImg'>
            <img src={SliderImage2} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='SliderImg'>
            <img src={SliderImage3} alt="" />
            </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  )
}

export default HomeFirst
