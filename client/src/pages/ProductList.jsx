import React,{useState, useEffect} from 'react';
import ProductThumb from '../components/ProductThumb.jsx';
import '../scss/detail.scss';
import axios from 'axios';

export default function ProductList() {
    const [productList, setProductList ]= useState([]);

    useEffect(() =>{
        axios.get('/data/productList.json')
                .then(res => setProductList(res.data))
                .catch(err => console.log(err));
    },[]);
    return (
        <div className='product_list'>
            <div className="inner">
                {
                    productList.map((item) =>
                        <ProductThumb slideImg={item}/>
                    )
                }
            </div>     
        </div>
    );
}

