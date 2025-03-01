import React,{useContext, useRef, useState} from 'react';
import ImageMultiUpload from './ImageMultiUpload.jsx';
import {AuthContext} from '../auth/AuthContext.js';
import { MdClose } from "react-icons/md";
import axios from 'axios';

export default function WritePopup({src, name,pid, checkIsTrue, file, setUpdate}) {
    const {isLogin} = useContext(AuthContext);
    const titleRef = useRef(null);
    const textareaRef = useRef(null);
    let [textCount, setTextCount] = useState(0);
    const [isTextarea, setIsTextarea] = useState(true);
    const [fnames, setFnames] = useState({});
    const [previewList, setPreviewList] = useState([]);
    let [formData, setFormData] = useState({'title':'','text':''});

    const getMultiFilesName = (filenames) => {
        setFnames(filenames);
        setPreviewList(filenames.uploadname)
    }
    
    const getValues = (e) => {
        getTextCount();
        const {name, value} = e.target;
        setFormData({...formData, [name]:value});
    }
    
    const getTextCount = () => {
        let count = textareaRef.current.value.length;
        setTextCount(count);
        if(count >= 1000){
            textareaRef.current.value = textareaRef.current.value.slice(0,999);
        }
    }

    const validator = () => {
        if(titleRef.current.value === ''){
            titleRef.current.focus();
            return false;
        }else if(textareaRef.current.value === ''){
            textareaRef.current.focus();
            return false;
        }
        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = localStorage.getItem('user_id');
        if(validator()){
            if(fnames.uploadname){
                formData = {...formData,'images':fnames.uploadname, 'id':id, 'pid':pid};      
                axios.post('http://localhost:9000/review',formData)
                    .then(res =>{
                        if(res.data.affectedRows === 1)  setUpdate(1)
                    })
                    .catch(err => console.log(err));
           } else{
                formData = {...formData, 'id':id, 'pid':pid};                 
                axios.post('http://localhost:9000/inquire',formData)
                    .then(res =>{
                        if(res.data.affectedRows === 1)  setUpdate(1)
                    })
                    .catch(err => console.log(err));
           }
           checkIsTrue(false);
        }
    }

    return (
         <div className="inquire_area">
                    <div className="box_area" style={{height : file ? '800px' : '690px'}}>
                        <div className="tit">{ file ? '상품 리뷰 쓰기' : '상품 문의하기' }<button type="button" onClick={() => checkIsTrue(false)}><MdClose /></button></div>
                        <div className="product">
                            <div className="thumb"> <img src={`http://localhost:9000/${src}`} alt={name} /></div>
                            <div>{name}</div>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="form_box">
                                <span>제목</span>
                                <div><input type="text" name="title" placeholder='제목을 입력해 주세요' ref={titleRef} onChange={getValues} /></div>
                            </div>
                            { file && <>
                                <div className="form_box">
                                    <span>사진</span>
                                    <div><ImageMultiUpload getMultiFilesName={getMultiFilesName} /></div>
                                </div> 
                                <ul className='preview_imgs'>
                                    {previewList  && previewList .map((img) =>
                                    <li><img src={img} alt="" /></li>
                                    )}
                                </ul>
                                </>
                            }
                            <div className="form_box">
                                <span>내용</span>
                                <div className='text_form'>
                                    <textarea name="text" id="" ref={textareaRef} onChange={getValues}></textarea>
                                    { isTextarea && <div class="textarea_info" onClick={()=>{setIsTextarea(!isTextarea)}}>
                                        <strong>상품문의 작성 전 확인해 주세요</strong>
                                        <ul>
                                            <li>답변은 영업일 기준 2~3일 소요됩니다.</li>
                                            <li>해당 게시판의 성격과 다른 글은 사전동의 없이 담당 게시판으로 이동될 수 있습니다.</li>
                                            <li>배송관련, 주문(취소/교환/환불)관련 문의 및 요청사항은 마이컬리 내 1:1 문의에 남겨주세요.</li>
                                            </ul>
                                        <strong>제품</strong>
                                        <ul>
                                            <li>입고일 : 품절 상품 입고 일이 확정된 경우, 섬네일에 기재되어 있습니다. (종 모양을 클릭하여, 재입고 알림 설정 가능)</li><li>제품 상세정보 : 영양성분 및 함량, 용량, 보관 및 취급 방법 등 제품 정보는 상세이미지 또는 상세정보에서 확인 가능합니다.</li></ul>
                                        <strong>주문취소</strong>
                                        <ul>
                                            <li>배송 단계별로 주문취소 방법이 상이합니다.</li>
                                            <li>[입금확인] 단계 : [마이컬리 &gt; 주문내역 상세페이지] 에서 직접 취소 가능</li>
                                            <li>[입금확인] 이후 단계 : 고객센터로 문의</li>
                                            <li>생산이 시작된 [상품 준비중] 이후에는 취소가 제한되는 점 고객님의 양해 부탁드립니다.</li><li>비회원은 모바일 App 또는 모바일 웹사이트에서 [마이컬리 &gt; 비회원 주문 조회 페이지]에서 취소가 가능합니다.</li>
                                            <li>일부 예약상품은 배송 3~4일 전에만 취소 가능합니다.</li>
                                        </ul>
                                        <p>※ 주문상품의 부분 취소는 불가능합니다. 전체 주문 취소 후 재구매 해주세요.</p>
                                        <strong>배송</strong>
                                        <ul>
                                            <li>주문 완료 후 배송 방법(샛별배송/하루배송)은 변경이 불가능합니다.</li>
                                            <li>배송일 배송시간 지정은 불가능합니다. (예약배송 포함)</li>
                                        </ul>
                                        <p>※ 전화번호, 이메일, 주소, 계좌번호 등의 상세 개인정보가 문의 내용에 저장되지 않도록 주의해 주시기 바랍니다.</p>
                                    </div> }
                                    <div className="count">
                                        <span style={{ color: textCount !==0 ? 'rgb(51, 50, 50)':'rgb(153, 153, 153)'}}>{textCount}</span>
                                        /1000
                                    </div> 
                                </div> 
                            </div>
                            <div className="btns">
                                <button type='reset' onClick={() => checkIsTrue(false)}>취소</button>
                                <button type='submit'>등록</button>
                            </div>
                        </form>
                    </div>
                </div>
    );
}

