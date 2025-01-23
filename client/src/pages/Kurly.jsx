import React from 'react';
import { Link } from 'react-router-dom';
// icons
import { TfiClose } from "react-icons/tfi";
import { BiSolidDownArrow } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { HiOutlineMapPin } from "react-icons/hi2";
import { GoHeart } from "react-icons/go";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// slide
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

export default function Kurly() {
    return (
        <div id="wrap">
            <div className="top_banner">
                <div className="inner">
                    <a href="">지금 가입하고,  <b>50% 할인 쿠폰</b>  받아가세요!</a>
                    <button type="button"><TfiClose /></button>
                </div>
            </div>
            {/* start of header */}
            <header id="header">
                <div className="top_btns">
                    <div className="inner">
                        <ul className="top_btns">
                            <li>회원가입</li>   
                            <li>로그인</li>   
                            <li>고객센터<BiSolidDownArrow className="icon" />
                                <div className="sub_list">
                                    <ul>
                                        <li><a href="">공지사항</a></li>
                                        <li><a href="">자주하는 질문</a></li>
                                        <li><a href="">1:1 문의</a></li>
                                        <li><a href="">대량주문 문의</a></li>
                                    </ul>
                                </div>
                            </li>   
                        </ul>
                    </div>
                </div>
                <div className="header_top">
                    <h1><img src="./images/logo.svg" alt="Kurly" /> <strong>마켓컬리</strong></h1>
                    <div className="input_area">
                        <input type="text" placeholder="검색어를 입력해주세요" />
                        <button type="button"><BiSearch className="icon" /></button>
                    </div>
                    <div className="q_btns">
                        <div className="search_addr"><HiOutlineMapPin /></div>
                        <div className="heart"><GoHeart /></div>
                        <div className="cart"><BsCart2 /></div>
                    </div>
                </div>
                <div className="nav_area">
                    <div className="inner">
                        <div className="category"><a href=""><HiOutlineMenu  className='icon'/>카테고리</a></div>
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
            {/* end of header */}

            {/* start of container_area */}
            <div className="container_area">
                {/* start slide */}
                <div className="top_slider">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={50}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        Navigation
                        pagination={{ clickable: true }}
                    >
                    <SwiperSlide><img src="https://picsum.photos/1000/370" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://picsum.photos/1000/370" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://picsum.photos/1000/370" alt="" /></SwiperSlide>
                    </Swiper>
                </div>
                {/* end slide */}

                {/* sample ====> start 1 content */}
                <div className="cont_area">
                    <div className="tit_area">
                        <strong><a href="">✨주목! 설 선물 베스트 <MdOutlineKeyboardArrowRight className='icon' /></a></strong>
                        <span>실패 없는 설 인기 선물만 모았어요!</span>
                    </div>
                </div>
                {/* sample ====> end 1 content */}

                {/* sample ====> banner */}
                <div className="banner_area">
                    <a href=""><img src="./images/5502d5ec-27d9-40cc-8eb9-515c1de0bf6c.jpg" alt="" /></a>
                </div>
                {/* sample ====> banner */}

            </div>
            {/* end of container_area */}

            {/* start of footer */}
            <footer id="footer">
                <div className="footer_top">
                    <div className="info_center">
                        <div className="tit">고객행복센터</div>
                        <div className="tel"><strong>1644-1107</strong><span>월~토요일 오전 7시 - 오후 6시</span></div>
                        <ul>
                            <li>
                                <button type="button">카카오톡 문의</button>
                                <div>월~토요일 | 오전 7시 - 오후 6시<br />일/공휴일 | 오전 7시 - 오후 1시</div>
                            </li>
                            <li>
                                <button type="button">1:1 문의</button>
                                <div>365일<br />고객센터 운영시간에 순차적으로 답변드리겠습니다.</div>
                            </li>
                            <li>
                                <button type="button">대량주문 문의</button>
                                <div>월~금요일 | 오전 9시 - 오후 6시<br />점심시간 | 낮 12시 - 오후 1시</div>
                            </li>
                        </ul>
                    </div>
                    <div className="info_company">
                        <ul>
                            <li>컬리소개</li>
                            <li>컬리소개영상</li>
                            <li>투자정보</li>
                            <li>인재채용</li>
                            <li>이용약관</li>
                            <li>개인정보처리방침</li>
                            <li>이용안내</li>
                        </ul>
                        <div className="detail_company">
                            법인명 (상호) : 주식회사 컬리  사업자등록번호 : 261-81-23567 <a href="">사업자정보 확인</a><br />
                            통신판매업 : 제 2018-서울강남-01646 호<br />
                            주소 : 서울특별시 강남구 테헤란로 133, 18층(역삼동) <span> 대표이사 : 김슬아</span><br />
                            채용문의 : <a href="mailto:recruit@kurlycorp.com">recruit@kurlycorp.com</a><br />
                            팩스: 070 - 7500 - 6098
                        </div>
                        <div className="links">
                            <a href=""><img src="./images/ico_instagram.png" alt="인스타그램" /></a>
                            <a href=""><img src="./images/ico_fb.png" alt="페이스북" /></a>
                            <a href=""><img src="./images/ico_blog.png" alt="네이버블로그" /></a>
                            <a href=""><img src="./images/ico_naverpost.png" alt="네이버포스트" /></a>
                            <a href=""><img src="./images/ico_youtube.png" alt="유투브" /></a>
                        </div>
                    </div>
                </div>
                <div className="footer_btm">
                    <button type="button">
                        <img src="https://res.kurly.com/pc/ico/2208/logo_isms.svg" alt="isms 로고" />
                        <p>[인증범위] 컬리 쇼핑몰 서비스 개발·운영<br />(심사받지 않은 물리적 인프라 제외)<br />[유효기간] 2022.01.19 ~ 2025.01.18</p>
                    </button>
                    <button type="button">
                        <img src="https://www.eprivacy.or.kr/images/mng/sub/mark1_eprivacy_plus.png" alt="eprivacy plus 로고" />
                        <p>개인정보보호 우수 웹사이트 ·<br />개인정보처리시스템 인증 (ePRIVACY PLUS)</p>
                    </button>
                    <button type="button">
                        <img src="https://res.kurly.com/pc/ico/2208/logo_tosspayments.svg" alt="payments 로고" style={{width:"102px"}} />
                        <p>토스페이먼츠 구매안전(에스크로)<br />서비스를 이용하실 수 있습니다.</p>
                    </button>
                    <button type="button">
                        <img src="https://res.kurly.com/pc/ico/2208/logo_wooriBank.svg" alt="우리은행 로고" />
                        <p>고객님이 현금으로 결제한 금액에 대해 우리은행과<br />채무지급보증 계약을 체결하여 안전거래를 보장하고<br />있습니다.</p>
                    </button>
                </div>
                <div className="copyright">
                컬리에서 판매되는 상품 중에는 컬리에 입점한 개별 판매자가 판매하는 마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.<br />
                마켓플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서 통신판매의 당사자가 아닙니다. 컬리는 해당 상품의 주문, 품질, 교환/환불 등 의무와 책임을 부담하지 않습니다.<br />
                <em>© KURLY CORP. ALL RIGHTS RESERVED</em>
                </div>
            </footer>
            {/* end of footer */}

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
        </div>
    );
}

