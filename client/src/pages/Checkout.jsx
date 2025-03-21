import React,{useEffect, useState, useContext, useRef} from 'react';
import Postcode from '../components/Postcode.jsx';

import '../scss/cart.scss';
import { HiOutlineMapPin } from "react-icons/hi2";
import {useSelector, useDispatch} from 'react-redux';


export default function Checkout() {
    const totalDc = useSelector(state => state.cart.totalDc);
    const totalDcPrice = useSelector(state => state.cart.totalDcPrice);
    const totalPrice = useSelector(state => state.cart.totalPrice);
    const userAddr = useSelector(state => state.login.userAddr);

    return (
        <div className='cart'>
            <div className="inner">
                <h2>주문서</h2>
                <div className="cart_area">

                    {/* address */}
                    <div className="personal_information">
                        <div className="address box">
                            <div className="tit"><HiOutlineMapPin/>배송지</div>
                            <div className='type'>샛별배송</div>
                            <div className="addr">
                                <div>{userAddr}</div>
                                <Postcode text='변경'/>
                            </div>
                        </div>
                        <div className="order_detail box">
                            <div className="tit">결제금액</div>
                            <ul>
                                <li>
                                    <span>상품금액</span>
                                    <strong>{totalPrice.toLocaleString()}원</strong>
                                </li>
                                <li>
                                    <span>상품할인금액</span>
                                    <strong className='orange'>-{totalDc.toLocaleString()}원</strong>
                                </li>
                                <li>
                                    <span>배송비</span>
                                    <strong>{totalDcPrice > 10000 ? '0':'3,000'}원</strong>
                                </li>
                            </ul>
                        </div>
                        <div className='btn_order' onClick={()=> alert('준비중!!')}>{totalDcPrice.toLocaleString()}원 결제하기</div>
                    </div>
                    {/* address */}
                </div>
            </div>
        </div>
    );
}

