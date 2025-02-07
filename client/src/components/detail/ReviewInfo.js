import React from 'react';
import { LuThumbsUp } from "react-icons/lu";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function ReviewInfo() {
    return (
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
    );
}

