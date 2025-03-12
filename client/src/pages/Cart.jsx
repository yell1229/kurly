import React,{useEffect, useState, useContext, useRef} from 'react';
import axios from'axios';
import { Link } from 'react-router-dom';
import { CartContext } from '../components/context/CartContext';
import '../scss/cart.scss';
import { GoCheck } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import { HiOutlineMapPin } from "react-icons/hi2";

export default function Cart() {
    const {cartCount, setCartCount} = useContext(CartContext);
    const [list, setList] = useState([]);
    const [totalDc, setTotalDc] = useState(0);
    const [totalDcPrice, setTotalDcPrice] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const id = localStorage.getItem('user_id');
    const addr = localStorage.getItem('user_addr');
    const [listArr, setListArr] = useState([]);
    const listRefs = useRef([]);

    useEffect( () => {
        getCartList();
    },[]);
    console.log('listArr',listArr);
    
    // listArr 변경될 때마다 값을 계산함.
    const calculateTotalPrice = (list) => {
        console.log('click');
        
        let newList = list.filter((item) => listArr.includes(item.pid))
        
        // total dc price
        let totalDC = newList.reduce((sum, item) => {
            let price = parseInt(item.price * (100 - item.dc) *0.01) || 0;
            let count = parseInt(item.qty) || 1 ;
            return sum + (price * count );
        } ,0);
        setTotalDcPrice(totalDC.toLocaleString());

        // total price
        const total = newList.reduce((sum, item)=>{
            let price = parseInt(item.price) || 0;
            let count = parseInt(item.qty) || 1 ;
            return sum + (price * count);
        },0);
        setTotalPrice(total.toLocaleString());

        // total price
        const totalDc = newList.reduce((sum, item)=>{
            let price = parseInt(item.price * (item.dc *0.01)) || 0;
            let count = parseInt(item.qty) || 1 ;
            return sum + (price * count);
        },0);
        setTotalDc(totalDc.toLocaleString());
    }

    const getCartList = async () => {
        const result = await axios.post('http://localhost:9000/cart/getCartList', {'id':id});
        let resultList = result.data;
            if(result.data.length > 0){
                setList(result.data);
                calculateTotalPrice(resultList);
            }
          console.log('result List', resultList);

            return resultList;
    }
    
    const deleteProduct = (pid) => {
        axios
            .post('http://localhost:9000/cart/deleteItem', {'id':id ,'pid':pid})
            .then(res => {
                if(res.data.result_rows ===1) getCartList();
                setCartCount(cartCount -1);
            })
            .catch(err => console.log(err));
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
        
        calculateTotalPrice(list);
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
                            <button type="button">선택삭제</button>
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
                                list.map((item, i)=>
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
                                                        <button type="button">-</button>
                                                        <span>{item.qty}</span>
                                                        <button type="button">+</button>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        <button type="button" onClick={() =>deleteProduct(item.pid)}><IoMdClose /></button>
                                    </div>
                                )
                            }
                            <div className="total_price">
                                <div>상품 49,490원 + 배송비 무료</div>
                                <strong>{totalDcPrice}원</strong>
                            </div>
                        </div>
                    </div>

                    {/* address */}
                    <div className="personal_information">
                        <div className="address box">
                            <div className="tit"><HiOutlineMapPin/>배송지</div>
                            <div className='type'>샛별배송</div>
                            <div className="addr">
                                <div>{addr}</div>
                                <button>변경</button>
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
                                    <strong>0원</strong>
                                </li>
                            </ul>
                        </div>
                        <button type='button' className='btn_order'>{totalDcPrice}원 주문하기</button>
                    </div>
                    {/* address */}
                </div>
            </div>
        </div>
    );
}

