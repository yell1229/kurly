import { useNavigate } from 'react-router-dom';



// login check
export const loginCheck = () => (dispatch) => {
    const navigate = useNavigate();
    alert('로그인하셔야 본 서비스를 이용하실 수 있습니다.');
    setTimeout(()=>{ navigate('/member/login')},1000);

}