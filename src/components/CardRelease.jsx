import React, { useEffect, useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { FreeMode, Pagination } from 'swiper/modules'
import './CardsCarousel.css'
import './CardRelease.css'

const CardRelease = ({ content }) => {
  const [loaded, setLoaded] = useState(false)
  const swiperRef = useRef(null)

  useEffect(() => {
    setTimeout(() => setLoaded(true), 50) // Даем браузеру время на рендеринг
  }, [])

  // Функция для прокрутки вправо
  const handleNext = () => {
    swiperRef.current.swiper.slideNext()
  }

  return (
    <div>
      <div className='title-release'>
        <h1 className='title-cards-release'>Latest release</h1>
      </div>
      <Swiper
        ref={swiperRef}
        slidesPerView={'auto'}
        spaceBetween={20}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
        className='cards-carousel2'
      >
        {content.map(data => (
          <SwiperSlide key={data.id} className={`card-release ${loaded ? 'loaded' : ''}`}>
            <img src={data.image} alt='Card' />
            <button
              className={data.level === 'Beginner' ? 'btn-card-beginner' : 'btn-card-advance'}
            >
              {data.level}
            </button>
            <button className='play-card-release'>
              <img src='/img/play.svg' alt='Play' />
            </button>
            <div className='card-release-content'>
              <div className='title-card-release'>{data.title}</div>
              <div className='times-card-release'>
                <div className='date-card-release'>{data.date}</div>
                <div className='time-card-release'>{data.duration}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Кнопка для прокрутки вправо */}
      <button className='swiper-button-next' onClick={handleNext}>
        <img src='/img/arrow-down.svg' alt='' />
      </button>
    </div>
  )
}

export default CardRelease
