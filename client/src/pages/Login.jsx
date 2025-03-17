import React,{useState, useRef, useContext, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {AuthContext} from '../components/auth/AuthContext.js';
import '../scss/member.scss';
import axios from 'axios';
import {getLogin} from '../service/authApi.js';
import { useSelector, useDispatch } from 'react-redux';

export default function Login() {
    const dispatch = useDispatch();
    const isLogin = useSelector(state => state.login.isLogin);
    // const {isLogin, setIsLogin,setUserName,setUserAddr} = useContext(AuthContext);
    const idRef = useRef(null);
    const pwdRef = useRef(null);
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        if(isLogin){
            setTimeout(()=>{ navigate('/') },1000);
        }
    },[isLogin]);

    const handleChange = (e) => {
        let {name, value} = e.target;
        setFormData({...formData, [name]:value});    
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(getLogin(formData));
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

