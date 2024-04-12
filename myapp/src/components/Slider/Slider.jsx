import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import Card from '../Card/Card';
import { popular } from '../../data';
import './Slider.css';

export default function Slider() {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {popular.map((item, index) => (
                    <SwiperSlide>
                         <Card key={index} {...item} ></Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
