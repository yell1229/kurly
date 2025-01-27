import React,{useRef, useEffect, useState} from 'react';
import Header from '../components/common/Header.jsx';
import Footer from '../components/common/Footer.jsx';
import { Outlet } from 'react-router-dom';

export default function Layout() {
    const wrapRef = useRef(null);
    const setTopRef = useRef(null);

    useEffect(() =>{
        setTimeout(()=>{
            setTopRef.current = wrapRef.current;
        },500);
    },[]);

    return (
        <div id="wrap" ref={wrapRef}>
            <Header />
            <Outlet />
            <Footer topScrollRef={setTopRef.current} />
        </div>
    );
}

