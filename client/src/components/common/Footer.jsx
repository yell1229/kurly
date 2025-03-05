import React from 'react';
import Aside from './Aside.jsx';
import { useLocation, locationNow } from 'react-router-dom';

export default function Footer() {

    const locationNow = useLocation();
    if (locationNow.pathname === "/member/signup") return null; 

    return (
        <>
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
                            <a href=""><img src="/images/ico_instagram.png" referrerPolicy="no-referrer" alt="인스타그램" /></a>
                            <a href=""><img src="/images/ico_fb.png" referrerPolicy="no-referrer" alt="페이스북" /></a>
                            <a href=""><img src="/images/ico_blog.png" referrerPolicy="no-referrer" alt="네이버블로그" /></a>
                            <a href=""><img src="/images/ico_naverpost.png" referrerPolicy="no-referrer" alt="네이버포스트" /></a>
                            <a href=""><img src="/images/ico_youtube.png" referrerPolicy="no-referrer" alt="유투브" /></a>
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
            <Aside />
        </>
    );
}

