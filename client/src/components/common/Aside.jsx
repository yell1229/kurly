import React,{useState, useEffect} from 'react';
import { TfiArrowUp } from "react-icons/tfi";
import SlideList from '../SlideList.jsx';
import axios from 'axios';

export default function Aside() {
    const [productList, setProductList ]= useState([]);

    const handleScrollTop = () => {
        window.scroll({
            top:0,
            behavior:'smooth'
        });
    };

    useEffect(() =>{
        axios.get('/data/productList.json')
                .then(res => setProductList(res.data))
                .catch(err => console.log(err));
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
                <SlideList classname="aside_slide" imageList={productList} />
            </aside>
            {/* end of aside nav */}

            
            {/* <div className="btn_top" onClick={() => topRef.scrollIntoView({ behavior: 'smooth', block: 'start'})}><TfiArrowUp /></div> */}
            <div className="btn_top" onClick={handleScrollTop}><TfiArrowUp /></div>
        </>
    );
}

