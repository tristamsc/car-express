import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import car1 from '../../../assets/img/carro-viaje.webp'
import car2 from '../../../assets/img/jetta1.png'
import car3 from '../../../assets/img/toyoa_hilux copy.png'
import car4 from '../../../assets/img/nissan_frontier.png'
import car5 from '../../../assets/img/corolla10 copy.png'
import { Link } from 'react-router-dom'

export const Explorar = () => {

  const carros = [car1, car2, car3, car4, car5]
  return (
    <section className='home-section'>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 90,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="carros-displacement"
      >
        {carros.map((carro,index) =>(
        <SwiperSlide key={index}>
          <img src={carro} alt='carrito siuu'/>
        </SwiperSlide>))}

      </Swiper>
      <div className="viaje-text">
        <h2 data-aos="zoom-out" className="title">¿Listo para tu proximo viaje?</h2>
        <p data-aos="zoom-in-up" className="parrafo">
          El camino te espera. Libera tu aventura y toma el control de tu próximo destino. Con nuestra amplia selección de vehículos, tendrás la libertad de explorar a tu propio ritmo, desde el corazón de la ciudad hasta los rincones más remotos. Elige la comodidad, la seguridad y la economía para que tu única preocupación sea disfrutar del viaje. CONTAMOS CON +200 AUTOS!!
        </p>
        <Link data-aos="fade-up" className="login" to="/vehiculos" >Explorar<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M1.63 12.19 5.82 8 1.63 3.81l1.53-1.52L8.87 8l-5.71 5.71-1.53-1.52z" /><path d="M7.13 12.19 11.32 8 7.13 3.81l1.53-1.52L14.37 8l-5.71 5.71-1.53-1.52z" /></svg></Link>

      </div>
    </section>
  )
}
