import React from 'react';
import Header from '../components/common/Header.jsx';
import Footer from '../components/common/Footer.jsx';
import { GoHeart } from "react-icons/go";
import { VscBell } from "react-icons/vsc";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

import '../scss/detail.scss';

export default function Detail() {
    return (
        <div>
            <Header />
            <div className="detail_area">
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
                            <li>상품설명</li>
                            <li>상세정보</li>
                            <li>후기(1,234)</li>
                            <li>문의</li>
                        </ul>
                    </nav>
                    <div className="tab_box">
                        <div className="tab_product_info">
                        상품설명
                        </div>
                        <div className="tab_detail_info">
                        상세정보
                        </div>
                        <div className="tab_review_info">
                        후기(1,234)
                        </div>
                        <div className="tab_inquire_info">
                            <div className="tit_area"> 
                                <strong>상품 문의</strong>
                                <ul>
                                    <li>상품에 대한 문의를 남기는 공간입니다. 해당 게시판의 성격과 다른 글은 사전동의 없이 담당 게시판으로 이동될 수 있습니다.</li>
                                    <li>배송관련, 주문(취소/교환/환불)관련 문의 및 요청사항은 마이컬리 내<a href="">1:1문의</a>에 남겨주세요.</li>
                                </ul>
                                <button type="button">문의하기</button>
                            </div>

                            <table>
                                <colgroup>
                                    <col style={{width:'660px'}}/>
                                    <col style={{width:'100px'}}/>
                                    <col style={{width:'150px'}}/>
                                    <col style={{width:'100px'}}/>
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>제목</th>
                                        <th>작성자</th>
                                        <th>작성일</th>
                                        <th>답변상태</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><a href="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, unde.</a></td>
                                        <td>연*연</td>
                                        <td>2025.01.03</td>
                                        <td>답변완료</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="paging">
                                <button type="button"><SlArrowLeft className='icon' /><span>이전</span></button>
                                <button type="button"><SlArrowRight className='icon' /><span>다음</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

