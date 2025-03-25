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

export default function SlideTab4({classname, product}) {
    console.log('classname',classname);
    
    return (
        <div>
            <Swiper 
                    modules = {[Navigation, Pagination, Autoplay]}
                    spaceBetween = {18}
                    slidesPerView = {4}
                    slidesPerGroup = {4}
                    freeMode = {true}
                    centeredSlides  = {false}
                    speed = {500}
                    loop= {false}
                    className = { "slider"}
                    navigation = {{nextEl: `.${classname} .swiper-button-next`, prevEl: `.${classname} .swiper-button-prev`}}
            >
                {product && product.map((img, idx) =>
                    <SwiperSlide key={idx}><ProductThumb product={img} /></SwiperSlide>
                )}
                <SwiperSlide><Link to="/goods/all"><div className="more"><span>전체보기</span></div></Link></SwiperSlide>
            </Swiper>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
        </div>
    );
}

