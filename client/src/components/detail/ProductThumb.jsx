import React,{useContext} from 'react';
import { BsCart2 } from "react-icons/bs";
import { HiOutlineChatBubbleLeftEllipsis } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import { PidContext } from '../../context/ProductContext.js';

export default function ProductThumb({product}) {
    const {pidArr, setPidArr} = useContext(PidContext);
    const getPid = () => {
        if(pidArr.length < 10){
            setPidArr([product.pid, ...pidArr]);
        }else{
            setPidArr([...pidArr.slice(1), product.pid]);
        }
        localStorage.setItem('viewProducts',pidArr);
    }
    
    return (
        <div className="box">
            <Link key={product.pid} to={`/goods/detail/${product.pid}`} onClick={getPid}>
                <div className="thumb">
                    <img src={product.image_url} alt="" />
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

