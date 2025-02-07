import React from 'react';
import { BsCart2 } from "react-icons/bs";
import { HiOutlineChatBubbleLeftEllipsis } from "react-icons/hi2";
import { Link } from 'react-router-dom';

export default function ProductThumb({slideImg}) {
    return (
        <div className="box">
            <Link to={slideImg.src}>
                <div className="thumb">
                    <img src={slideImg.img} alt="" />
                    { slideImg.isLive && <div className="ban_top_left">라이브특가</div> }
                    { slideImg.isPayback && <div className="ban_btm_line">최대혜택가 141,930원</div> }
                    { slideImg.istotalPrice && <div className="ban_btm_right">페이백</div> }
                </div>
                <div className="product_detail_area">
                    <button type="button" className='cart'><BsCart2 className='icon' />담기</button>
                    <div className="info_txt">
                        <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, tempora.</span>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, tempora.</p>
                    </div>
                    <div className="discount">
                        <em>100,000원</em>
                        <div><span>10%</span><strong>171,000원</strong></div>
                    </div>
                    <div className="review_num"><HiOutlineChatBubbleLeftEllipsis className='icon' />999+</div>
                </div>
            </Link>
        </div>
    );
}

