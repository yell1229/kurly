import React,{useEffect, useState, useContext, useRef} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../components/context/CartContext';
import { useCart } from '../hook/useCart.js';
import {useLogin} from '../hook/useLogin.js';
import Postcode from '../components/Postcode.jsx';

import '../scss/cart.scss';
import { GoCheck } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import { HiOutlineMapPin } from "react-icons/hi2";
import {useSelector, useDispatch} from 'react-redux';
import {getCartList, deleteProduct, updatePidCount} from '../service/cartApi.js';

export default function Cart() {
    const dispatch = useDispatch();
    const { totalDc, totalDcPrice, totalPrice, listArr, setListArr} = useContext(CartContext);
    
    const cartCount = useSelector(state => state.cart.cartCount);
    const userAddr = useSelector(state => state.login.userAddr);
    const isLogin = useSelector(state => state.login.isLogin);
    const cartList = useSelector(state => state.cart.cartList);
    // const listArr = useSelector(state => state.cart.listArr);

    const { calculateTotalPrice} = useCart();
    const {setAddress} = useLogin();
    const listRefs = useRef([]);

    useEffect( () => {
        let count = 0;
        const timer = setInterval(() => {
            addListArr();
            count += 1;
            
            if (count >= 5) {
                clearInterval(timer);
            }
        }, 100);

        return () => clearInterval(timer);
    },[]);

    useEffect( () => {
        if(isLogin){
            dispatch(getCartList());
            calculateTotalPrice();
        }   
    },[]);
    // console.log('listArr',listArr);

    // 전체상품 선택한 상태로 load
    const addListArr = () => {
        const newList = listRefs.current.map((item)=> parseInt(item.name));
        setListArr(newList);
    }

    // 상품 선택
    const checkProduct = (pid) =>{
        // 클릭되면 값이 없으면 담는다. 값이 있으면 뺀다.
        let isCheck = listArr.includes(pid);
        if(isCheck){
            let newList = listArr.filter((item) => item !== pid);
            setListArr(newList);
        }else{
            setListArr([...listArr, pid]);
        }
        
        calculateTotalPrice();
    }
    
    
    const toggleAllCheck = (e) => {
       const newList = listRefs.current.map((item)=> parseInt(item.name));
       (e.target.checked) ? setListArr(newList) : setListArr([]);

    }


    // 주문하기
    // 주문 전 선택된 상품을 DB(order list)에 넣는다. {id, [상품리스트]}
    // 주문된 상품은 카트리스트에서 삭제


    return (
        <div className='cart'>
            <div className="inner">
                <h2>장바구니</h2>
                <div className="cart_area">
                    <div className="cart_list">
                        <div className="total box">
                            <label className='check_box'>
                                <div className='check'><input type="checkbox" checked={listArr.length === cartCount} onChange={toggleAllCheck} />
                                    <div><GoCheck size={15} /></div>
                                </div>
                                전체선택 {listArr.length}/{cartCount}
                            </label>
                            {/* <button type="button">선택삭제</button> */}
                        </div>
                        <div className="cart_list_area box">
                            {/* <div className="total_check">
                                <label className='check_box'>
                                    <div className='check'><input type="checkbox" />
                                        <div><GoCheck size={15} /></div>
                                    </div>
                                    샛별배송
                                </label>
                            </div> */}
                            
                            {
                                cartList && cartList.map((item, i)=>
                                    <div className="prod_box" key={`${item.pid}_${i}`}>
                                        <label className='check_box'>
                                            <div className='check'>
                                                <input  type="checkbox" name={item.pid} 
                                                        id={`target_${item.pid}`} 
                                                        onChange={()=> checkProduct(item.pid)} 
                                                        checked={listArr.includes(item.pid)} 
                                                        ref={(el) => listRefs.current[i] = el} 
                                                />
                                                <div><GoCheck size={15} /></div>
                                            </div>
                                        </label>
                                        <div>
                                            <label  htmlFor={`target_${item.pid}`}>
                                            <div className="prod_tit">{item.subject}</div>
                                            <div className="info">{item.sub_desc}</div>
                                            </label>
                                            <div className="detail_area">
                                                <div className="thumb">
                                                    <Link key={item.pid} to={`/goods/detail/${item.pid}`}><img src={item.image} /></Link>
                                                </div>
                                                <div className='control'>
                                                    <div className='price'>
                                                        <strong>{item.dcPride}원</strong><span>{item.price}원</span>
                                                    </div>
                                                    <div className="count_area">
                                                        <button type="button" onClick={()=>{dispatch(updatePidCount(item.qty, item.pid, 'decrease', cartList))}}>-</button>
                                                        <span>{item.qty}</span>
                                                        <button type="button" onClick={()=>{dispatch(updatePidCount(item.qty, item.pid, 'increase', cartList))}}>+</button>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        <button type="button" onClick={() => {dispatch(deleteProduct(item.pid)); checkProduct(item.pid); }}><IoMdClose /></button>
                                    </div>
                                )
                            }
                            <div className="total_price">
                                <div>상품 49,490원 + {totalDcPrice > 10000 ? '배송비 무료':'배송비 3,000원'}</div>
                                <strong>{totalDcPrice.toLocaleString()}원</strong>
                            </div>
                        </div>
                    </div>

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
                        <Link to="/order/checkout" className='btn_order'>{totalDcPrice.toLocaleString()}원 주문하기</Link>
                    </div>
                    {/* address */}
                </div>
            </div>
        </div>
    );
}

