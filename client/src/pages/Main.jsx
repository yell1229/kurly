import React,{useState, useEffect} from 'react';
import TopContent from '../components/main/TopContent.jsx';
// icons


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

//console.log('topImageList ===> ',topImageList);

    return (
        <>
            {/* start of container_area */}
            <div className="container_area">

                <SlideList classname="top_slider" imageList={topImageList} />

                
                <TopContent />

                {/* sample ====> banner */}
                <div className="banner_area">
                    <a href=""><img src="./images/5502d5ec-27d9-40cc-8eb9-515c1de0bf6c.jpg" alt="" /></a>
                </div>
                {/* sample ====> banner */}

            </div>
            {/* end of container_area */}
        </>
    );
}

