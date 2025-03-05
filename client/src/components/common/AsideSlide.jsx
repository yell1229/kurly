import React,{useEffect, useState} from 'react';
// slide
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper/modules';
import { useNavigate, useLocation , Link} from 'react-router-dom';
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
    const [clickItem, setClickIatem] = useState([]);
    const navigate = useNavigate();
    const { pathname } = useLocation();
    let changePass = '';

    const handleTargetLink = (pid) => {
        navigate(`/goods/detail/${pid}`, { replace: true });
    }

    useEffect(() => {
        if(pid && pid.length > 0 ){
            axios.post('http://localhost:9000/product/clickItem',{'pid':pid})
            .then(res =>setClickIatem(res.data))
            .catch(err =>console.log(err));
        }
    },[pid]);

    useEffect(()=>{

        // window.location.href = pathname;
    },[pathname]);
    return (
        <div className="aside_slide">
            <div className='tit'>최근 본 상품</div>
            <Swiper 
                    modules = {[Navigation, Pagination]}
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
                {clickItem && clickItem.map((item, idx) =>
                    <SwiperSlide key={item.pid} >
                        <div onClick={()=>handleTargetLink(item.pid)}>
                            <img src={`http://localhost:9000/${item.image_url}`} alt='' />
                        </div>
                    </SwiperSlide>
                ) }
            </Swiper>
            <div className="swiper-prev"><IoIosArrowUp /></div>
            <div className="swiper-next"><IoIosArrowDown /></div>
        </div>
    );
}

