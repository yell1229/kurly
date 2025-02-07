import React,{useRef, useState, useEffect} from 'react';
import Header from '../components/common/Header.jsx';
import Footer from '../components/common/Footer.jsx';
import { GoHeart } from "react-icons/go";
import { VscBell } from "react-icons/vsc";
import { SlArrowDown } from "react-icons/sl";

import { HiOutlineEmojiHappy } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";

import ProductInfo from '../components/detail/ProductInfo.jsx';
import DetailInfo from '../components/detail/DetailInfo.jsx';
import ReviewInfo from '../components/detail/ReviewInfo.js';
import InquireInfo from '../components/detail/InquireInfo.jsx';

import '../scss/detail.scss';

export default function Detail() {
    const refs = {
        tab1Ref:useRef(null),
        tab2Ref:useRef(null),
        tab3Ref:useRef(null),
        tab4Ref:useRef(null) 
    }
    const tabRefs = {
        nav1Ref:useRef(null),
        nav2Ref:useRef(null),
        nav3Ref:useRef(null),
        nav4Ref:useRef(null)
    }
    // const [detailInfo1, setDetailInfo1] = useState(true);
    // const [detailInfo2, setDetailInfo2] = useState(true);
    const btmCartRef = useRef(null);
    const [btnCheck, setBtnCheck] = useState(false);
    const [offset,setOffset] = useState([]);

    useEffect(() =>{
        
        const updateOffsets = () => {
            setOffset([
                window.scrollY + refs.tab1Ref.current?.getBoundingClientRect().top,
                window.scrollY + refs.tab2Ref.current?.getBoundingClientRect().top,
                window.scrollY + refs.tab3Ref.current?.getBoundingClientRect().top,
                window.scrollY + refs.tab4Ref.current?.getBoundingClientRect().top
            ]);
        };

        setTimeout(updateOffsets,1000);
        
        const scrollCheck = () =>{
            if(window.scrollY < offset[0]){
                navClass(tabRefs.nav1Ref);       
            }else if(window.scrollY >= offset[0] && window.scrollY < offset[1]){
                navClass(tabRefs.nav1Ref);               
            }else if(window.scrollY >= offset[1] && window.scrollY < offset[2]){
                navClass(tabRefs.nav2Ref);
            }else if(window.scrollY >= offset[2] && window.scrollY < offset[3]){
                navClass(tabRefs.nav3Ref);
            }else if(window.scrollY >= offset[3] ){
                navClass(tabRefs.nav4Ref);
            }
            
            if(window.scrollY > 400){
                btmCartRef.current.classList.add('scroll');
            }else{
                btmCartRef.current.classList.remove('scroll');
            }
        }
        scrollCheck();
        
        window.addEventListener('scroll',scrollCheck);
    },[offset]);

    // tab nav click event
    const navClass = (ref) => {
        const children = ref.current.parentElement.children;
        for(let tab of children){
            tab.classList.remove('on');
        }
        ref.current.classList.add('on');
    }
    const tabActive = (ref, target) => {
        navClass(ref);

        target.current.scrollIntoView({behavior: "smooth", block: "start"});
    }

    // btm add cart btn
    const openCart = () => {
        if(btmCartRef.current){
            if(btnCheck === false){
                btmCartRef.current.classList.remove('scroll');
                btmCartRef.current.classList.add('active');
                return setBtnCheck(!btnCheck);
            }else{
                btmCartRef.current.classList.remove('active');
                btmCartRef.current.classList.add('scroll');
                return setBtnCheck(!btnCheck);
            }
        }
    }

    return (
        <div>
            <div className="detail_area">
                <div className="inner">
                    <div className="top_info">
                        {/* left */}
                        <div className="img_area">
                            <div className="img">
                                <img src="https://picsum.photos/430/552" alt="" />
                                <div className="dc">+15% 쿠폰</div>
                                <div className="payback">페이백</div>
                            </div>
                            <div className="brand">
                                <div className="thumb"><img src="https://picsum.photos/64/64" alt="" /></div>
                                <div className="brand_info">
                                    <strong>브랜드관</strong>
                                    <span>랑콤 &gt;</span>
                                    <p>90년 역사의 럭셔리 프렌치 뷰티 브랜드 랑콤</p>
                                </div>
                            </div>
                        </div>
                        {/* left */}

                        {/* right */}
                        <div className="detail_contents">
                            <div className="route">샛별배송 | 랑콤 &gt;</div>
                            <div className="product_tit">
                                <strong>[랑콤]  NEW 제니피끄 얼티미트 세럼 50ml 설날 선물세트  ( 15ml*3ea + 아이크림 5m +쇼핑백 추가 증정!)</strong>
                                <span>풍성하게 꾸린 랑콤 베스트셀러</span>
                            </div>
                            <div className="price"> 
                                <span className="dc">15%</span><strong>165,750원</strong>
                            </div>
                            <div className="discount">첫 구매라면 10,000원 즉시 할인</div>
                            <div className="coupon">설 선물대전 15% 쿠폰 받기</div>
                            <ul>
                                <li>
                                    <span>배송</span>
                                    <div>
                                        샛별배송
                                        <span className='smfont'>23시 전 주문 시 수도권/충청 내일 아침7시 전 도착<br />(그 외 지역 아침 8시 전 도착)</span>
                                    </div>
                                </li>
                                <li>
                                    <span>판매자</span>
                                    <div>컬리</div>
                                </li>
                                <li>
                                    <span>포장타입</span>
                                    <div>상온(종이포장)
                                        <span className='smfont'>택배배송은 에코 포장이 스티로폼으로 대체됩니다.</span>
                                    </div>
                                </li>
                                <li>
                                    <span>상품선택</span>
                                    <div className='box_wrap'>
                                        <span class="product_name">[랑콤]  NEW 제니피끄 얼티미트 세럼 50ml 설날 선물세트</span>
                                        <div className="count_box">
                                            <div className="count">
                                                <button type="button">-</button>
                                                <div>1</div>
                                                <button type="button">+</button>
                                            </div>
                                            <div className="price"><em>195,000원</em><strong>165,750원</strong></div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="total_price"><span>총 상품금액:</span><strong>165,750원</strong></div>
                            <div className="btns">
                                <div className="heart"><GoHeart /></div>
                                <div className="bell"><VscBell /></div>
                                <div className="add_cart">장바구니 담기</div>
                            </div>
                        </div>
                        {/* right */}
                    </div>
                    <div className="detail_tap_area">
                        <nav>
                            <ul>
                                <li ref={tabRefs.nav1Ref} onClick={() => tabActive(tabRefs.nav1Ref,refs.tab1Ref)} className='on'>상품설명</li>
                                <li ref={tabRefs.nav2Ref} onClick={() => tabActive(tabRefs.nav2Ref,refs.tab2Ref)}>상세정보</li>
                                <li ref={tabRefs.nav3Ref} onClick={() => tabActive(tabRefs.nav3Ref,refs.tab3Ref)}>후기(1,234)</li>
                                <li ref={tabRefs.nav4Ref} onClick={() => tabActive(tabRefs.nav4Ref,refs.tab4Ref)}>문의</li>
                            </ul>
                        </nav>
                        <div className="tab_box">
                            {/* 1 상품설명 */}
                            <div ref={refs.tab1Ref}>
                                <ProductInfo />
                            </div>
                            {/* 2 상세정보 */}

                            <div ref={refs.tab2Ref}>
                                <DetailInfo />
                            </div>
                            {/* 3 상품 후기 */}
                            <div ref={refs.tab3Ref}>
                                <ReviewInfo />
                            </div>
                            {/* 4 상품 문의 */}
                            <div ref={refs.tab4Ref} >
                                <InquireInfo />  
                            </div>
                        </div>
                    </div>
                </div>

                <div className="btm_cart_area" ref={btmCartRef}>
                    <div className="cont_area">
                        <div className="label" onClick={openCart}>상품선택<span><IoIosArrowDown /></span></div>

                        <div className='box_wrap'>
                            <span class="product_name">[랑콤]  NEW 제니피끄 얼티미트 세럼 50ml 설날 선물세트</span>
                            <div className="count_box">
                                <div className="count">
                                    <button type="button">-</button>
                                    <div>1</div>
                                    <button type="button">+</button>
                                </div>
                                <div className="price"><strong>165,750원</strong></div>
                            </div>
                        </div>

                        <div className="total_price"><span>총 상품금액:</span><strong>165,750</strong><em>원</em></div>
                        <div className='btns_wrap'>
                            <div className="btns">
                                <div className="heart"><GoHeart /></div>
                                <div className="bell"><VscBell /></div>
                                <div className="add_cart">장바구니 담기</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

