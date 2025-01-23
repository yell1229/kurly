import React,{useCallback, useRef} from 'react';
// slide
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,Autoplay , Scrollbar, A11y } from 'swiper/modules';

import ProductThumb from './ProductThumb.jsx';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import '../scss/slider.scss';


export default function SlideList({classname}) {
    const swiperRef = useRef(null);
    const swiperPrevRef = useRef(null);
    const swiperNextRef = useRef(null);

    // const prevSlide = useCallback(() => {
    //     swiperRef.current?.swiper.slidePrev();
    // }, [swiperRef]);

    // const nextSlide = useCallback(() => {
    //     swiperRef.current?.swiper.slideNext();
    // }, [swiperRef]);
    // console.log('swiperRef',swiperRef.current?.swiper);
    // https://hyjang.tistory.com/entry/ReactNextjs-%EC%8A%A4%EC%99%80%EC%9D%B4%ED%8D%BC-%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9Cswiper-slide-%EC%BB%A8%ED%8A%B8%EB%A1%A4%EB%9F%AC-%EC%BB%A4%EC%8A%A4%ED%85%80%ED%95%98%EA%B8%B0
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
                    <SwiperSlide style={{background:"#333"}}>1<img src="https://picsum.photos/1200/370" alt="" /></SwiperSlide>
                    <SwiperSlide style={{background:"#666"}}>2<img src="https://picsum.photos/1200/370" alt="" /></SwiperSlide>
                    <SwiperSlide style={{background:"#999"}}>3<img src="https://picsum.photos/1200/370" alt="" /></SwiperSlide>
                    <SwiperSlide style={{background:"#999"}}>4<img src="https://picsum.photos/1200/370" alt="" /></SwiperSlide>
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
                        navigation={{nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'}}
                        // onBeforeInit={(swiper) => {
                        //     // 초기화 전에 네비게이션 버튼을 swiper에 할당합니다.
                        //     swiper.params.navigation.prevEl = swiperPrevRef.current;
                        //     swiper.params.navigation.nextEl = swiperNextRef.current;
                        //     }}
                    >
                        <SwiperSlide><ProductThumb/></SwiperSlide>
                        <SwiperSlide><ProductThumb/></SwiperSlide>
                        <SwiperSlide><ProductThumb/></SwiperSlide>
                        <SwiperSlide><ProductThumb/></SwiperSlide>
                        <SwiperSlide><ProductThumb/></SwiperSlide>
                        <SwiperSlide><ProductThumb/></SwiperSlide>
                        <SwiperSlide><ProductThumb/></SwiperSlide>
                        <SwiperSlide><ProductThumb/></SwiperSlide>
                        <SwiperSlide><div style={{width:"325px",height:"370px"}}>7 전체보기 ==</div> </SwiperSlide>
                    </Swiper>
                    <div className="swiper-button-prev" ref={swiperPrevRef}></div>
                    <div className="swiper-button-next" ref={swiperNextRef}></div>
                    {/* <div className="swiper-button-prev" onClick={prevSlide} ref={swiperPrevRef}></div>
                    <div className="swiper-button-next" onClick={nextSlide} ref={swiperNextRef}></div> */}
                </div>
            </div>
            }
        </>
    );
}

