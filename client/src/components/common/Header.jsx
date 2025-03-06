import React,{useState, useRef, useEffect, useContext} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {AuthContext} from '../auth/AuthContext.js';
import Postcode from '../Postcode.jsx';

import { BiSolidDownArrow } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { HiOutlineMapPin } from "react-icons/hi2";
import { GoHeart } from "react-icons/go";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";
import { TfiClose } from "react-icons/tfi";

export default function Header() {
    const {isLogin, setIsLogin} = useContext(AuthContext);
    const [topBan, setTopBan] = useState(true);
    const [navList, setNavList] = useState([]);
    const [customerBox,setCustomerBox] = useState(false);
    const [layerAddr,setLayerAddr] = useState(false);
    const [navIdx, setNavIdx] = useState([]);
    const [checkCategory, setCheckCategory] = useState(false);
    const catrgoryWrapRef = useRef(null);
    const navRef = useRef(null);
    const addrRef = useRef(null);
    useEffect(() => {
        axios.get('/data/navlist.json')
            .then((res) => setNavList(res.data))
            .catch(err => console.log(err));
    },[]);

    useEffect(() => {
        const scrollNav = () => {
            const scrollY = window.scrollY
            const nav = navRef.current.offsetTop;
            if(scrollY > nav){
                navRef.current.classList.add('fixed');
            } else {
                navRef.current.classList.remove('fixed');
            }
            
        }
        window.addEventListener('scroll',scrollNav);
        return () => window.removeEventListener('scroll',scrollNav);
    },[]);
    const navHoverEvent = (idx) =>{  
        const submenu = navList[idx -1]?.sub;
        setNavIdx( Array.isArray(submenu) ? submenu : []);     
    }

    return (
        <>
            { topBan && <div className="top_banner">
                            <div className="inner">
                                <Link to="/member/signup">지금 가입하고,  <b>50% 할인 쿠폰</b>  받아가세요!</Link>
                                <button type="button" onClick={() => setTopBan(false)}><TfiClose /></button>
                            </div>
                        </div> }

            <header id="header">
                <div className="top_btns">
                    <div className="inner">
                        <ul className="top_btns">
                            <li><Link to="/member/signup">회원가입</Link></li>   
                            <li>{ isLogin ? '로그아웃' : <Link to="/member/login">로그인</Link> }</li>   
                            <li onMouseEnter={() => setCustomerBox(true)} onMouseLeave={() => setCustomerBox(false)}>고객센터 <BiSolidDownArrow className="icon" />
                                {customerBox && <div className="sub_list">
                                    <ul>
                                        <li><a href="">공지사항</a></li>
                                        <li><a href="">자주하는 질문</a></li>
                                        <li><a href="">1:1 문의</a></li>
                                        <li><a href="">대량주문 문의</a></li>
                                    </ul>
                                </div>}
                            </li>   
                        </ul>
                    </div>
                </div>
                <div className="header_top">
                    <h1><Link to="/"><img src="/images/logo.svg" alt="Kurly" referrerPolicy="no-referrer" /></Link> <strong>마켓컬리</strong></h1>
                    <div className="input_area">
                        <input type="search" placeholder="검색어를 입력해주세요" />
                        <button type="button"><BiSearch className="icon" /></button>
                    </div>
                    <div className="q_btns">
                        <div className="search_addr" onMouseEnter={()=> setLayerAddr(true)} onMouseLeave={()=> setLayerAddr(false)} >
                        
                            <HiOutlineMapPin /><span>배송지</span>
                            <input type="hidden"  ref={addrRef} />
                            {/* {layerAddr &&  */}
                            <div className="layer_pop">
                                <div className="msg"><span>배송지를 등록</span>하고<br />구매 가능한 상품을 확인하세요!</div>
                                <div className="btns">
                                    <Link to="/member/login">로그인</Link>
                                    {/* <button>주소검색</button> */}
                                </div>
                            </div>
                             {/* } */}
                        </div>
                        <div className="heart"><Link to="/goods/pick"><GoHeart /></Link><span>찜하기</span></div>
                        <div className="cart"><Link to="/cart"><BsCart2 /></Link><span>장바구니</span></div>
                    </div>
                </div>
                <div className="nav_area" ref={navRef}>
                    <div className="inner">
                        <div className="category"  onMouseEnter={()=>{setCheckCategory(true)}} onMouseLeave={()=>{setCheckCategory(false)}}>
                            <div className="menu"><HiOutlineMenu  className='icon'/>카테고리</div>
                            {checkCategory && <div className="nav_detail_category" ref={catrgoryWrapRef}>
                                <ul className="depth1" onMouseEnter={(e)=>{ catrgoryWrapRef.current.classList.add('active')}}>
                                    {navList.map((menu,i) =>
                                        <li onMouseEnter={() => navHoverEvent(menu.id)} key={i}>
                                            {menu.name}
                                        </li>
                                    )}
                                </ul>
                                <div className="depth2">
                                    <ul>
                                        {navIdx && navIdx.map((menu, i) =>
                                            <li key={i}><a href={menu.url}>{menu.name}</a></li>
                                        
                                        )}     
                                    </ul>
                                </div>
                            </div> }

                        </div>
                        
                        <nav>
                            <ul>
                                <li><a href="">신상품</a></li>
                                <li><a href="">베스트</a></li>
                                <li><a href="">알뜰쇼핑</a></li>
                                <li><a href="">특가/혜택</a></li>
                            </ul>
                        </nav>
                        { isLogin && <div className="btn_new_product"><Link to="/goods/new">상품등록</Link></div> }
                        <div className="btn_delivery"><span>샛별·하루</span> 배송안내</div>
                    </div>
                </div>
            </header>
        </>
    );
}

