import React from 'react';
// slide
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,Autoplay , Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import '../scss/slider.scss';


export default function Slide() {
    return (
        <>
            <div className="top_slider">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={3}
                    slidesPerGroup={3}
                    freeMode = {true}
                    centeredSlides ={false}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    navigation
                    autoplay={{ // 자동 재생
                        delay: 4500, // 지연 시간 (한 슬라이더에 머물르는 시간)
                        disableOnInteraction: true, // 마우스 제어 이후 자동 재생을 막을지 말지
                    }}
                    pagination={{
                        type: 'fraction',
                        }}
                    speed={500}
                    // pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    loop={false}
                    className="slider"
                >
                    <SwiperSlide style={{background:"#333"}}>1<img src="https://picsum.photos/325/370" alt="" /></SwiperSlide>
                    <SwiperSlide style={{background:"#666"}}>2<img src="https://picsum.photos/325/370" alt="" /></SwiperSlide>
                    <SwiperSlide style={{background:"#999"}}>3<img src="https://picsum.photos/325/370" alt="" /></SwiperSlide>
                    <SwiperSlide style={{background:"#999"}}>4<img src="https://picsum.photos/325/370" alt="" /></SwiperSlide>
                    <SwiperSlide style={{background:"#999"}}>5<img src="https://picsum.photos/325/370" alt="" /></SwiperSlide>
                    <SwiperSlide style={{background:"#999"}}>6<img src="https://picsum.photos/325/370" alt="" /></SwiperSlide>
                    <SwiperSlide style={{background:"#999"}}><div style={{width:"325px",height:"370px"}}>7 전체보기 ==</div> </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}

