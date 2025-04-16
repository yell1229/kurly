import React,{useRef} from 'react';
import Postcode from '../components/Postcode.jsx';
import axios from 'axios';
import { GoCheck } from "react-icons/go";

import '../scss/cart.scss';
import { HiOutlineMapPin } from "react-icons/hi2";
import {useSelector, useDispatch} from 'react-redux';


export default function Checkout() {
    const totalDc = useSelector(state => state.cart.totalDc);
    const totalDcPrice = useSelector(state => state.cart.totalDcPrice);
    const totalPrice = useSelector(state => state.cart.totalPrice);
    const userAddr = useSelector(state => state.login.userAddr);
    const selectList = useSelector(state => state.cart.selectList);
    const cacaoRef = useRef();
    
    const handlePayment = () => {
        const id = localStorage.getItem('user_id');
        if(cacaoRef.current.checked){
            //보낼 정보  
            axios
            .post('http://localhost:9000/payment/qr',{
                'id':id, 
                'item_name':`${selectList[0].subject}외 ${selectList.length -1}건`,
                'quantity':`${selectList[0].qty}`, 
                'total_amount':totalDcPrice
            })
            .then(res =>{
                console.log('res.data.next_redirect_pc_url',res.data.next_redirect_pc_url);
                
                if(res.data.next_redirect_pc_url){
                    window.location.href=res.data.next_redirect_pc_url;
                    localStorage.setItem('tid',res.data.tid);
                }
            })
            .catch(err => console.log(err));
        }else{
            alert('결제방식을 선택해주세요.');
        }
        
    }
    
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
                        <label className='check_box'>
                            <div className='check'>
                                <input  type="checkbox" ref={cacaoRef} />
                                <div><GoCheck size={15} /></div>
                            </div> 카카오 결제
                        </label>
                        
                        <div className='btn_order' onClick={handlePayment}>{totalDcPrice.toLocaleString()}원 결제하기</div>
                    </div>
                    {/* address */}
                </div>
            </div>
        </div>
    );
}

