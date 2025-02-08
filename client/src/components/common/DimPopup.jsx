import React,{useState, useEffect} from 'react';
import SlideList from '../SlideList.jsx';
import axios from 'axios';
import { IoMdClose } from "react-icons/io";

export default function DimPopup() {
    const [slideImg, setSlideImg] = useState([]);
    const [dimiDisplay, setDimiDisplay] = useState(false);

    useEffect(() => {
        axios.get('/data/productList.json')
                .then(res => setSlideImg(res.data))
                .catch(err => console.log(err));
    },[]);

    return (
        <>
            { dimiDisplay && <div className='dim_layer_area'>
                <div className="content">
                    <button onClick={() =>{setDimiDisplay(!dimiDisplay)}}><IoMdClose /></button>
                    <div className="tit">사진후기</div>
                    <div className="slide_area">
                        <SlideList classname="pop_slide" imageList={slideImg} />
                    </div>
                </div>
            </div>}
        </>
    );
}

