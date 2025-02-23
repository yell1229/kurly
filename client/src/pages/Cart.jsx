import React from 'react';
import '../scss/cart.scss';
import { GoCheck } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import { HiOutlineMapPin } from "react-icons/hi2";

export default function Cart() {
    const list = [1,2,3];
    return (
        <div className='cart'>
            <div className="inner">
                <h2>장바구니</h2>
                <div className="cart_area">
                    <div className="cart_list">
                        <div className="total box">
                            <label className='check_box'>
                                <div className='check'><input type="checkbox" />
                                    <div><GoCheck size={15} /></div>
                                </div>
                                전체선택 2/3
                            </label>
                            <button type="button">선택삭제</button>
                        </div>
                        <div className="cart_list_area box">
                            <div className="total_check">
                                <label className='check_box'>
                                    <div className='check'><input type="checkbox" />
                                        <div><GoCheck size={15} /></div>
                                    </div>
                                    샛별배송
                                </label>
                            </div>

                            {
                                list.map((item)=>
                                    <div className="prod_box">
                                        <label className='check_box'>
                                            <div className='check'><input type="checkbox" />
                                                <div><GoCheck size={15} /></div>
                                            </div>
                                        </label>
                                        <div>
                                            <div className="prod_tit">[달바] 화이트 트러플 퍼스트 스프레이 세럼 100ml 2개 세트 (옐로우 미스트 세럼)</div>
                                            <div className="info">[달바] 화이트 트러플 퍼스트 스프레이 세럼 100ml 2개 세트 (옐로우 미스트 세럼)(+마스크팩 1매 증정)</div>
                                            <div className="detail_area">
                                                <div className="thumb">
                                                    <img src="https://placehold.co/64x83" />
                                                </div>
                                                <div className='control'>
                                                    <div className='price'>
                                                        <strong>6,999원</strong><span>7,900원</span>
                                                    </div>
                                                    <div className="count_area">
                                                        <button type="button">-</button>
                                                        <span>1</span>
                                                        <button type="button">+</button>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        <button type="button"><IoMdClose /></button>
                                    </div>
                                )
                            }
                            <div className="total_price">
                                <div>상품 49,490원 + 배송비 무료</div>
                                <strong>49,490원</strong>
                            </div>
                        </div>
                    </div>

                    {/* address */}
                    <div className="personal_information">
                        <div className="address box">
                            <div className="tit"><HiOutlineMapPin/>배송지</div>
                            <div className='type'>샛별배송</div>
                            <div className="addr">
                                <div>서울시 강남구 어쩔고 저쩌고서울시 강남구 어쩔고 저쩌고...</div>
                                <button>변경</button>
                            </div>
                        </div>
                        <div className="order_detail box">
                            <div className="tit">결제금액</div>
                            <ul>
                                <li>
                                    <span>상품금액</span>
                                    <strong>76,390원</strong>
                                </li>
                                <li>
                                    <span>상품할인금액</span>
                                    <strong className='orange'>-26,900원</strong>
                                </li>
                                <li>
                                    <span>배송비</span>
                                    <strong>0원</strong>
                                </li>
                            </ul>
                        </div>
                        <button type='button' className='btn_order'>49,490원 주문하기</button>
                    </div>
                    {/* address */}
                </div>
            </div>
        </div>
    );
}

