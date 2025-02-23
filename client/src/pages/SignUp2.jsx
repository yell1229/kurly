import React,{useRef, useState, useEffect} from 'react';

import '../scss/signup.scss';
import { GoCheck } from "react-icons/go";

export default function SignUp2() {
    const totalRef = useRef(null);
    const [agreeArr, setAgreeArr] = useState([]);
    const agreeRef = {
        agree1Ref: useRef(null),
        agree2Ref: useRef(null),
        agree3Ref: useRef(null),
        eventTotalRef: useRef(null),
        smsRef: useRef(null),
        emailRef: useRef(null),
        ageRef: useRef(null)
    }

    // 전체 버튼을 클릭하면 모두 클릭됨. 배열에 값을 추가함. 있으면 삭제, 없으면 추가
    // 하단 버튼의 체크여부를 확인하고 배열에서 추가나 삭제를 한다. 배열의 갯수가 전체갯수와 동일하면 전체버튼이 표시됨.
    const handleAdd = (e) => {
        const name = e.target.name;
        const isCheck = agreeArr.includes(name);
        console.log('name',name);
        if(isCheck){
            if(name === 'agree4'){
                setAgreeArr(prev => prev.filter(item => !['agree4', 'agree5', 'agree6'].includes(item)));
            }else{
                setAgreeArr((prev) => prev.filter((el) => el !== name));
            }
        }else{
            if(name === 'agree4'){
                setAgreeArr([...agreeArr,'agree4', 'agree5','agree6']);
            }else{setAgreeArr([...agreeArr, name]);}
        }
    }
    useEffect(() =>{
        if( agreeArr.includes('agree5') && agreeArr.includes('agree6') && !agreeArr.includes('agree4')) 
            setAgreeArr((prev) => [...prev, 'agree4']);
        else if(!agreeArr.includes('agree5') || !agreeArr.includes('agree6')){
            if(agreeArr.includes('agree4')){
                setAgreeArr((prev) => prev.filter((el) => el !== 'agree4'));
            }
        }
    },[agreeArr]);

    const toggleAllChecked = ({target:{checked}}) => {
        const refs = Object.values(agreeRef).map((el)=> el.current.name);
        setAgreeArr(checked? refs : []);
    }
    return (
        <div className="signup">
            <h2>회원가입</h2>
            <form>
                <div className="form_area">

                    <div className="f_wrap recommend_area">
                        <span>추가입력 사항</span>
                        <div>
                            <label className="radio_box">
                                <div className='radio'>
                                    {/* <input type="radio" value="" onClick={() =>setIsRecommendId(!isRecommendId)} /> */}
                                    <input type="radio" value="" />
                                <div>
                                </div></div>
                                친구초대 추천인 아이디
                            </label>
                           {/* {isRecommendId && <div className='option'>
                                <div><input type="text" placeholder='추천인 아이디 입력' /><button type="button">아이디 확인</button></div>
                                <ul>
                                    <li>가입 후 7일 이내 첫 주문 배송완료 시, 친구초대 적립금이 지급됩니다.</li>
                                    <li>ID 입력시, 대소문자 및 띄어쓰기에 유의 부탁드립니다.</li>
                                    <li>가입 이후는 수정이 불가능합니다.</li>
                                </ul>
                            </div> } */}
                        </div>
                    </div>
                    {/* 이용약관 */}
                    <div className='f_wrap agree_area'>
                        <span>이용약관동의<span className='icon_star'>*</span></span>
                        <div>
                            <div className='total'>
                                <label className='check_box'>
                                    <div className='check'><input type="checkbox" ref={totalRef} checked={agreeArr.length === 7} onChange={toggleAllChecked}  />
                                        <div><GoCheck /></div>
                                    </div>
                                    전체 동의합니다.
                                </label>
                                <div className='info_txt' >선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다.</div>
                            </div>
                            <div>
                                <label className='check_box'>
                                    <div className='check'><input type="checkbox" name="agree1"  ref={agreeRef.agree1Ref} onChange={handleAdd} checked={agreeArr.includes('agree1')} />
                                        <div><GoCheck /></div>
                                    </div>
                                    이용약관 동의
                                    <strong>(필수)</strong>
                                </label>
                                <button type="button">약관보기</button>
                            </div>
                            <div>
                                <label className='check_box'>
                                    <div className='check'><input type="checkbox" name="agree2" ref={agreeRef.agree2Ref} onChange={handleAdd} checked={agreeArr.includes('agree2')} />
                                        <div><GoCheck /></div>
                                    </div>
                                    개인정보 수집∙이용 동의
                                    <strong>(필수)</strong>
                                </label>
                                <button type="button">약관보기</button>
                            </div>
                            <div>
                                <label className='check_box'>
                                    <div className='check'><input type="checkbox" name="agree3"  ref={agreeRef.agree3Ref} onChange={handleAdd} checked={agreeArr.includes('agree3')} />
                                        <div><GoCheck /></div>
                                    </div>
                                    개인정보 수집∙이용 동의
                                    <strong>(선택)</strong>
                                </label> 
                                <button type="button">약관보기</button>
                            </div>
                            <div className='option'>
                                <label className='check_box'>
                                    <div className='check'><input type="checkbox"  name="agree4" ref={agreeRef.eventTotalRef} onChange={handleAdd} checked={agreeArr.includes('agree4')} />
                                        <div><GoCheck /></div>
                                    </div>
                                    무료배송, 할인쿠폰 등 혜택/정보 수신 동의
                                    <strong>(선택)</strong>
                                </label>
                                <div>
                                    <label className='check_box'>
                                        <div className='check'><input type="checkbox" name="agree5"  ref={agreeRef.smsRef} onChange={handleAdd} checked={agreeArr.includes('agree5')} />
                                            <div><GoCheck /></div>
                                        </div>
                                        SMS
                                    </label>
                                    <label className='check_box'>
                                        <div className='check'><input type="checkbox" name="agree6"  ref={agreeRef.emailRef} onChange={handleAdd} checked={agreeArr.includes('agree6')} />
                                            <div><GoCheck /></div>
                                        </div>
                                        이메일
                                    </label>
                                </div>
                            </div>
                            <div>
                                <label className='check_box'>
                                    <div className='check'><input type="checkbox" name="agree7"  ref={agreeRef.ageRef} onChange={handleAdd} checked={agreeArr.includes('agree7')} />
                                        <div><GoCheck /></div>
                                    </div>
                                    본인은 만 14세 이상입니다.
                                    <strong>(선택)</strong> 
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btn">
                    <button type="submit">가입하기</button>
                </div>
            </form>
        </div>
    );
}

