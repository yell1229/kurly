import React from 'react';
import Header from '../components/common/Header.jsx';
import Footer from '../components/common/Footer.jsx';
import { Outlet } from 'react-router-dom';

export default function Layout() {

    return (
        <div id="wrap">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

