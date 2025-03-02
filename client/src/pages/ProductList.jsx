import React,{useState, useEffect} from 'react';
import ProductThumb from '../components/detail/ProductThumb.jsx';
import '../scss/detail.scss';
import axios from 'axios';

export default function ProductList() {
    const [productList, setProductList ]= useState([]);

    useEffect(() =>{
        axios.post('http://localhost:9000/product/all')
                .then(res => setProductList(res.data))
                .catch(err => console.log(err));
    },[]);
    console.log('productList',productList);
    
    return (
        <div className='product_list'>
            <div className="inner">
                {
                    productList.map((item) =>
                        <ProductThumb product={item} />
                    )
                }
            </div>     
        </div>
    );
}

