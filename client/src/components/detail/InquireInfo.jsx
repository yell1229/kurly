import React,{useState, useRef, useContext, useEffect} from 'react';
import WritePopup from './WritePopup.jsx';
import { useLogin } from '../../hook/useLogin.js';
import {AuthContext} from '../auth/AuthContext.js';
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import axios from 'axios';


export default function InquireInfo({src, name, pid}) {
    const {loginCheck} = useLogin();
    const {isLogin} = useContext(AuthContext);
    const [isTrue, setIsTrue] = useState(false);
    const [data, setData] = useState([]);
    const [update, setUpdate] = useState(0);
    let [id, setId] = useState('');
    const textRef = useRef(null);

    //test
    const text = [
        {answer:'답변완료'},
        {answer:'답변대기'},
        {answer:'답변대기'},
        {answer:'답변완료'}
    ];
    const[clickIndex, setClickIndex] = useState(false);

    const handleClick = (idx) => {
        setClickIndex(idx);
    }

    const checkIsTrue = (check) => {
        setIsTrue(check);
    }
    // 팝업데이터
    const getPopupData = (data) => {
        console.log('data',data);
    }
    const openPopup = () => {
        if(isLogin) {
            setIsTrue(true);
        }else{
            loginCheck();
        }
    }
    useEffect(() => {
        setId(localStorage.getItem('user_id'));
        axios.post('http://localhost:9000/inquire/getList',{'pid':pid})
                .then(res => setData(res.data))
                .catch(err => console.log(err));
    },[update]);

    const reloadData = () => {
        axios.post('http://localhost:9000/inquire/getList',{'pid':pid})
                .then(res => setData(res.data))
                .catch(err => console.log(err));
    }
    const handleAnswer = async (iid) => {
        if(textRef.current.value === ''){
            textRef.current.focus();
        }else{
            const result = await axios.post('http://localhost:9000/inquire/answer',{'iid':iid,'text':textRef.current.value})
            if(result.data.affectedRows === 1) reloadData();
        }
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
                <button type="button" onClick={openPopup}>문의하기</button>
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
                    {data && data.map((item, idx) =>
                    <React.Fragment key={idx}>
                    <tr>
                        <td onClick={() => handleClick(idx)} key={idx} style={{cursor: item.answer === '답변완료' ? 'pointer':''}}>{item.subject}</td>
                        <td>연*연</td>
                        <td>2025.01.03</td>
                        <td>{item.answer ? '답변완료' : '답변대기'}</td>
                    </tr>
                    { (clickIndex === idx ) &&
                        <tr className='q_area'>
                            <td colSpan="4">
                                <div><span className="icon_q">Q</span>{item.subject}</div>
                                <div><span className="icon">A</span>
                                    {
                                        (!item.answer && id === 'admin') ?
                                        <>
                                            <textarea ref={textRef}></textarea> 
                                            <button onClick={() => handleAnswer(item.iid)}>답변등록</button>
                                        </> :
                                        <> {item.answer_txt} </>
                                    }
                                </div>
                                <div></div>
                            </td>
                        </tr>}
                    </React.Fragment >
                    )
                    }
                </tbody>
            </table>
            <div className="paging">
                <button type="button"><SlArrowLeft className='icon' /><span>이전</span></button>
                <button type="button"><SlArrowRight className='icon' /><span>다음</span></button>
            </div>
        </div>

        { isTrue && <WritePopup src={src} name={name} pid={pid} checkIsTrue={checkIsTrue} getPopupData={getPopupData} setUpdate={setUpdate} />}
        </>
    );
}

