import React,{useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../components/auth/AuthContext.js';

export function useLogin() {
    const {isLogin} = useContext(AuthContext);
    const navigate = useNavigate();

    const loginCheck = () => {
        if(!isLogin){
            alert('로그인하셔야 본 서비스를 이용하실 수 있습니다.');
            if(loginCheck) setTimeout(()=>{ navigate('/member/login')},1000);
        }
    }

    return {loginCheck};
}