import React,{useState,useEffect} from 'react';
import axios from 'axios';
import ContentBox from './ContentBox.jsx';

export default function MidContent() {
    const [list, setList] = useState([]);
    useEffect(() => {
        axios.post('http://localhost:9000/product/filterItem',{'pid':[5,6,7,8,9,10,11,12]})
            .then(res =>setList(res.data))
            .catch(err =>console.log(err));
    },[]);
    const contData={
        'link':'',
        'txt1':'📈실시간 뷰티컬리 인기상품',
        'txt2':'지금 가장 인기 많은 상품만 모았어요',
        'filterLink':'/goods/all',
        'filterLinkName':'인기상품 전체보기',
        'banner':false
    }
    return (
        <div className="cont_area con2_slide">
            <ContentBox product={list} data={contData} classname='con2_slide' />
        </div>
    );
}

