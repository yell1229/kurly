import { configureStore } from '@reduxjs/toolkit';
import authSlice  from '../features/auth/authSlice.js';
import cartSlice  from '../features/cart/cartSlice.js';

//로컬 스토리지에 저장된 리덕스 상태값 읽어보기
const loadState = () => {
    try {
        const serializedState = localStorage.getItem("reduxState");
        return serializedState ? JSON.parse(serializedState) : undefined;
    } catch (error) {
        console.error("Redux 상태 로드 실패:", error);
        return undefined;
    }
};

export const store = configureStore({
    reducer: {
        login:authSlice,
        cart:cartSlice,
    },
    preloadedState: loadState(),
});

//로컬 스토리지에 리덕스 상태값 저장하기
store.subscribe(() => {
    try {
        const serializedState = JSON.stringify(store.getState());
        localStorage.setItem("reduxState", serializedState);
    } catch (error) {
        console.error("Redux 상태 저장 실패:", error);
    }
});