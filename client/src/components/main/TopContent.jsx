import React,{useState,useEffect} from 'react';
import axios from 'axios';
import ContentBox from './ContentBox.jsx';

export default function TopContent() {
    const [list, setList] = useState([]);
    useEffect(() => {
        axios.post('http://localhost:9000/product/filterItem',{'pid':[1,2,3,4,5,6,7,8]})
            .then(res =>setList(res.data))
            .catch(err =>console.log(err));
    },[]);
    const contData={
        'link':'/goods/all',
        'txt1':'✨머리부터 발끝까지 보습채우기!!',
        'txt2':'[최대 82%]혜택 상품만! 스킨부터 바디로션까지',
        'filterLink':'/goods/all',
        'filterLinkName':'전체보기',
        'banner':true
    }
    return (
        <div className="cont_area top_content con1_slide">
            <ContentBox product={list} data={contData} classname="con1_slide" />
        </div>
    );
}

