import React, { useRef, useState } from 'react';
// Importar Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Importar Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// importar required modules
import { Pagination, Navigation } from 'swiper/modules';
//imagenes
import banner1 from '../../../assets/img/carrusel/banner-1.png'
import banner2 from '../../../assets/img/carrusel/banner-2.png'
import banner3 from '../../../assets/img/carrusel/banner-3.png'


export const Carrusel = () => {
    const imgs = [banner1, banner2, banner3];


    return (
        <>
            <Swiper 
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="banner-box">

                {imgs.map((img, index)=>(
                    <SwiperSlide key={index}><img src={img} alt="Imagen desaparecida" /></SwiperSlide>
                ))}

            </Swiper>
        </>
    )
}
