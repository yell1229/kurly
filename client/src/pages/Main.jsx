import React,{useState, useEffect} from 'react';
import TopContent from '../components/main/TopContent.jsx';
import MidContent from '../components/main/MidContent.jsx';


import SlideList from '../components/SlideList.jsx';
import axios from 'axios';


export default function Kurly() {
    const [topImageList,setTopImageList] = useState([]);
    // main top slide
    useEffect(() => {
        axios.get('/data/banner.json')
                .then(res => setTopImageList(res.data) )
                .catch(err => console.log(err));
    },[]);

    return (
        <>
            <div className="container_area main">

                <SlideList classname="top_slider" product={topImageList} /> 
                <TopContent />
                <MidContent />

            </div>
        </>
    );
}

