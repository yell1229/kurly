import { setIsLogin ,setIsLogout } from '../features/auth/authSlice.js';
import axios from 'axios';


export const getLogout = () => (dispatch) => {
    localStorage.removeItem('user_id');
    localStorage.removeItem('token');
    localStorage.removeItem('user_name');
    localStorage.removeItem('user_addr');
    dispatch(setIsLogout());
}

export const getLogin = (formData) => async (dispatch) => {
    await axios.post('http://localhost:9000/member/login',formData)
                .then(res => {      
                    console.log('res.data',res.data);
                              
                    const result = res.data;
                    if(res.data.count === 1) {
                        localStorage.setItem('token',res.data.token);
                        localStorage.setItem('user_id',formData.id);
                        localStorage.setItem('user_name',res.data.name);
                        localStorage.setItem('user_addr',res.data.address);
                        dispatch(setIsLogin({result})); // 체이닝값 사용 불가.
                    }else{
                        // alert('다시 입력해주세요.');
                        // idRef.current.value='';
                        // pwdRef.current.value='';
                        // idRef.current.focus();
                    }
                })
                .catch(err => console.log(err));
}