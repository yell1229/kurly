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

export default function SlideList({classname,slideImg}) {
    const swiperRef = useRef(null);
    const swiperPrevRef = useRef(null);
    const swiperNextRef = useRef(null);

    return (
        <>
            {/* main top */}
            {classname === 'top_slider' && <div className={classname}>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    slidesPerView={1}
                    centeredSlides ={true}
                    navigation
                    autoplay={{ // 자동 재생
                        delay: 4500, // 지연 시간 (한 슬라이더에 머물르는 시간)
                        disableOnInteraction: true, // 마우스 제어 이후 자동 재생을 막을지 말지
                    }}
                    pagination={{
                        type: 'fraction',
                        }}
                    speed={500}
                    loop={true}
                    className="slider"
                >
                    {slideImg && slideImg.map((img) =>
                        <SwiperSlide style={{background:"#666"}}><a href={img.src} target='_blank'><img src={img.img} alt="" /></a></SwiperSlide>
                    )}
                </Swiper>
            </div>}

            {/* main contents */}
            {
                classname === 'slider_tab4' && <div className={classname}>
                <div>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={18}
                        slidesPerView={4}
                        slidesPerGroup={4}
                        freeMode = {true}
                        centeredSlides ={false}
                        speed={500}
                        loop={false}
                        className="slider"
                        ref={swiperRef}
                        navigation={{nextEl: '.slider_tab4 .swiper-button-next', prevEl: '.slider_tab4 .swiper-button-prev'}}

                    >
                        {slideImg && slideImg.map((img) =>
                            <SwiperSlide><ProductThumb slideImg={img} /></SwiperSlide>
                        )}
                        <SwiperSlide><div className="more"><span>전체보기</span></div> </SwiperSlide>
                    </Swiper>
                    <div className="swiper-button-prev" ref={swiperPrevRef}></div>
                    <div className="swiper-button-next" ref={swiperNextRef}></div>
                </div>
            </div>
            }

            {/* aside */}
            {
                classname === 'aside_slide' && <div className={classname}>
                    <div className='tit'>최근 본 상품</div>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={2}
                        slidesPerView={'auto'}
                        slidesPerGroup={1}
                        direction={'vertical'}
                        centeredSlides ={false}
                        speed={500}
                        freeMode = {true}
                        loop={false}
                        className="slider"
                        height={209}
                        navigation={{nextEl: '.aside_slide .swiper-next', prevEl: '.aside_slide .swiper-prev'}}

                    >   
                    {
                        slideImg && slideImg.map((img) =>
                            <SwiperSlide><a href=""><img src={img.img} alt={img.src} /></a></SwiperSlide>
                        )
                    }
                        

                    </Swiper>
                    <div className="swiper-prev"><IoIosArrowUp /></div>
                    <div className="swiper-next"><IoIosArrowDown /></div>
                </div>
            }
        </>
    );
}

