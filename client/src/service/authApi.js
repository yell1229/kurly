import { setIsLogin , setIsLogout, setLoginReset, setNewAddress } from '../features/auth/authSlice.js';
import axiosApi from './axiosApi.js';


const id = localStorage.getItem('user_id');


// logout
export const getLogout = () => (dispatch) => {
    localStorage.clear();
    dispatch(setIsLogout());
}

// login
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

// 주소 변경
export const setAddress =  (fullAddress) => async(dispatch) => {
    const type ='post';
    const url = 'http://localhost:9000/member/updateAddr';
    const data = {'addr':fullAddress, 'id':id};
     
    const result = await axiosApi({type, url, data});

    if(result.result === 1){
        dispatch(setNewAddress({fullAddress}));
    }
}


