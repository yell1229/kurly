import {setComplete} from '../features/order/orderSlice.js';
import {getCartList} from './cartApi.js';
import axiosApi from './axiosApi.js';

const id = localStorage.getItem('user_id');
const tid = localStorage.getItem('tid');

export const removeCart = (listArr) => async(dispatch) => {
    const type='post';
    const url = 'http://localhost:9000/order/remove';
    const data = {'id':id, 'pid':listArr};
    const result = await axiosApi({type, url, data});
    if(result.result_rows === 1){
        dispatch(setComplete());
        // dispatch(getCartList());
    }
}
// 상품 주문이 1개일 때만 테스트
export const addOrderList = (selectList,totalPrice,userAddr,listArr) => async(dispatch) => {
    const type='post';
    const url = 'http://localhost:9000/order/add';
    const data = {'id':id, 'tid': tid, 'selectList':selectList[0], 'totalPrice':totalPrice,'userAddr':userAddr};
    console.log('data',data);
    
    const result = await axiosApi({type, url, data});
    // if(result.result_rows === 1){
    //     const listArr = listArr[0];
    //     dispatch(removeCart({listArr}));
    // }
}