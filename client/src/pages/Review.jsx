import React from 'react';
import '../scss/review.scss';

export default function Review() {
    return (
        <div className='review'>
            <ul>
                <li>
                    <div>1:1 문의</div>
                    <img src="/images/inquire.gif" alt="" />
                    </li>
                <li>
                    <div>리뷰</div>
                    <img src="/images/review.gif" alt="" />
                    </li>
                <li>
                    <div>상품등록</div>
                    <img src="/images/upload.gif" alt="" />
                    </li>
                <li>
                    <div>찜하기- ❤ 클릭</div>
                    <img src="/images/heart.gif" alt="" />
                    </li>
            </ul>
        </div>
    );
}

