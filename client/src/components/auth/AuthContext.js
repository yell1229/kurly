import { createContext, useState, useEffect, Children } from 'react';

export const AuthContext = createContext();

/***********************************
    Login : 로그인  
************************************/
export const AuthProvider = ({children})=>{
    const [ userType, setUserType ] = useState('');
    const [isLogin, setIsLogin] = useState(()=>{
        try {
            const token = localStorage.getItem("token")
            return token ? true : false;
        } catch (error) {
            console.error("로컬스토리지 JSON 파싱 오류", error);
            return false;
        }
    })
    
    // 토큰으로 로그인 상태 유지
    useEffect(()=>{
        const token = localStorage.getItem("token");
        setIsLogin(!!token);
    }, [])
    return(
        <AuthContext.Provider value = {{isLogin, setIsLogin, userType, setUserType}}>
            {children}
        </AuthContext.Provider>
    )
}