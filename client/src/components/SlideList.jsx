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

export default function SlideList({classname,slideControls}) {

    return (
        <>
            {/* main top */}
            {classname === 'top_slider' && <div className={classname}>
                <Swiper {...slideControls.slideControl} >
                    {slideControls.slideImg && slideControls.slideImg.map((img) =>
                        <SwiperSlide style={{background:"#666"}}><a href={img.src} target='_blank'><img src={img.img} alt="" /></a></SwiperSlide>
                    )}
                </Swiper>
            </div>}

            {/* main contents */}
            {
                classname === 'slider_tab4' && <div className={classname}>
                <div>
                    <Swiper {...slideControls.slideControl} >
                        {slideControls.slideImg && slideControls.slideImg.map((img) =>
                            <SwiperSlide><ProductThumb slideImg={img} /></SwiperSlide>
                        )}
                        <SwiperSlide><div className="more"><span>전체보기</span></div> </SwiperSlide>
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
                    <Swiper  {...slideControls.slideControl} >   
                        {slideControls.slideImg && slideControls.slideImg.map((img) =>
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

