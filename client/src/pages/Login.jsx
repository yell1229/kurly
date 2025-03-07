import React,{useState, useRef, useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {AuthContext} from '../components/auth/AuthContext.js';
import '../scss/member.scss';
import axios from 'axios';

export default function Login() {
    const {isLogin, setIsLogin} = useContext(AuthContext);
    const idRef = useRef(null);
    const pwdRef = useRef(null);
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        let {name, value} = e.target;
        setFormData({...formData, [name]:value});    
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:9000/member/login',formData)
                .then(res => {                
                    if(res.data.result === 1) {
                        localStorage.setItem('token',res.data.token);
                        localStorage.setItem('user_id',formData.id);
                        setIsLogin(true);
                        setTimeout(()=>{ navigate('/') },1000);
                    }else{
                        alert('다시 입력해주세요.');
                        idRef.current.value='';
                        pwdRef.current.value='';
                        idRef.current.focus();
                    }
                })
                .catch(err => console.log(err));
    }

    return (
        <>
            <div className='login_area'>
                <div className="tit">로그인</div>
                <form onSubmit={handleSubmit}>
                    <div className="form_area">
                        <div><input type="text" name="id" placeholder='아이디를 입력해주세요' ref={idRef} onChange={handleChange} /></div>
                        <div><input type="password" name="pwd" placeholder='비밀번호를 입력해주세요' ref={pwdRef} onChange={handleChange} /></div>
                        <div className="btn_find">
                            <a href="">아이디 찾기</a>
                            <a href="">비밀번호 찾기</a>
                        </div>
                    </div>
                    <button type="submit">로그인</button>
                    <Link to="/member/signup" className='btn'>회원가입</Link>
                </form>
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

