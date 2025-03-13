import React,{useEffect, useState, useContext, useRef} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../components/context/CartContext';
import { useCart } from '../hook/useCart.js';
import Postcode from '../components/Postcode.jsx';
import axios from 'axios';
import { AuthContext } from '../components/auth/AuthContext.js';
import '../scss/cart.scss';
import { GoCheck } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import { HiOutlineMapPin } from "react-icons/hi2";

export default function Cart() {
    const {cartCount, cartList, setCartList, totalDc, totalDcPrice, totalPrice, listArr, setListArr, selectList} = useContext(CartContext);
    const {getCartList, deleteProduct, calculateTotalPrice, updatePidCount} = useCart();
    const {userAddr, setUserAddr} = useContext(AuthContext);

    const id = localStorage.getItem('user_id');
    const listRefs = useRef([]);


    useEffect( () => {
        const newList = listRefs.current.map((item)=> parseInt(item.name));
        setListArr(newList);
    },[]);

    useEffect( () => {
        getCartList();
        calculateTotalPrice();
    },[listArr]);
    
    // 주소 변경
    const setAddress = async (fullAddress) => {
        const result = await axios.post('http://localhost:9000/member/updateAddr',{'addr':fullAddress, 'id':id})

        if(result.data.result === 1){
            localStorage.setItem('user_addr', fullAddress);
            setUserAddr(()=>{ // localStorage.getItem("user_addr") 이것만 넣어주는지 AuthContext 문법을 넣는지?
                try {
                    const token = localStorage.getItem("token");
                    const addr = localStorage.getItem("user_addr");
                    return token ? addr : false;
                } catch (error) {
                    console.error("로컬스토리지 JSON 파싱 오류", error);
                    return false;
                }
            })
        }
    }
    
    
console.log('장바구니 전체 갯수 :cartList',cartList);
console.log('선택된 리스트의 pid: listArr',listArr);
console.log('선택된 리스트의 정보: selectList',selectList);
console.log('totalPrice',totalPrice);
    
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
                                                        <button type="button" onClick={()=>{updatePidCount(item.qty, item.pid, 'decrease')}}>-</button>
                                                        <span>{item.qty}</span>
                                                        <button type="button" onClick={()=>{updatePidCount(item.qty, item.pid, 'increase')}}>+</button>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        <button type="button" onClick={() =>deleteProduct(item.pid)}><IoMdClose /></button>
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
                        <button type='button' className='btn_order'>{totalDcPrice.toLocaleString()}원 주문하기</button>
                    </div>
                    {/* address */}
                </div>
            </div>
        </div>
    );
}

