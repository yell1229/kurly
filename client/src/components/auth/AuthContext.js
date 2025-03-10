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
    const [userName, setUserName] = useState(()=>{
        try {
            const token = localStorage.getItem("token");
            const name = localStorage.getItem("user_name");
            return token ? name : false;
        } catch (error) {
            console.error("로컬스토리지 JSON 파싱 오류", error);
            return false;
        }
    });
    const [userAddr, setUserAddr] = useState(()=>{
        try {
            const token = localStorage.getItem("token");
            const addr = localStorage.getItem("user_addr");
            return token ? addr : false;
        } catch (error) {
            console.error("로컬스토리지 JSON 파싱 오류", error);
            return false;
        }
    });
    
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