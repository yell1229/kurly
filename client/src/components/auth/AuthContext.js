import { createContext, useState, useEffect} from 'react';

export const AuthContext = createContext();

/***********************************
    Login : 로그인  
************************************/
export const AuthProvider = ({children})=>{
    const [isLogin, setIsLogin] = useState(()=>{
        try {
            const token = localStorage.getItem("token")
            return token ? true : false;
        } catch (error) {
            console.error("로컬스토리지 JSON 파싱 오류", error);
            return false;
        }
    });
    const [userName, setUserName] = useState('');
    const [userAddr, setUserAddr] = useState('');
    
    // 토큰으로 로그인 상태 유지
    useEffect(()=>{
        const token = localStorage.getItem("token");
        setIsLogin(!!token);      
    }, [])
    
    return(
        <AuthContext.Provider value = {{isLogin, setIsLogin, userName, setUserName,userAddr, setUserAddr}}>
            {children}
        </AuthContext.Provider>
    )
}