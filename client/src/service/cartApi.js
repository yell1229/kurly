import {setCartCount, setCartList} from '../features/cart/cartSlice.js';
import axiosApi from './axiosApi.js';

const id = localStorage.getItem('user_id');

// 장바구니 리스트 가져오기
export const getCartList = () => async (dispatch) => {
    const type='post';
    const url = 'http://localhost:9000/cart/getCartList';
    const data = { 'id': id };
    
    const result = await axiosApi({type, url, data});
    dispatch(setCartList({result}));
    // calculateTotalPrice();  // getCartList 후에 다시 total 계산

};

// 장바구니 전체 카운트
export const getCount = () => async(dispatch) => {
    const type = 'post';
    const url = 'http://localhost:9000/cart/getCartList';
    const data = { 'id': id };

    const result = await axiosApi({type, url, data});
    const length = result.length;
    console.log('length',length);
    
    dispatch(setCartCount({length}));
};