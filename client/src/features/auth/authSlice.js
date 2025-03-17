import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLogin  : false,
    userName : '',
    userAddr : ''
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

            }
            
        } ,
        setIsLogout(state){
            state.isLogin = false;
        } 
    },
})

// Action creators are generated for each case reducer function
export const { setIsLogin, setIsLogout } = authSlice.actions

export default authSlice.reducer