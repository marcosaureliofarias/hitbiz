import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

import './styles.css'

// import required modules
import { Navigation } from 'swiper'

export default function SwiperCarousel() {
  return (
    <>
      <Swiper
        // slidesPerView={1}
        // spaceBetween={10}
        breakpoints={{
          300: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 25,
          },
        }}
        centeredSlides={false}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="avatar">
            <div className="w-20 lg:w-52 rounded-full">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="avatar">
            <div className="w-20 lg:w-52 rounded-full">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="avatar">
            <div className="w-20 lg:w-52 rounded-full">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="avatar">
            <div className="w-20 lg:w-52 rounded-full">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="avatar">
            <div className="w-20 lg:w-52 rounded-full">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="avatar">
            <div className="w-20 lg:w-52 rounded-full">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="avatar">
            <div className="w-20 lg:w-52 rounded-full">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="avatar">
            <div className="w-20 lg:w-52 rounded-full">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="avatar">
            <div className="w-20 lg:w-52 rounded-full">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="avatar">
            <div className="w-20 lg:w-52 rounded-full">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="avatar">
            <div className="w-20 lg:w-52 rounded-full">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="avatar">
            <div className="w-20 lg:w-52 rounded-full">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="avatar">
            <div className="w-20 lg:w-52 rounded-full">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="avatar">
            <div className="w-20 lg:w-52 rounded-full">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="avatar">
            <div className="w-20 lg:w-52 rounded-full">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="avatar">
            <div className="w-20 lg:w-52 rounded-full">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="avatar">
            <div className="w-20 lg:w-52 rounded-full">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="avatar">
            <div className="w-20 lg:w-52 rounded-full">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="avatar">
            <div className="w-20 lg:w-52 rounded-full">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="avatar">
            <div className="w-20 lg:w-52 rounded-full">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="avatar">
            <div className="w-20 lg:w-52 rounded-full">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="avatar">
            <div className="w-20 lg:w-52 rounded-full">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="avatar">
            <div className="w-20 lg:w-52 rounded-full">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="avatar">
            <div className="w-20 lg:w-52 rounded-full">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="avatar">
            <div className="w-20 lg:w-52 rounded-full">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="avatar">
            <div className="w-20 lg:w-52 rounded-full">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="avatar">
            <div className="w-20 lg:w-52 rounded-full">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="avatar">
            <div className="w-20 lg:w-52 rounded-full">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
