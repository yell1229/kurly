import React from 'react';
// slide
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,Autoplay , Scrollbar, A11y } from 'swiper/modules';
import { Link } from 'react-router-dom';

import ProductThumb from './ProductThumb.jsx';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import '../scss/slider.scss';

import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

export default function SlideList({classname, product}) {
    return (
        <>
            {/* main top */}
            {classname === 'top_slider' && <div className={classname}>
                <Swiper 
                    modules = {[Navigation, Pagination, Autoplay]}
                    slidesPerView= {1}
                    centeredSlides = {true}
                    loop = {true}
                    navigation= {true}
                    autoplay = {{
                        delay: 4500,
                        disableOnInteraction: true,
                    }}
                    pagination = {{
                        type: 'fraction'
                        }}
                    speed = {500}
                    className = {"slider"}
                >
                    {product && product.map((img, idx) =>
                        <SwiperSlide key={idx} style={{background:""}}><a href={img.src} target='_blank'><img src={img.img} alt="" /></a></SwiperSlide>
                    )}
                </Swiper>
            </div>}

            {/* detail pop */}
            {classname === 'pop_slide' && <div className={classname}>
                <Swiper
                    modules = {[Navigation, Pagination]}
                    slidesPerView= {1}
                    centeredSlides = {true}
                    speed = {500}
                    loop = {true}
                    className = {"slider"}
                    navigation = {{nextEl: '.pop_slide .swiper-next', prevEl: '.pop_slide .swiper-prev'} }  
                >
                    {product && product.map((img) =>
                        <SwiperSlide><a href={img.src} target='_blank'><img src={img.img} alt="" /></a></SwiperSlide>
                    )}
                </Swiper>
                <div className="swiper-prev"><MdArrowBackIos /></div>
                <div className="swiper-next"><MdArrowForwardIos  /></div>
            </div>}
        </>
    );
}

