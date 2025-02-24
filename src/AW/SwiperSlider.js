import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import './SwiperSlider.css'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import img_1 from '../img/img_1.jpg'
import img_2 from '../img/img_2.jpg'
import img_3 from '../img/img_3.jpg'
import img_4 from '../img/img_4.jpg'
import img_5 from '../img/img_5.jpg'
import img_6 from '../img/img_6.jpg'
import img_7 from '../img/img_7.jpg'

import { EffectCoverflow,Pagination,Navigation } from 'swiper/modules'

const SwiperSlider = () => {
  return (
    <div className="container mt-2">
    <h1 className="heading">Service Gallery</h1>
   
    <Swiper 
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      }}
      pagination={{ el: '.swiper-pagination', clickable: true }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true,
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="swiper_container"
    >
      <SwiperSlide>
        <img src={img_1} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img_2} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img_3} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img_4} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img_5} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img_6} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img_7} alt="slide_image" />
      </SwiperSlide>

      <div className="slider-controler">
        <div className="swiper-button-prev slider-arrow">
          <ion-icon className="arrow-back-outline"></ion-icon>
        </div>
        <div className="swiper-button-next slider-arrow">
          <ion-icon className="arrow-forward-outline"></ion-icon>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </Swiper>
    
  </div>
  )
}

export default SwiperSlider