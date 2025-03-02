import React,{useEffect, useState} from 'react';
import axios from 'axios';
import ProductThumb from '../components/detail/ProductThumb';
import '../scss/detail.scss';

export default function TotalList() {
    const [list, setList] = useState([]);

    useEffect(() => {
        axios.post('http://localhost:9000/product/all')
            .then(res => setList(res.data))
            .catch(err => console.log(err));
    },[]);

    return (
        <div className='product_list'>
            <div className="inner">
                {
                    list && list.map((item) =>
                        <ProductThumb product={item}/>
                    )
                }
            </div>
        </div>
    );
}

