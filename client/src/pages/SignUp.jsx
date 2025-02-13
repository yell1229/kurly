import React,{useRef, useState} from 'react';
import Postcode from '../components/Postcode.jsx';
import axios from 'axios';

import '../scss/signup.scss';
import { GoCheck } from "react-icons/go";
import { MdArrowDropDown } from "react-icons/md";

export default function SignUp() {
    const [isDomainInput, setIsDomainInput] = useState(true);
    const [isDomainSelect, setIsDomainSelect] = useState(false);
    const [isRecommendId, setIsRecommendId] = useState(false);

    const refs = {
        idRef: useRef(null),
        pwdRef: useRef(null),
        cpwdRef: useRef(null),
        nameRef: useRef(null),
        emailRef: useRef(null),
        emaildomainRef: useRef(null),
        phoneRef: useRef(null),
        address1Ref: useRef(null),
        address2Ref: useRef(null)
    };
    const msgRef = {
        idRef: useRef(null),
        pwdRef: useRef(null),
        cpwdRef: useRef(null),
        nameRef: useRef(null),
        emailRef: useRef(null),
        emaildomainRef: useRef(null),
        phoneRef: useRef(null),
        address1Ref: useRef(null),
        address2Ref: useRef(null)
    }
    const totalRef = useRef(null);
    const agreeRef = {
        agree1Ref: useRef(null),
        agree2Ref: useRef(null),
        agree3Ref: useRef(null),
        eventTotalRef: useRef(null),
        smsRef: useRef(null),
        emailRef: useRef(null),
        ageRef: useRef(null)
    }
    const init = {
        id: "",
        pwd: "",
        cpwd: "",
        name: "",
        email: "",
        emaildomain: "",
        phone: "",
        address1: "",
        address2: "",
        gender: "",
        birth1: "",
        birth2: "",
        birth3: "",
    };
    const [formData, setFormData] = useState(init);
    const errMsg=[
        {"name":"id","ref":msgRef.idRef , "msg":"아이디를 입력해주세요."},
        {"name":"pwd","ref":msgRef.pwdRef ,"msg":"비밀번호를 입력해주세요."},
        {"name":"cpwd","ref":msgRef.cpwdRef ,"msg":"동일한 비밀번호를 입력해주세요."},
        {"name":"name","ref":msgRef.nameRef ,"msg":"이름을 입력해주세요."},
        {"name":"email","ref":msgRef.emailRef ,"msg":"이메일 형식으로 입력해 주세요."},
        {"name":"maildomain","ref":msgRef.emaildomainRef ,"msg":"이메일 형식으로 입력해 주세요."},
        {"name":"phone","ref":msgRef.phoneRef ,"msg":"휴대폰 번호를 입력해 주세요."},
        {"name":"address1","ref":msgRef.address1Ref ,"msg":"주소를 검색해주세요."},
        {"name":"address2","ref":msgRef.address2Ref ,"msg":"나머지 주소를 입력해주세요."}
    ]
    
    // input change event
    const handleChangeForm = (e) => {
        const {name,value} = e.target;
        if(name === 'emaildomain'){
            setFormData({...formData, emaildomain:value});
        }else{
            setFormData({...formData, [name]:value});
        }
        errMsg.map((target) => {
            if(target.name === name) { 
                    if(value ==='') target.ref.current.innerText= target.msg ;
                    else target.ref.current.innerText= ''
            }
        })
    }
    // address
    const setAddress = (addr) => {
        refs.address1Ref.current.value=addr;
        setFormData({...formData,'address1':addr});    
        msgRef.address1Ref.current.innerText='';
    }
    // domain select
    const getEmailDomain = (e) => {
        const text = e.target.innerText;
        
        if(text !== '직접입력'){
            refs.emaildomainRef.current.value = text;
            setIsDomainSelect(!isDomainSelect);
            setFormData({...formData, emaildomain:text});
        }else{
            setIsDomainInput(false);
            refs.emaildomainRef.current.focus();
            setIsDomainSelect(false);
        }
        
    }
    
    // validate
    const validate = () =>{
        const refValues = Object.entries(refs);
        const arrayErrMsg = Object.entries(errMsg);
        
        for(let i=0; i< refValues.length; i++){
           const ref = refValues[i][1];
           const msg = arrayErrMsg[i][1];
           
            if(ref.current){
                if(ref.current.name === 'emaildomain'){
                    if(ref.current.value===''){
                        ref.current.focus();
                        return false;
                    }            
            //    }else if(ref.current.name === 'gender'){
            //         if(refs.genderDefaultRef.current && refs.genderDefaultRef.current.checked) {
            //             msg.ref.current.innerText=msg.msg;
            //             return false;
            //         }
                }else if(ref.current.name === 'address1'){
                    if(ref.current.value===''){
                        ref.current.focus();
                        msg.ref.current.innerText=msg.msg;
                        return false;
                    }  
                }
               else if(ref.current.value===''){
                    if(ref.current.name === msg.name ){
                        console.log(msg.msg, msg.name);
                        msg.ref.current.innerText=msg.msg;
                        ref.current.focus();
                        return false;
                    } 
                }
            }
        }
        return true;
    }
    
    // login
    const handleSubmit = (e) => {
        e.preventDefault();
        // if(validate()) console.log('formData ===> ', formData);

        axios.post('http://localhost:9000/member/login',formData)
                .then(res => console.log(res.data))
                .catch(err => console.log(err));
    }
    
    //이용약관 동의
    const checkAll = (e) => {
        const total = totalRef.current.checked;
        const list = Object.values(agreeRef);
        if(total === true){
            list.map((ref) => {
                if(ref.current.checked === false){
                    ref.current.checked = true;
                }
            })
        }else{
            list.map((ref) => {
                if(ref.current.checked === true){
                    ref.current.checked = false;
                }
            })
        } 
    }

    const deleteCheckAll = () => {
        totalRef.current.checked= false;
        // if(agreeRef.smsRef.current.checked === false){
        //     agreeRef.eventTotalRef.current.checked=false;
        // }else if(agreeRef.emailRef.current.checked === false){
        //     agreeRef.eventTotalRef.current.checked=false;
        // }
    }

    return (
        <div className="signup">
            <h2>회원가입</h2>
            <form onSubmit={handleSubmit}>
                <div className="form_area">
                    <div className="top_info"><span className='icon_star'>*</span> 필수입력사항</div>

                    <div className="f_wrap">
                        <span>아이디<span className='icon_star'>*</span></span>
                        <div>
                            <input type="text" name="id" ref={refs.idRef} onChange={handleChangeForm} placeholder='아이디를 입력해주세요' minLength={6} maxLength={16} />
                            <div className='txt' ref={msgRef.idRef}></div>
                        </div>
                        <div><button type="button" className="get_dblcheck">아이디 중복체크</button></div>
                    </div>
                    <div className="f_wrap">
                        <span>비밀번호<span className='icon_star'>*</span></span>
                        <div>
                            <input type="password" name="pwd" ref={refs.pwdRef} onChange={handleChangeForm} placeholder='비밀번호를 입력해주세요' />
                            <div className='txt' ref={msgRef.pwdRef}></div>
                        </div>
                    </div>
                    <div className="f_wrap">
                        <span>비밀번호확인<span className='icon_star'>*</span></span>
                        <div>
                            <input type="password" name="cpwd" ref={refs.cpwdRef} onChange={handleChangeForm} placeholder='비밀번호를 한번 더 입력해주세요' />
                            <div className='txt' ref={msgRef.cpwdRef}></div>
                        </div>
                    </div>
                    <div className="f_wrap">
                        <span>이름<span className='icon_star'>*</span></span>
                        <div>
                            <input type="text"  name="name" ref={refs.nameRef} onChange={handleChangeForm} placeholder='이름을 입력해 주세요' />
                            <div className='txt' ref={msgRef.nameRef}></div>
                        </div>
                    </div>
                    <div className="f_wrap">
                        <span>이메일<span className='icon_star'>*</span></span>
                        <div>
                            <div className='email'>
                                <input type="text"  name="email" ref={refs.emailRef} onChange={handleChangeForm} placeholder='예: marketkurly' />
                                <div className="select">
                                    <div className="default" onClick={() =>{setIsDomainSelect(!isDomainSelect)}}>
                                        { isDomainInput ? 
                                        <input type="text" disabled placeholder="선택하기" name="emaildomain" ref={refs.emaildomainRef} onInput={handleChangeForm} /> : 
                                        <input type="text" placeholder="직접입력" name="emaildomain" ref={refs.emaildomainRef} onInput={handleChangeForm} /> 
                                        }  
                                        <span><MdArrowDropDown/></span>
                                    </div>
                                    {isDomainSelect && <ul>
                                        <li><button type="button" onClick={getEmailDomain}>naver.com</button></li>
                                        <li><button type="button" onClick={getEmailDomain}>gmail.com</button></li>
                                        <li><button type="button" onClick={getEmailDomain}>hanmail.com</button></li>
                                        <li><button type="button" onClick={getEmailDomain}>kakao.com</button></li>
                                        <li><button type="button" onClick={getEmailDomain}>daum.net</button></li>
                                        <li><button type="button" onClick={getEmailDomain}>직접입력</button></li>
                                    </ul>}
                                </div>
                            </div>
                            <div className='txt' ref={msgRef.emailRef}></div>
                        </div>
                    </div>
                    <div className="f_wrap">
                        <span>휴대폰<span className='icon_star'>*</span></span>
                        <div>
                            <input type="number"  name="phone" ref={refs.phoneRef} onChange={handleChangeForm} placeholder='숫자만 입력해주세요.' />
                            <div className="txt" ref={msgRef.phoneRef}></div>
                        </div>
                        {/* <div><button type="button" className="get_number">인증번호 받기</button></div> */}
                    </div>
                    <div className="f_wrap">
                        <span>주소<span className='icon_star'>*</span></span>
                        <div className='postcode_area'>
                            <Postcode setAddress={setAddress} />
                            <div className='txt' ref={msgRef.address1Ref}></div>
                            <input type="text" name="address1" ref={refs.address1Ref} onChange={handleChangeForm} />
                            <input type="text" name="address2" ref={refs.address2Ref}  onChange={handleChangeForm} placeholder='나머지 주소' />
                            <div className='txt' ref={msgRef.address2Ref}></div>
                            <em>배송지에 따라 상품 정보가 달라질 수 있습니다.</em> 
                        </div>
                    </div>
                    <div className="f_wrap">
                        <span>성별</span>
                        <div className="depth2">
                            <div className='gender_area'>
                                <label className="radio_box">
                                    <div className='radio'>
                                        <input type="radio" name="gender" onChange={handleChangeForm} value="m"  />
                                    <div>
                                    </div></div>
                                    남자
                                </label>
                                <label className="radio_box">
                                    <div className='radio'>
                                        <input type="radio" name="gender" onChange={handleChangeForm} value="f"  />
                                    <div>
                                    </div></div>
                                    여자
                                </label>
                                <label className="radio_box">
                                    <div className='radio'>
                                        <input type="radio" name="gender" onChange={handleChangeForm} value="default" defaultChecked />
                                    <div>
                                    </div></div>
                                    선택안함
                                </label>
                            </div>
                            <div className='txt'></div>
                        </div>
                    </div>
                    <div className="f_wrap birth">
                        <span>생년월일</span>
                        <div className="depth2">
                            <div>
                                <input type="text" placeholder='YYYY' name="year" onChange={handleChangeForm} />
                                <span>/</span>
                                <input type="text" placeholder='MM' name="month" onChange={handleChangeForm} />
                                <span>/</span>
                                <input type="text" placeholder='DD' name="day" onChange={handleChangeForm} />
                            </div>
                            <div className='txt'></div>
                        </div>
                    </div>
                    <div className="f_wrap recommend_area">
                        <span>추가입력 사항</span>
                        <div>
                            <label className="radio_box">
                                <div className='radio'>
                                    <input type="radio" value="" onClick={() =>setIsRecommendId(!isRecommendId)} />
                                <div>
                                </div></div>
                                친구초대 추천인 아이디
                            </label>
                           {isRecommendId && <div className='option'>
                                <div><input type="text" placeholder='추천인 아이디 입력' /><button type="button">아이디 확인</button></div>
                                <ul>
                                    <li>가입 후 7일 이내 첫 주문 배송완료 시, 친구초대 적립금이 지급됩니다.</li>
                                    <li>ID 입력시, 대소문자 및 띄어쓰기에 유의 부탁드립니다.</li>
                                    <li>가입 이후는 수정이 불가능합니다.</li>
                                </ul>
                            </div> }
                        </div>
                    </div>
                    {/* 이용약관 */}
                    <div className='f_wrap agree_area'>
                        <span>이용약관동의<span className='icon_star'>*</span></span>
                        <div>
                            <div className='total'>
                                <label className='check_box'>
                                    <div className='check'><input type="checkbox" ref={totalRef} onChange={checkAll} />
                                        <div><GoCheck /></div>
                                    </div>
                                    전체 동의합니다.
                                </label>
                                <div className='info_txt' >선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다.</div>
                            </div>
                            <div>
                                <label className='check_box'>
                                    <div className='check'><input type="checkbox"  ref={agreeRef.agree1Ref} checked={false} onChange={deleteCheckAll} />
                                        <div><GoCheck /></div>
                                    </div>
                                    이용약관 동의
                                    <strong>(필수)</strong>
                                </label>
                                <button type="button">약관보기</button>
                            </div>
                            <div>
                                <label className='check_box'>
                                    <div className='check'><input type="checkbox" ref={agreeRef.agree2Ref} checked={false} onChange={deleteCheckAll} />
                                        <div><GoCheck /></div>
                                    </div>
                                    개인정보 수집∙이용 동의
                                    <strong>(필수)</strong>
                                </label>
                                <button type="button">약관보기</button>
                            </div>
                            <div>
                                <label className='check_box'>
                                    <div className='check'><input type="checkbox"  ref={agreeRef.agree3Ref} checked={false} onChange={deleteCheckAll} />
                                        <div><GoCheck /></div>
                                    </div>
                                    개인정보 수집∙이용 동의
                                    <strong>(선택)</strong>
                                </label> 
                                <button type="button">약관보기</button>
                            </div>
                            <div className='option'>
                                <label className='check_box'>
                                    <div className='check'><input type="checkbox"  ref={agreeRef.eventTotalRef} checked={false} onChange={deleteCheckAll} />
                                        <div><GoCheck /></div>
                                    </div>
                                    무료배송, 할인쿠폰 등 혜택/정보 수신 동의
                                    <strong>(선택)</strong>
                                </label>
                                <div>
                                    <label className='check_box'>
                                        <div className='check'><input type="checkbox"  ref={agreeRef.smsRef} checked={false} onChange={deleteCheckAll} />
                                            <div><GoCheck /></div>
                                        </div>
                                        SMS
                                    </label>
                                    <label className='check_box'>
                                        <div className='check'><input type="checkbox"  ref={agreeRef.emailRef} checked={false} onChange={deleteCheckAll} />
                                            <div><GoCheck /></div>
                                        </div>
                                        이메일
                                    </label>
                                </div>
                            </div>
                            <div>
                                <label className='check_box'>
                                    <div className='check'><input type="checkbox"  ref={agreeRef.ageRef} checked={false} onChange={deleteCheckAll} />
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

