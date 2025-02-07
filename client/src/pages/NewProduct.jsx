import React from 'react';
import '../scss/new_product.scss';

export default function NewProduct() {
    return (
        <div className="new_product">
            <h2>상품입력</h2>
            <form>
                <div className="form_area">
                    <div className="f_wrap">
                        <span>상품이름</span>
                        <div>
                            <input type="text" name="id" placeholder='' />
                        </div>
                    </div>
                    <div className="f_wrap">
                        <span>가격</span>
                        <div>
                            <input type="text" name="id" placeholder='' />
                        </div>
                    </div>
                    <div className="f_wrap">
                        <span>상품이름</span>
                        <div>
                            <input type="text" name="id" placeholder='' />
                        </div>
                    </div>
                </div>

                <div className="btn">
                    <button type="submit">등록하기</button>
                </div>
            </form>
        </div>
    );
}

