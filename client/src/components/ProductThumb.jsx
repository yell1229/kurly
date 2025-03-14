import React,{useContext} from 'react';
import { BsCart2 } from "react-icons/bs";
import { HiOutlineChatBubbleLeftEllipsis } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import { useCart } from '../hook/useCart';

export default function ProductThumb({product}) {
    const {cartAddItem} = useCart();

    return (
        <div className="box">
                <Link key={product.pid} to={`/goods/detail/${product.pid}`}>
                <div className="thumb">
                    <img src={`http://localhost:9000/${product.image_url}`} alt="" />
                    <div className="ban_top_left">{product.discountRate}</div>
                </div>
                </Link>
                <div className="product_detail_area">
                    <button type="button" className='cart' onClick={() => cartAddItem(product.pid)}><BsCart2 className='icon' />담기</button>
                    <Link key={product.pid} to={`/goods/detail/${product.pid}`}>
                    <div className="info_txt">
                        <span>{product.name}</span>
                        <p>{product.description}</p>
                    </div>
                    <div className="discount">
                        <em>{product.originalPrice}</em>
                        <div><span>{product.discountRate}</span><strong>{product.discountedPrice}</strong></div>
                    </div>
                    <div className="review_num"><HiOutlineChatBubbleLeftEllipsis className='icon' />{product.count}</div>
                    </Link>
                </div>
            
        </div>
    );
}

