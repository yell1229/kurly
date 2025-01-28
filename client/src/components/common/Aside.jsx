import React from 'react';
import { TfiArrowUp } from "react-icons/tfi";
import SlideList from '../SlideList.jsx';
import { Navigation, Pagination,Autoplay } from 'swiper/modules';

export default function Aside({wrapRef}) {
    const slidecontrol = {
        slideControl : {
        modules : [Navigation, Pagination, Autoplay] ,
        spaceBetween : 2 ,
        slidesPerView : 'auto' ,
        slidesPerGroup : 1 ,
        direction : 'vertical' ,
        centeredSlides : false ,
        speed : 500 ,
        freeMode : true ,
        loop : false ,
        className : "slider" ,
        height : 209 ,
        navigation : {nextEl: '.aside_slide .swiper-next', prevEl: '.aside_slide .swiper-prev'}    
        },
        slideImg : [
            {
                "img":"https://picsum.photos/60/80",
                "src":"http://www.naver.com"
            },
            {
                "img":"https://picsum.photos/60/80",
                "src":"http://www.naver.com"
            },
            {
                "img":"https://picsum.photos/60/80",
                "src":"http://www.naver.com"
            },
            {
                "img":"https://picsum.photos/60/80",
                "src":"http://www.naver.com"
            },
            {
                "img":"https://picsum.photos/60/80",
                "src":"http://www.naver.com"
            }
        ]
    }
    
    
    return (
        <>
            {/* start of aside nav */}
            <aside className='ban_q_aside'>
                <a href=""><img src="./images/deliveryInfo.jpg" alt="" /></a>
                <ul>
                    <li><a href="">컬리 고객 제도</a></li>
                    <li><a href="">컬리 큐레이터</a></li>
                    <li><a href="">레시피</a></li>
                </ul>
                <SlideList classname="aside_slide" slideControls={slidecontrol} />
            </aside>
            {/* end of aside nav */}

            
            <div className="btn_top" onClick={() => wrapRef.scrollIntoView({ behavior: 'smooth', block: 'start'})}><TfiArrowUp /></div>
        </>
    );
}

