import React from 'react'
import "./testimonial.css"
import { Data } from './Data' 

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';



function Testimonial() {
    
  return (
    <section className='testimonial container section'>
       <h2 className="section__title"> my client say </h2>
       <span className='section__subtitle'> Testimonial </span>

       <Swiper    
        loop ={true}
        spaceBetween={24}
        grabCursor ={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]} className="testimonial__container"> 
            {Data.map(({id,image,title,description}) =>{ 
                return(
                    <SwiperSlide className='testimonial__card' key={id}> 
                         <img src={image} className='testimonial__img' alt="" />
                         <h3 className="testimonial__name">{title}</h3>
                         <p className="testimonial__description"> {description} </p>
                    </SwiperSlide>
                )
            } )}
       </Swiper>
    </section>
  )
}

export default Testimonial