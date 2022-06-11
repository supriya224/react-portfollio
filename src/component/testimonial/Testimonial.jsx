import React from 'react'
import '../testimonial/testimonial.css'
import ME from '../../assests/img10.jpg'
import ME1 from '../../assests/img8.jpg'
import ME2 from '../../assests/img7.jpg'
import ME3 from '../../assests/img9.jpg'
import ME4 from '../../assests/img3.jpg'
import ME5 from '../../assests/img6.jpg'

import {Pagination} from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/pagination';

function Testimonial() {
  const data = [
    {
      avatar: ME,
      name: 'supriya maurya',
      review: 'i am a student of graduation i want become a full stck develoepr and i am working in react js its is most popular and useful javascript library.. javascript is a most useful language which is used used for create web application, website, Mac app and website.. ',
    },
    {
      avatar: ME1,
      name: 'supriya maurya',
      review: 'i am a student of graduation i want become a full stck develoepr and i am working in react js its is most popular and useful javascript library.. javascript is a most useful language which is used used for create web application, website, Mac app and website.. ',
    },
    {
      avatar: ME2,
      name: 'supriya maurya',
      review: 'i am a student of graduation i want become a full stck develoepr and i am working in react js its is most popular and useful javascript library.. javascript is a most useful language which is used used for create web application, website, Mac app and website.. ',
    },
    {
      avatar: ME3,
      name: 'supriya maurya',
      review: 'i am a student of graduation i want become a full stck develoepr and i am working in react js its is most popular and useful javascript library.. javascript is a most useful language which is used used for create web application, website, Mac app and website.. ',
    },
    {
      avatar: ME4,
      name: 'riya maurya',
      review: 'i am a student of graduation i want become a full stck develoepr and i am working in react js its is most popular and useful javascript library.. javascript is a most useful language which is used used for create web application, website, Mac app and website.. ',
    },
    {
      avatar: ME5,
      name: 'priya maurya',
      review: 'i am a student of graduation i want become a full stck develoepr and i am working in react js its is most popular and useful javascript library.. javascript is a most useful language which is used used for create web application, website, Mac app and website.. ',
    }
  ]
  return (
    <section id='testimonial'>
      <h5>Review  from clients</h5>
      <h2>Testimonial</h2>
      
      <Swiper className="contaier testimonial-container"
        modules={[Pagination]} spaceBetween={40}
        slidesPerView={1}
        pagination={{clickable:true}}>

        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide  key ={index} className="testimonial">
                <div className="client-avatar">
                  <img src={avatar} alt="avatar one" className='image-item' />
                  <h5 className='client-name'>{name}</h5>
                  <small className='client-review'>{review}</small>
                </div>
              </SwiperSlide>
            )
          })
        }


</Swiper>
    </section>
  )
}

export default Testimonial