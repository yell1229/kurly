import React from 'react';
import SlideList from '../../components/SlideList.jsx';
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function ContentBox({product, data}) {

    return (
        <div className="cont_area">
            <div className="tit_area">
                <strong><a href={data.link}>{data.txt1}<MdOutlineKeyboardArrowRight className='icon' /></a></strong>
                <span>{data.txt2}</span>
            </div>
            <div className="product_list_wrap">
                <SlideList classname="slider_tab4" product={product} />
            </div>
            <Link className='btn_total' to={data.filterLink}>{data.filterLinkName}</Link>
            {   data.banner &&
                <div className="banner_area">
                <a href=""><img src="./images/5502d5ec-27d9-40cc-8eb9-515c1de0bf6c.jpg" alt="" /></a>
            </div>}
        </div>
    );
}

