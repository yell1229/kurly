import React from 'react';
import { BsCart2 } from "react-icons/bs";
import { HiOutlineChatBubbleLeftEllipsis } from "react-icons/hi2";
import { Link } from 'react-router-dom';

export default function ProductThumb({product}) {
    
    return (
        <div className="box">
            <Link key={product.pid} to={`/goods/detail/${product.pid}`}>
                <div className="thumb">
                    <img src={`http://localhost:9000/${product.image_url}`} alt="" />
                    { product.isLive && <div className="ban_top_left">라이브특가</div> }
                    { product.isPayback && <div className="ban_btm_line">최대혜택가 141,930원</div> }
                    { product.isPayback && <div className="ban_btm_right">페이백</div> }
                </div>
                <div className="product_detail_area">
                    <button type="button" className='cart'><BsCart2 className='icon' />담기</button>
                    <div className="info_txt">
                        <span>{product.name}</span>
                        <p>{product.description}</p>
                    </div>
                    <div className="discount">
                        <em>{product.originalPrice}</em>
                        <div><span>{product.discountRate}</span><strong>{product.discountedPrice}</strong></div>
                    </div>
                    <div className="review_num"><HiOutlineChatBubbleLeftEllipsis className='icon' />999+</div>
                </div>
            </Link>
        </div>
    );
}

