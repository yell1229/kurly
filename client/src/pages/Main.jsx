import React,{useState, useEffect} from 'react';
// icons
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import SlideList from '../components/SlideList.jsx';
import axios from 'axios';


export default function Kurly() {
    const [topImageList,setTopImageList] = useState([]);
    const [contSlide01,setContSlide01] = useState([]);
    // main top slide
    useEffect(() => {
        axios.get('/data/banner.json')
                .then(res => setTopImageList(res.data) )
                .catch(err => console.log(err));
        axios.get('/data/productList.json')
                .then(res => setContSlide01(res.data) )
                .catch(err => console.log(err));
    },[]);

//console.log('topImageList ===> ',topImageList);

    return (
        <>
            {/* start of container_area */}
            <div className="container_area">

                <SlideList classname="top_slider" imageList={topImageList} />

                {/* sample ====> start 1 content */}
                <div className="cont_area">
                    <div className="tit_area">
                        <strong><a href="">✨주목! 설 선물 베스트 <MdOutlineKeyboardArrowRight className='icon' /></a></strong>
                        <span>실패 없는 설 인기 선물만 모았어요!</span>
                    </div>

                    {/* start components */}
                    <div className="product_list_wrap"> 
                        <SlideList classname="slider_tab4" imageList={contSlide01} />
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

