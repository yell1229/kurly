import React,{useEffect, useState} from 'react';
// slide
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper/modules';
import axios from 'axios';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import '../../scss/slider.scss';

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

export default function AsideSlide() {
    const [pid, setPid] = useState(JSON.parse(localStorage.getItem('viewProducts')) || []);
    const [clickItem, setClickItem] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
          const savedPid = JSON.parse(localStorage.getItem('viewProducts')) || [];
          setPid(savedPid); 
        }, 2000);
    
        return () => clearInterval(interval);
      }, []);

    useEffect(() => {
        
        if(pid && pid.length > 0 ){
            axios.post('http://localhost:9000/product/clickItem',{'pid':pid})
            .then(res =>setClickItem(res.data))
            .catch(err =>console.log(err));
        }
    },[pid]);
    
    return (
        <div className="aside_slide">
            <div className='tit'>최근 본 상품</div>
            { clickItem && clickItem.length > 1 ? (
            <Swiper 
                    modules = {[Navigation]}
                    spaceBetween = {2}
                    slidesPerView = {'auto'}
                    slidesPerGroup ={ 1 }
                    direction = {'vertical' }
                    centeredSlides = {false}
                    speed = {500 }
                    freeMode = {false}
                    loop = {false}
                    loopAdditionalSlides={0}
                    className = {"slider"}
                    simulateTouch={false} 
                    navigation = {{nextEl: '.aside_slide .swiper-next', prevEl: '.aside_slide .swiper-prev'} }  
            >    
                {clickItem && clickItem.map((item, idx) =>
                    <SwiperSlide key={`${item.pid}_${idx}`} >
                        <a href={`/goods/detail/${item.pid}`}>
                            <img src={`http://localhost:9000/${item.image_url}`} alt='' />
                        </a>
                    </SwiperSlide>
                ) }
            </Swiper>
            ) : ''}
            <div className="swiper-prev"><IoIosArrowUp /></div>
            <div className="swiper-next"><IoIosArrowDown /></div>
        </div>
    );
}

