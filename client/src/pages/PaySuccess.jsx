import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addOrderList, removeCart} from '../service/orderApi.js';
import {getCartList} from '../service/cartApi.js';
import '../scss/cart.scss';

export default function PaySuccess() {
    const dispatch = useDispatch();
    const totalPrice = useSelector(state => state.cart.totalPrice);
    const userAddr = useSelector(state => state.login.userAddr);
    const listArr = useSelector(state => state.cart.listArr);
    const selectList = useSelector(state => state.cart.selectList);
    const isComplete = useSelector(state => state.order.isComplete);

    useEffect(()=>{   
        dispatch(addOrderList(selectList,totalPrice,userAddr,listArr));   
        dispatch(removeCart(listArr[0]));   
        dispatch(getCartList());
    },[]);
    console.log('isComplete',isComplete);
    
    return (
        <div className='cart'>
            <div className="inner">
                <h2>결제가 완료되었습니다.</h2> 
            </div>
        </div>
    );
}

