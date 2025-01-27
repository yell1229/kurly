import React,{useState, useRef, useEffect} from 'react';
import { BiSolidDownArrow } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { HiOutlineMapPin } from "react-icons/hi2";
import { GoHeart } from "react-icons/go";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";
import { TfiClose } from "react-icons/tfi";

import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Header() {
    const [topBan, setTopBan] = useState(true);
    const [navList, setNavList] = useState([]);
    const [navCheck, setNavCheck] = useState(false);
    const [customerBox,setCustomerBox] = useState(false);
    const [layerAddr,setLayerAddr] = useState(false);
    const depth1 = useRef(null);

    useEffect(() => {
        axios.get('/data/navlist.json')
            .then((res) => setNavList(res.data))
            .catch(err => console.log(err));
    },[]);

    const navHoverEvent = (e) =>{
        
            e.target.classList.add('on');
            // e.target.classList.remove('on');
    }

    return (
        <>
            { topBan && <div className="top_banner">
                            <div className="inner">
                                <a href="">지금 가입하고,  <b>50% 할인 쿠폰</b>  받아가세요!</a>
                                <button type="button" onClick={() => setTopBan(false)}><TfiClose /></button>
                            </div>
                        </div> }

            <header id="header">
                <div className="top_btns">
                    <div className="inner">
                        <ul className="top_btns">
                            <li>회원가입</li>   
                            <li><Link to="/member/login">로그인</Link></li>   
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
                    <h1><Link to="/"><img src="./images/logo.svg" alt="Kurly" /></Link> <strong>마켓컬리</strong></h1>
                    <div className="input_area">
                        <input type="search" placeholder="검색어를 입력해주세요" />
                        <button type="button"><BiSearch className="icon" /></button>
                    </div>
                    <div className="q_btns">
                        <div className="search_addr" onMouseEnter={()=> setLayerAddr(true)} onMouseLeave={()=> setLayerAddr(false)}>
                            <HiOutlineMapPin /><span>배송지</span>
                            {layerAddr && <div className="layer_pop">
                                <div className="msg"><span>배송지를 등록</span>하고<br />구매 가능한 상품을 확인하세요!</div>
                                <div className="btns">
                                    <Link to="/member/login">로그인</Link>
                                    <button type="button"><BiSearch />주소검색</button>
                                </div>
                            </div>}
                        </div>
                        <div className="heart"><GoHeart /><span>찜하기</span></div>
                        <div className="cart"><BsCart2 /><span>장바구니</span></div>
                    </div>
                </div>
                <div className="nav_area">
                    <div className="inner">
                        <div className="category">
                            <a href=""><HiOutlineMenu  className='icon'/>카테고리</a>
                            {/* start detail nav list */}
                            <div className="nav_detail_category">
                                <ul className="depth1">
                                    {navList.map((menu, idx) =>
                                            <li onMouseEnter={(e) => navHoverEvent(e)}>
                                                {menu.name}
                                                <ul className="sub" key={idx}>
                                                    {menu.sub.map((submenu) =>
                                                        <li><a href={submenu.url}>{submenu.name}</a></li>
                                                    )}     
                                                </ul>
                                            </li>
                                        )}
                                </ul>
                                <div className="depth2"></div>
                            </div>
                            {/* end detail nav list */}
                        </div>
                        
                        <nav>
                            <ul>
                                <li><a href="">신상품</a></li>
                                <li><a href="">베스트</a></li>
                                <li><a href="">알뜰쇼핑</a></li>
                                <li><a href="">특가/혜택</a></li>
                            </ul>
                        </nav>
                        <div className="btn_delivery"><span>샛별·하루</span> 배송안내</div>
                    </div>
                </div>
            </header>
        </>
    );
}

