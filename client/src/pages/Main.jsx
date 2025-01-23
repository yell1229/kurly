import React,{useRef} from 'react';
import { Link } from 'react-router-dom';
// icons
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { TfiArrowUp } from "react-icons/tfi";

// components
import Header from '../components/common/Header.jsx';
import Footer from '../components/common/Footer.jsx';
import SlideList from '../components/SlideList.jsx';
import ProductThumb from '../components/ProductThumb.jsx';


export default function Kurly() {
    const wrapRef = useRef(null);

    return (
        <div id="wrap" ref={wrapRef}>
            <Header />

            {/* start of container_area */}
            <div className="container_area">

                {/* start slide */}
                <SlideList classname="top_slider" />
                {/* end slide */}

                {/* sample ====> start 1 content */}
                <div className="cont_area" style={{height:'1000px'}}>
                    <div className="tit_area">
                        <strong><a href="">✨주목! 설 선물 베스트 <MdOutlineKeyboardArrowRight className='icon' /></a></strong>
                        <span>실패 없는 설 인기 선물만 모았어요!</span>
                    </div>

                    {/* start components */}
                    <div className="product_list_wrap"> 
                        <SlideList classname="slider_tab4" />
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

            <Footer />

            {/* start of aside nav */}
            <aside className='ban_q_aside'>
                <a href=""><img src="./images/deliveryInfo.jpg" alt="" /></a>
                <ul>
                    <li><a href="">컬리 고객 제도</a></li>
                    <li><a href="">컬리 큐레이터</a></li>
                    <li><a href="">레시피</a></li>
                </ul>
            </aside>
            {/* end of aside nav */}

            <div className="btn_top" onClick={() => wrapRef.current.scrollIntoView({ behavior: 'smooth', block: 'start'})}><TfiArrowUp /></div>
        </div>
    );
}

