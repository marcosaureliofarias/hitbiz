import React from 'react'
import SwiperCarouselGenre from '../Swiper-genre/swiper-genre'
import SwiperCarousel from '../Swiper/Swiper'

export default function Artist() {
  return (
    <div className="lg:ml-6">
      <p className="text-white font-semibold text-xl ml-6 lg:ml-0">
        Hitmakers em destaque
      </p>
      <div className="mt-7">
        <SwiperCarousel />
      </div>
      <p className="text-white font-semibold text-xl ml-6 lg:ml-0 mt-7">
        Gêneros Populares
      </p>

      <div className="mt-7">
        <SwiperCarouselGenre />
      </div>
    </div>
  )
}
