import React,{useRef} from 'react';
// icons
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Navigation, Pagination,Autoplay , Scrollbar, A11y } from 'swiper/modules';

// components
import Header from '../components/common/Header.jsx';
import Footer from '../components/common/Footer.jsx';
import SlideList from '../components/SlideList.jsx';
import ProductThumb from '../components/ProductThumb.jsx';


export default function Kurly() {
    
    // main top slide
    const topSlide = {
        slideControl : {
            modules : [Navigation, Pagination, Autoplay] ,
            slidesPerView:1 ,
            centeredSlides : true,
            navigation: true,
            autoplay : { // 자동 재생
                delay: 4500, // 지연 시간 (한 슬라이더에 머물르는 시간)
                disableOnInteraction: true, // 마우스 제어 이후 자동 재생을 막을지 말지
            },
            pagination : {
                type: 'fraction',
                },
            speed : 500 ,
            loop : true ,
            className : "slider"
        },
        slideImg : [
            {
                "img":"https://picsum.photos/id/1/1200/370",
                "src":"https://www.kurly.com/main"
            },
            {
                "img":"https://picsum.photos/id/2/1200/370",
                "src":"https://www.coupang.com/"
            },
            {
                "img":"https://picsum.photos/id/3/1200/370",
                "src":"https://www.naver.com/"
            },
            {
                "img":"https://picsum.photos/id/4/1200/370",
                "src":"https://github.com/"
            },
        ]

    }

    const contSlide01 = {
        slideControl: {
            modules : [Navigation, Pagination, Autoplay] ,
            spaceBetween :18 ,
            slidesPerView : 4 ,
            slidesPerGroup : 4 ,
            freeMode : true ,
            centeredSlides  : false ,
            speed : 500 ,
            loop : false ,
            className : "slider",
            navigation : {nextEl: '.slider_tab4 .swiper-button-next', prevEl: '.slider_tab4 .swiper-button-prev'}
        },
        slideImg: [
            {
                "img":"https://picsum.photos/id/5/1200/370",
                "src":"/collection-groups/",
                "isLive":true,
                "isPayback":true
            },
            {
                "img":"https://picsum.photos/id/6/1200/370",
                "src":"https://pages.coupang.com/",
                "isLive":true,
                "istotalPrice" : "141,930"
            },
            {
                "img":"https://picsum.photos/id/7/1200/370",
                "src":"https://www.kurly.com/main",
                "isLive":true,
                "isPayback":"페이백"
            },
            {
                "img":"https://picsum.photos/id/8/1200/370",
                "src":"https://github.com/"
            },
            {
                "img":"https://picsum.photos/id/9/1200/370",
                "src":"https://www.naver.com/",
                "isLive":true,
                "istotalPrice" : "141,930"
            },
            {
                "img":"https://picsum.photos/id/10/1200/370",
                "src":"https://pages.coupang.com/",
                "isLive":true
            },
            {
                "img":"https://picsum.photos/id/11/1200/370",
                "src":"https://www.kurly.com/main",
                "isPayback":true
            },
            {
                "img":"https://picsum.photos/id/12/1200/370",
                "src":"https://github.com/",
                "isPayback":true
            }
        ]
    }

    return (
        <>
            {/* start of container_area */}
            <div className="container_area">

                <SlideList classname="top_slider" slideControls={topSlide} />

                {/* sample ====> start 1 content */}
                <div className="cont_area">
                    <div className="tit_area">
                        <strong><a href="">✨주목! 설 선물 베스트 <MdOutlineKeyboardArrowRight className='icon' /></a></strong>
                        <span>실패 없는 설 인기 선물만 모았어요!</span>
                    </div>

                    {/* start components */}
                    <div className="product_list_wrap"> 
                        <SlideList classname="slider_tab4" slideControls={contSlide01} />
                    </div>
                    {/* end components */}
                </div>
                {/* sample ====> end 1 content */}

                {/* sample ====> banner */}
                <div className="banner_area">
                    <a href=""><img src="./images/5502d5ec-27d9-40cc-8eb9-515c1de0bf6c.jpg" alt="" /></a>
                </div>
                {/* sample ====> banner */}

            </div>
            {/* end of container_area */}
        </>
    );
}

