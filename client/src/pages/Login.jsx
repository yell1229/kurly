import React,{useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import '../scss/member.scss';

export default function Login() {
    return (
        <>
            <div className='login_area'>
                <div className="tit">로그인
                    <form>
                        <div className="form_area">
                            <div><input type="text" placeholder='아이디를 입력해주세요' /></div>
                            <div><input type="text" placeholder='비밀번호를 입력해주세요' /></div>
                            <div className="btn_find">
                                <a href="">아이디 찾기</a>
                                <a href="">비밀번호 찾기</a>
                            </div>
                        </div>
                        <button type="submit">로그인</button>
                        <Link to="/member/signup" className='btn'>회원가입</Link>
                    </form>
                </div>
            
            </div>
            <div className="dim_area">
                <div className='info_txt'>
                    <div>아이디 또는 비밀번호를 입력해 주세요.</div>
                    <button type="button">확인</button>
                </div>   
            </div>
        </>
        
    );
}

