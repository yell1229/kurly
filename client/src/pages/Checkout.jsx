import React,{useEffect, useState, useContext, useRef} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../components/context/CartContext';
import { useCart } from '../hook/useCart.js';
import {useLogin} from '../hook/useLogin.js';
import Postcode from '../components/Postcode.jsx';
import axios from 'axios';
import { AuthContext } from '../components/auth/AuthContext.js';
import '../scss/cart.scss';
import { HiOutlineMapPin } from "react-icons/hi2";
export default function Checkout() {
    const {totalDc, totalDcPrice, totalPrice} = useContext(CartContext);
    const {setAddress} = useLogin();
    const {userAddr} = useContext(AuthContext);

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
                                <Postcode setAddress={setAddress} text='변경'/>
                            </div>
                        </div>
                        <div className="order_detail box">
                            <div className="tit">결제금액</div>
                            <ul>
                                <li>
                                    <span>상품금액</span>
                                    <strong>{totalPrice}원</strong>
                                </li>
                                <li>
                                    <span>상품할인금액</span>
                                    <strong className='orange'>-{totalDc}원</strong>
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

