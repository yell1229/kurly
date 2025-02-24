import React,{useState, useRef} from 'react';
import WritePopup from './WritePopup.jsx';
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";


export default function InquireInfo({src, name}) {
    
    const [isTrue, setIsTrue] = useState(false);
    const [popupData, setPopupData] = useState({});

    //test
    const text = [1,2,3,4];
    const[clickIndex, setClickIndex] = useState(false);
    const handleClick = (idx) => {
        setClickIndex(idx);
    }

    const checkIsTrue = (check) => {
        setIsTrue(check);
    }
    // 팝업데이터
    const getPopupData = (data) => {
        setPopupData(data)
    }
    
    return (
        <>
        <div className="tab_inquire_info">
            <div className="tit_area"> 
                <strong>상품 문의</strong>
                <ul>
                    <li>상품에 대한 문의를 남기는 공간입니다. 해당 게시판의 성격과 다른 글은 사전동의 없이 담당 게시판으로 이동될 수 있습니다.</li>
                    <li>배송관련, 주문(취소/교환/환불)관련 문의 및 요청사항은 마이컬리 내<a href="">1:1문의</a>에 남겨주세요.</li>
                </ul>
                <button type="button" onClick={()=>{setIsTrue(!isTrue)}}>문의하기</button>
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
                    {text.map((item, idx) =>
                    <>
                    <tr>
                        <td onClick={() => handleClick(idx)}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, unde.</td>
                        <td>연*연</td>
                        <td>2025.01.03</td>
                        <td>답변완료</td>
                    </tr>
                    { clickIndex === idx &&
                        <tr className='q_area'>
                            <td colSpan="4">
                                <div><span className="icon_q">Q</span>오늘 새벽 배송으로 받았는데, 양념만 왔는데 이게 맞는건가요? </div>
                                <div><span className="icon">A</span>
                                    안녕하세요. 고객님<br/><br/>
                                    고객님께서 문의하신 내용은 현재 이전 상담사를 통해 안내받으신 것으로 확인됩니다.<br/><br/>
                                    상품 불량이 확인되는 사진을 첨부해주시면 보다 정확하고 신속한 안내 도움 드리도록 하겠습니다.<br/><br/>
                                    이전 상담사가 해당 건에 대해 익익 전화 예정으로 문의하신 내용 처리까지 시간양해 부탁드리겠습니다.<br/><br/>
                                    늘 신선하고 최고의 상품을 제공 드릴 수 있도록 최선을 다하는 컬리가 함께하겠습니다.<br/><br/>
                                    고객님, 이루고자 하시는 모든 일들 건승하시고 항상 건강과 행운이 가득하시길 기원드립니다.<br/><br/>
                                    감사합니다.<br />
                                    Better Life for All. Kurly
                                </div>
                                <div>2025.02.20</div>
                            </td>
                        </tr>}
                    </>
                    )
                    }
                </tbody>
            </table>
            <div className="paging">
                <button type="button"><SlArrowLeft className='icon' /><span>이전</span></button>
                <button type="button"><SlArrowRight className='icon' /><span>다음</span></button>
            </div>
        </div>

        { isTrue && <WritePopup src={src} name={name} checkIsTrue={checkIsTrue} getPopupData={getPopupData} />}
        </>
    );
}

