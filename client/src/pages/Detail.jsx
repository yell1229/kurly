import React from 'react';
import Header from '../components/common/Header.jsx';
import Footer from '../components/common/Footer.jsx';
import { GoHeart } from "react-icons/go";
import { VscBell } from "react-icons/vsc";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";
import { LuThumbsUp } from "react-icons/lu";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { HiOutlineEmojiHappy } from "react-icons/hi";

import '../scss/detail.scss';

export default function Detail() {
    return (
        <div>
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
                        {/* 1 상품설명 */}
                        <div className="tab_product_info">
                            <ul>
                                <li><img src="https://placehold.co/1010x400?text=img01" alt="" /></li>
                                <li><img src="https://placehold.co/1010x400?text=img02" alt="" /></li>
                                <li><img src="https://placehold.co/1010x400?text=img03" alt="" /></li>
                                <li><img src="https://placehold.co/1010x400?text=img04" alt="" /></li>
                            </ul>
                        </div>
                        {/* 2 상세정보 */}
                        <div className="tab_detail_info">
                            <ul className='product_img'>
                                <li><img src="https://placehold.co/1010x400?text=detail_01" alt="" /></li>
                                <li><img src="https://placehold.co/1010x400?text=detail_02" alt="" /></li>
                            </ul>
                            <div className="why">
                                <div className="tit">WHY KURLY</div>
                                <ul>
                                    <li>
                                        <div><span><HiOutlineEmojiHappy /></span>깐깐한 상품위원회</div>
                                        <p>나와 내 가족이 먹고 쓸 상품을 고르는<br />
                                        마음으로 매주 상품을 직접 먹어보고,<br />
                                        경험해보고 성분, 맛, 안정성 등 다각도의<br />
                                        기준을 통과한 상품만을 판매합니다.
                                        <span>(온라인 기준 / 자사몰, 직구 제외)</span>
                                        </p>
                                    </li>
                                    <li>
                                        <div><span><HiOutlineEmojiHappy /></span>차별화된 Kurly Only 상품</div>
                                        <p>
                                        전국 각지와 해외의 훌륭한 생산자가<br />
                                        믿고 선택하는 파트너, 컬리.<br />
                                        3천여 개가 넘는 컬리 단독 브랜드, 스펙의<br />
                                        Kurly Only 상품을 믿고 만나보세요.
                                        <span>(온라인 기준 / 자사몰, 직구 제외)</span>
                                        </p>
                                    </li>
                                    <li>
                                        <div><span><HiOutlineEmojiHappy /></span>신선한 풀콜드체인 배송</div>
                                        <p>
                                        온라인 업계 최초로 산지에서 문 앞까지<br />
                                        상온, 냉장, 냉동 상품을 분리 포장 후<br />
                                        최적의 온도를 유지하는 냉장 배송 시스템,<br />
                                        풀콜드체인으로 상품을 신선하게 전해드립니다.
                                        <span>(샛별배송에 한함)</span>
                                        </p>
                                    </li>
                                    <li>
                                        <div><span><HiOutlineEmojiHappy /></span>고객, 생산자를 위한 최선의 가격</div>
                                        <p>
                                        매주 대형 마트와 주요 온라인 마트의 가격<br />
                                        변동 상황을 확인해 신선식품은 품질을<br />
                                        타협하지 않는 선에서 최선의 가격으로,<br />
                                        가공식품은 언제나 합리적인 가격으로<br />
                                        정기 조정합니다.
                                        </p>
                                    </li>
                                    <li>
                                        <div><span><HiOutlineEmojiHappy /></span>환경을 생각하는 지속 가능한 유통</div>
                                        <p>
                                        친환경 포장재부터 생산자가 상품에만<br />
                                        집중할 수 있는 직매입 유통구조까지,<br />
                                        지속 가능한 유통을 고민하며 컬리를 있게<br />
                                        하는 모든 환경(생산자, 커뮤니티, 직원)이<br />
                                        더 나아질 수 있도록 노력합니다.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className="happy_center">
                                <div className="tit">
                                    <strong>고객행복센터</strong>
                                    <p>
                                        궁금하신 점이나 서비스 이용에 불편한 점이 있으신가요?
                                        <span>문제가 되는 부분을 사진으로 찍어 아래 중 편하신 방법으로 접수해 주시면 빠르게 도와드리겠습니다.</span>
                                    </p>
                                </div>
                                <ul>
                                    <li>
                                        <div>전화 문의 1644-1107</div>
                                        <p>월~토요일 오전 7시 - 오후 6시</p>
                                    </li>
                                    <li>
                                        <div>카카오톡 문의</div>
                                        <p>
                                            월~토요일 오전 7시 - 오후 6시<br />
                                            일/공휴일 오전 7시 - 오후 1시<br />
                                            <span>
                                            카카오톡에서 '컬리' 를 검색 후<br />대화창에 문의 및 불편사항을<br />남겨주세요.
                                            </span>
                                        </p>
                                    </li>
                                    <li>
                                        <div>홈페이지 문의</div>
                                        <p>
                                            365일<br/>
                                            로그인 &gt; 마이컬리 &gt; 1:1 문의<br/>
                                            <span>고객센터 운영 시간에 순차적으로<br />답변해드리겠습니다.</span>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className="refund_area">
                                <div className="box_area">
                                    <div className="info">
                                        <strong>교환 및 환불 안내</strong>
                                        <p>교환 및 환불이 필요하신 경우 [마이컬리 &gt; 주문내역]에서 직접 반품 접수하거나<br />
                                        고객행복센터로 문의해 주시기 바랍니다.</p>
                                        <button type="button">닫기<span><SlArrowDown/></span></button>
                                    </div>
                                    <div className="detail">
                                        <ul>
                                            <li>
                                                <strong>01. 상품에 문제가 있는 경우</strong>
                                                <p>
                                                    받으신 상품이 표시·광고 내용 또는 계약 내용과 다른 경우에는 상품을 받은 날부터 3개월 이내,
                                                    그 사실을 알게 된 날부터 30일 이내에 반품을 요청하실 수 있습니다.
                                                    고객행복센터로 문의해 주시기 바랍니다.
                                                    상품의 정확한 상태를 확인할 수 있도록 사진을 함께 보내주시면 더 빠른 상담이 가능합니다.
                                                    <span>※ 배송 상품에 문제가 있는 것으로 확인되면 배송비는 판매자가 부담합니다.</span>
                                                </p>
                                            </li>
                                            <li>
                                                <strong>02. 단순 변심, 주문 착오의 경우</strong>
                                                <p>
                                                    <strong style={{paddingTop:'0'}}>신선 / 냉장 / 냉동 식품</strong>
                                                    상품의 특성상 재판매가 불가하여 단순 변심, 주문 착오, 주소 오입력 등 고객의 책임 있는 사유로 인한 교환 및 반품
                                                    이 어려운 점 양해 부탁드립니다.
                                                    상품에 따라 조금씩 맛이 다를 수 있으며, 개인의 기호에 따라 같은 상품도 다르게 느끼실 수 있습니다.
                                                    <strong>유통기한 30일 이상 식품 (신선 / 냉장 / 냉동 제외) &amp; 기타 상품 (뷰티 제품, 생활용품)</strong>
                                                    상품을 받은 날부터 7일 이내 반품 접수가 가능합니다. 직접 접수하시거나 고객행복센터로 문의해 주시기 바랍니다.
                                                    <span>※ 단순 변심, 주문 착오, 주소 오입력 등 고객의 책임 있는 사유로 인한 교환 및 반품의 경우 고객님께서 왕복배송비 6,000원(배송비를 낸 경우 3,000원)을 부담하셔야 합니다.</span>
                                                </p>
                                            </li>
                                            <li>
                                                <strong>03. 교환·환불이 불가한 경우</strong>
                                                <p>다음에 해당하는 교환·환불 신청은 처리가 어려울 수 있으니 양해 부탁드립니다.
                                                    <span className='dot'>
                                                        고객님의 책임 있는 사유로 상품이 멸실되거나 훼손된 경우<br />
                                                        (단, 상품의 내용을 확인하기 위해 포장 등을 훼손한 경우는 제외)
                                                    </span>
                                                    <span className='dot'>고객님의 사용 또는 일부 소비로 상품의 가치가 감소한 경우</span>
                                                    <span className='dot'>시간이 지나 다시 판매하기 곤란할 정도로 상품의 가치가 감소한 경우</span>
                                                    <span className='dot'>복제가 가능한 상품의 포장이 훼손된 경우</span>
                                                    <span className='dot'>고객님의 주문에 따라 개별적으로 생산되는 상품의 제작이 이미 진행된 경우</span>
                                                    <span className='dot'>반품 신청 후 14일 내에 물품이 반환되지 않고 고객님과 연락이 되지 않는 경우</span>
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="box_area">
                                    <div className="info">
                                        <strong>주문 취소 안내</strong>
                                        <p>[마이컬리&gt;주문내역]에서 직접 취소하실 수 있습니다.</p>
                                        <button type="button">닫기<span><SlArrowDown/></span></button>
                                    </div>
                                    <div className="detail">
                                        <ul>
                                            <li>
                                                <strong>주문 취소 관련</strong>
                                                <p>
                                                    - 주문 취소는 [주문완료] 상태일 때만 가능합니다.<br />
                                                    - [마이컬리&gt;주문내역]에서 직접 취소하실 수 있으며, 부득이 직접 취소하시기 어려운 상황일 경우 고객센터로 문의해 주시기 바랍니다.<br />
                                                    - [배송준비중]부터는 상품의 출고가 완료되어 주문 취소가 불가하니, 반품으로 진행 부탁드립니다.(상품에 따라 반품이 불가할 수 있습니다). 도움이 필요하신 경우 고객행복센터로 문의해 주시기 바랍니다.<br />
                                                    - 주문마감 시간에 임박할수록 취소 가능 시간이 짧아질 수 있습니다.<br />
                                                    - 일부 예약상품은 판매 시 안내된 취소 마감 기한 내에만 취소할 수 있습니다.<br />
                                                    - 미성년자 결제 시 법정대리인이 그 거래를 취소할 수 있습니다.
                                                </p>
                                            </li>
                                            <li>
                                                <strong>결제 승인 취소 / 환불 관련</strong>
                                                <p>
                                                    - 카드 환불은 카드사 정책에 따르며, 자세한 사항은 카드사에 문의해주세요.<br />
                                                    - 결제 취소 시, 사용하신 적립금과 쿠폰도 모두 복원됩니다.
                                                </p>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                                <div className="box_area">
                                    <div className="info">
                                        <strong>배송관련 안내</strong>
                                        <p>배송 과정 중 기상 악화 및 도로교통 상황에 따라 부득이하게 지연 배송이 발생될 수 있습니다.</p>
                                    </div>
                                    <div className="detail">

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 3 상품 후기 */}
                        <div className="tab_review_info">
                            <div className="tit_area"> 
                                <strong>상품 후기</strong>
                            </div>
                            <div className='thumb_list'>
                                <ul>
                                    <li><img src="https://picsum.photos/124/124" alt="" /></li>
                                    <li><img src="https://picsum.photos/124/124" alt="" /></li>
                                    <li><img src="https://picsum.photos/124/124" alt="" /></li>
                                    <li><img src="https://picsum.photos/124/124" alt="" /></li>
                                    <li><img src="https://picsum.photos/124/124" alt="" /></li>
                                    <li><img src="https://picsum.photos/124/124" alt="" /></li>
                                    <li><img src="https://picsum.photos/124/124" alt="" /></li>
                                    <li><img src="https://picsum.photos/124/124" alt="" /></li>
                                </ul>
                                <a href="">+ 더보기</a>
                            </div>
                            <div className="table_area">
                                <div className='top'>
                                    <div className="total">총 9,123개</div>
                                    <div className="select">
                                        <button type="button" className='active'>추천순</button>
                                        <button type="button">최근등록순</button>
                                    </div>
                                </div>
                                <table>
                                    <colgroup>
                                        <col style={{width:'225px'}} />
                                        <col style={{width:'auto'}}/>
                                    </colgroup>
                                    <tr>
                                        <td colspan="2"><span className='icon'>공지</span><a href="">[25년 1월 3주] 베스트 후기 선정 안내</a></td>
                                    </tr>
                                    <tr>
                                        <td colspan="2"><span className='icon'>공지</span><a href="">[25년 1월 3주] 베스트 후기 선정 안내</a></td>
                                    </tr>
                                    <tr>
                                        <td colspan="2"><span className='icon'>공지</span><a href="">[25년 1월 3주] 베스트 후기 선정 안내</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className='icon_best'>베스트</span>
                                            <span className='icon_members'>멤버스</span>
                                            <strong>이**</strong>
                                        </td>
                                        <td>
                                            <div>[선물세트] 유명산지 사과세트 3.8kg (14~15입)</div>
                                            <p>명절때 마다 재재재구매 중인 믿고먹는 컬리 사과예요!
                                            추석,설 마다 주문하고 있는데 이번에도 상태 좋고
                                            알이 토실하고 맛나보이는 사과 받았어요🥰👍
                                            배송이야 말할 것도 없구요, 상자 열자마자
                                            빨갛고 이쁜 사과들 덕분에 기분이 좋았답니다^_^
                                            하나하나 다 확인해보니 큰 하자 없이 다들 깨끗하네요!
                                            항상 어디서 오나 보는데 이번엔 음성농협에서 배달왔고 부사네요. 
                                            가을엔 홍로, 겨울엔 부사 그때그때 맛있는 사과로 보내주니 이 퀄리티 밖에선 이가격에 못사요~😋❤️
                                            포장 박스도 블랙이라 고급져서 넘 맘에 들구요, 
                                            어머니 드실때 옆에서 한번 맛봐야겠어요👍
                                            요즘 사과가 금값이라 많이 비싼데
                                            컬리에서 사과 구매하셔요~😆
                                            </p>
                                            <div className='thumb_list'>
                                                <ul>
                                                    <li><img src="https://picsum.photos/124/124" alt="" /></li>
                                                    <li><img src="https://picsum.photos/124/124" alt="" /></li>
                                                    <li><img src="https://picsum.photos/124/124" alt="" /></li>
                                                    <li><img src="https://picsum.photos/124/124" alt="" /></li>
                                                    <li><img src="https://picsum.photos/124/124" alt="" /></li>
                                                    <li><img src="https://picsum.photos/124/124" alt="" /></li>
                                                    <li><img src="https://picsum.photos/124/124" alt="" /></li>
                                                    <li><img src="https://picsum.photos/124/124" alt="" /></li>
                                                </ul>
                                                <a href="">+ 더보기</a>
                                            </div>
                                            <div className="t_btm_area">
                                                <div className="date">2024.08.06</div>
                                                <button type="button"><LuThumbsUp/>도움돼요 80</button>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                                <div className="paging">
                                    <button type="button"><IoIosArrowBack /></button>
                                    <button type="button"><IoIosArrowForward /></button>
                                </div>
                            </div>
                        </div>
                        {/* 4 상품 문의 */}
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
        </div>
    );
}

