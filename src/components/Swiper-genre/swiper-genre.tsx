import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

import './styles.css'

// import required modules
import { Navigation } from 'swiper'

export default function SwiperCarouselGenre() {
  return (
    <>
      <Swiper
        breakpoints={{
          300: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 5,
          },
        }}
        centeredSlides={false}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="card-zoom">
            <div className="card-zoom-image bg-sertanejo"></div>
            <h1 className="card-zoom-text">SERTANEJO</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-zoom">
            <div className="card-zoom-image bg-rock"></div>
            <h1 className="card-zoom-text">ROCK</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-zoom">
            <div className="card-zoom-image bg-samba"></div>
            <h1 className="card-zoom-text">SAMBA</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-zoom">
            <div className="card-zoom-image bg-gospel"></div>
            <h1 className="card-zoom-text">GOSPEL</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-zoom">
            <div className="card-zoom-image bg-funk"></div>
            <h1 className="card-zoom-text">FUNK</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-zoom">
            <div className="card-zoom-image bg-infantil"></div>
            <h1 className="card-zoom-text">INFANTIL</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-zoom">
            <div className="card-zoom-image bg-pagode"></div>
            <h1 className="card-zoom-text">PAGODE</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-zoom">
            <div className="card-zoom-image bg-jazz"></div>
            <h1 className="card-zoom-text">JAZZ</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
