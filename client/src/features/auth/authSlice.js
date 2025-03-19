import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLogin  : false,
    userName : '',
    userAddr : '',
    isError : false
}

export const authSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setIsLogin(state, action){
            console.log('action.result',action.payload.result);
            console.log('action.result.count',action.payload.result.count);
            if(action.payload.result.count){
                state.isLogin = true;
                state.userName = action.payload.result.name;
                state.userAddr = action.payload.result.address;
            }else{
                state.isError = true;
            }
            
        } ,
        setIsLogout(state){
            state.isLogin = false;
        },
        setLoginReset(state){
            state.isError = false;
        },
        setAddress(state, action){
            // state.userAddr = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { setIsLogin, setIsLogout, setLoginReset, setAddress } = authSlice.actions

export default authSlice.reducer