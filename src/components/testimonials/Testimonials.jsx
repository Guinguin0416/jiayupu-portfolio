import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR1,
    name: 'Alaska',
    review: 'I have been to the Arctic Circle! Fairbanks is one of my favorite cities.'
  },
  {
    avatar: AVTR2,
    name: 'O-H-I-O',
    review: 'Once a Buckeye, always a Buckeye! I am proud to say that I graduated from The Ohio State University. I drove all the way from Columbus to Los Angeles in 2021.'
  },
  {
    avatar: AVTR3,
    name: 'Speed Skating',
    review: 'I am a national second-level speed skaing (inline skating) athelet. I had been practicing inline skating for 6+ years.'
  },
  {
    avatar: AVTR4,
    name: 'Youngest Developer',
    review: 'I started coding since 2000. Just kidding:)'
  },
  
]



const Testmonials = () => {
  return (
    <section id='testimonials'>
      <h5>Fun Facts About</h5>
      <h2>Jiayu</h2>

      <Swiper className='container testimonials_container'
      // install Swiper modules
      modules={[Pagination, Navigation]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className='client_avatar'>
                  <img src={avatar}/>
                </div>
                <h5 className='client_name'>{name}</h5>
                <small className='client_review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testmonials