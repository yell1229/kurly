import React,{useEffect, useState} from 'react';
// slide
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,Autoplay} from 'swiper/modules';
import { Link } from 'react-router-dom';
import axios from 'axios';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import '../../scss/slider.scss';

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
export default function AsideSlide() {
    const [pid, setPid] = useState(JSON.parse(localStorage.getItem('viewProducts')));
    const [clickItem, setClickIatem] = useState([]);

    useEffect(() => {
        axios.post('http://localhost:9000/product/clickItem',{'pid':pid})
            .then(res =>setClickIatem(res.data))
            .catch(err =>console.log(err));
    },[pid]);
    console.log('pid',pid);
    
    return (
        <div className="aside_slide">
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
                {clickItem && clickItem.map((item) =>
                    <SwiperSlide><Link key={item.pid} to={`/goods/detail/${item.pid}`}><img src={`http://localhost:9000/${item.image_url}`} alt='' /></Link></SwiperSlide>
                ) }
            </Swiper>
            <div className="swiper-prev"><IoIosArrowUp /></div>
            <div className="swiper-next"><IoIosArrowDown /></div>
        </div>
    );
}

