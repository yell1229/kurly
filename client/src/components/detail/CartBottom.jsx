import React,{useRef,useEffect} from 'react';

import { IoIosArrowDown } from "react-icons/io";
import { GoHeart } from "react-icons/go";
import { VscBell } from "react-icons/vsc";

export default function CartBottom({product, openCart, buttonCartCount,cartAddItem,count}) {
    useEffect(() =>{
        buttonCartCount();
    },[]);

    return (
        <div>
            <div className="cont_area">
                <div className="label" onClick={openCart}>상품선택<span><IoIosArrowDown /></span></div>

                <div className='box_wrap'>
                    <span class="product_name">[랑콤]  NEW 제니피끄 얼티미트 세럼 50ml 설날 선물세트</span>
                    <div className="count_box">
                        <div className="count">
                            <button type="button" onClick={()=>{buttonCartCount('-')}}>-</button>
                            <div>{count}</div>
                            <button type="button" onClick={()=>{buttonCartCount('+')}}>+</button>
                        </div>
                        <div className="price"><strong>{(product.dcPrice * count).toLocaleString()}원</strong></div>
                    </div>
                </div>

                <div className="total_price"><span>총 상품금액:</span><strong>{(product.dcPrice * count).toLocaleString()}</strong><em>원</em></div>
                <div className='btns_wrap'>
                    <div className="btns">
                        <div className="heart"><GoHeart /></div>
                        <div className="bell"><VscBell /></div>
                        <div className="add_cart" onClick={cartAddItem}>장바구니 담기</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

