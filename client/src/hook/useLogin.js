import React,{useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../components/auth/AuthContext.js';
import axios from 'axios';

export function useLogin() {
    // const {isLogin, setUserAddr} = useContext(AuthContext);
    // const navigate = useNavigate();

    // // login check
    // const loginCheck = () => {
    //     if(!isLogin){
    //         alert('로그인하셔야 본 서비스를 이용하실 수 있습니다.');
    //         if(loginCheck) setTimeout(()=>{ navigate('/member/login')},1000);
    //     }
    // }
    // 주소 변경
    const setAddress = async (fullAddress) => {
        
        
        const id = localStorage.getItem('user_id');
        const result = await axios.post('http://localhost:9000/member/updateAddr',{'addr':fullAddress, 'id':id})


    //     if(result.data.result === 1){
    //         localStorage.setItem('user_addr', fullAddress);
    //         setUserAddr(localStorage.getItem("user_addr"));
    //     }
    // }

    // return {loginCheck, setAddress};
}
}