import { setIsLogin , setIsLogout, setLoginReset } from '../features/auth/authSlice.js';
import axiosApi from './axiosApi.js';


export const getLogout = () => (dispatch) => {
    localStorage.removeItem('user_id');
    localStorage.removeItem('token');
    localStorage.removeItem('user_name');
    localStorage.removeItem('user_addr');
    dispatch(setIsLogout());
}

export const getLogin = (formData) => async (dispatch) => {
    const type = 'post';
    const url = 'http://localhost:9000/member/login';
    const data = formData;
    const result = await axiosApi({type, url, data});

    if(result.count === 1) {
        localStorage.setItem('token',result.token);
        localStorage.setItem('user_id',formData.id);
        dispatch(setIsLogin({result})); // 체이닝값 사용 불가.
    }else{
        dispatch(setIsLogin({result}));
    }
}

export const getLoginReset = () => (dispatch) =>{
    dispatch(setLoginReset());
}