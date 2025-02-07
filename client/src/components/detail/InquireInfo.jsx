import React from 'react';
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

export default function InquireInfo() {
    return (
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
    );
}

