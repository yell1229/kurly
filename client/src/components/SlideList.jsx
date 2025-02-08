import React,{useCallback, useRef} from 'react';
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

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

export default function SlideList({classname,imageList}) {
    return (
        <>
            {/* main top */}
            {classname === 'top_slider' && <div className={classname}>
                <Swiper 
                    modules = {[Navigation, Pagination, Autoplay]}
                    slidesPerView= {1}
                    centeredSlides = {true}
                    navigation= {true}
                    autoplay = {{
                        delay: 4500,
                        disableOnInteraction: true,
                    }}
                    pagination = {{
                        type: 'fraction'
                        }}
                    speed = {500 }
                    loop = {true }
                    className = {"slider"}
                >
                    {imageList && imageList.map((img) =>
                        <SwiperSlide style={{background:"#666"}}><a href={img.src} target='_blank'><img src={img.img} alt="" /></a></SwiperSlide>
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
                    {imageList && imageList.map((img) =>
                        <SwiperSlide><a href={img.src} target='_blank'><img src={img.img} alt="" /></a></SwiperSlide>
                    )}
                </Swiper>
                <div className="swiper-prev"><MdArrowBackIos /></div>
                <div className="swiper-next"><MdArrowForwardIos  /></div>
            </div>}

            {/* main contents */}
            {
                classname === 'slider_tab4' && <div className={classname}>
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
                         navigation = {{nextEl: '.slider_tab4 .swiper-button-next', prevEl: '.slider_tab4 .swiper-button-prev'}}
                    >
                        {imageList && imageList.map((img) =>
                            <SwiperSlide><Link to={img.src}><ProductThumb slideImg={img} /></Link></SwiperSlide>
                        )}
                        <SwiperSlide><Link to="/goods/list"><div className="more"><span>전체보기</span></div></Link></SwiperSlide>
                    </Swiper>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
            </div>
            }

            {/* aside */}
            {
                classname === 'aside_slide' && <div className={classname}>
                    <div className='tit'>최근 본 상품</div>
                    <Swiper 
                         modules = {[Navigation, Pagination, Autoplay]}
                         spaceBetween = {2}
                         slidesPerView = {'auto'}
                         slidesPerGroup ={ 1 }
                         direction = {'vertical' }
                         centeredSlides = {false}
                         speed = {500 }
                         freeMode = {true}
                         loop = {false}
                         className = {"slider"}
                         height = {209 }
                         navigation = {{nextEl: '.aside_slide .swiper-next', prevEl: '.aside_slide .swiper-prev'} }  
                    >   
                        {imageList && imageList.map((img) =>
                            <SwiperSlide><a href={img.src}><img src={img.img} alt={img.src} /></a></SwiperSlide>
                        ) }
                    </Swiper>
                    <div className="swiper-prev"><IoIosArrowUp /></div>
                    <div className="swiper-next"><IoIosArrowDown /></div>
                </div>
            }
        </>
    );
}

