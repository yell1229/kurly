import React,{useRef, useEffect} from 'react';
import AsideSlide from './AsideSlide.jsx';
import {throttle} from 'lodash';
import { TfiArrowUp } from "react-icons/tfi";

export default function Aside() {
    const arrowRef = useRef(null);
    const handleScrollTop = () => {
        window.scroll({
            top:0,
            behavior:'smooth'
        });
    };
    useEffect(() => {
        const scrollArrow = throttle(() =>{
            if(window.scrollY > 1000){
                arrowRef.current.classList.add('on');
            }else{
                arrowRef.current.classList.remove('on');
            }
        },100);
        
        window.addEventListener('scroll',scrollArrow);

        return () => window.removeEventListener('scroll',scrollArrow);
        
    },[]);
    return (
        <>
            {/* start of aside nav */}
            <aside className='ban_q_aside'>
                <a href=""><img src="/images/deliveryInfo.jpg" alt="" /></a>
                <ul>
                    <li><a href="">컬리 고객 제도</a></li>
                    <li><a href="">컬리 큐레이터</a></li>
                    <li><a href="">레시피</a></li>
                </ul>
                <AsideSlide />
            </aside>
            {/* end of aside nav */}

            <div className="btn_top" onClick={handleScrollTop} ref={arrowRef} ><TfiArrowUp /></div>
        </>
    );
}

