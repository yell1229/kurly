import React,{useState,useEffect} from 'react';
import SlideList from '../../components/SlideList.jsx';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function TopContent() {
    const [list, setList] = useState([]);
    useEffect(() => {
        axios.post('http://localhost:9000/product/filterItem',{'pid':[1,2,3,4]})
            .then(res =>setList(res.data))
            .catch(err =>console.log(err));
    },[]);
    
    return (
        <div className="cont_area">
            <div className="tit_area">
                <strong><a href="">✨머리부터 발끝까지 보습채우기 <MdOutlineKeyboardArrowRight className='icon' /></a></strong>
                <span>[최대 82%]혜택 상품만! 스킨부터 바디로션까지</span>
            </div>
            <div className="product_list_wrap">
                <SlideList classname="slider_tab4" imageList={list} />
            </div>
            <Link className='btn_total' to="/goods/all">전체보기</Link>
        </div>
    );
}

