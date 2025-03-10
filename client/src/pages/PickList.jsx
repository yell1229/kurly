import React,{useState, useEffect} from 'react';
import axios from 'axios';
import ProductThumb from '../components/detail/ProductThumb';

export default function PickList() {
    const heartList = JSON.parse(localStorage.getItem('heartList')) || [];
    const [productList, setProductList ]= useState([]);

    useEffect(() =>{
        if(heartList.length > 0){
            axios.post('http://localhost:9000/product/filterItem',{'pid':heartList})
            .then(res => setProductList(res.data))
            .catch(err => console.log(err));
        }
        
    },[]);
    console.log('heartList', heartList);
    
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

