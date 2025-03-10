import React from 'react';

export default function ProductInfo({detailImgs}) {
    return (
        <div className="tab_product_info">
            <ul>
                {
                    detailImgs&& detailImgs.map((img,i) =>
                        <li key={i}><img src={img} key={i} alt="" /></li> 
                    )
                }
            </ul>
        </div>
    );
}

