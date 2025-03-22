import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from "./pages/Main.jsx";
import Detail from "./pages/Detail.jsx";
import Login from "./pages/Login.jsx";
import Layout from "./pages/Layout.jsx";
import SignUp from './pages/SignUp.jsx';
import Cart from './pages/Cart.jsx';
import NewProduct from './pages/NewProduct.jsx';
import ProductList from './pages/ProductList.jsx';
import TotalList from './pages/TotalList.jsx';

import {CartProvider} from './components/context/CartContext.js';
import ScrollToTop from './components/common/ScrollToTop.jsx';
import PickList from './pages/PickList.jsx';
import Review from './pages/Review.jsx';
import Checkout from './pages/Checkout.jsx';
import PaySuccess from './pages/PaySuccess.jsx';

import './scss/kurly.scss';

export default function App() {
    return (
        <CartProvider>
        {/* <BrowserRouter basename='/portfolio'> */}
        <BrowserRouter>
            <ScrollToTop>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Main />} />
                    <Route path="/goods/detail/:pid" element={<Detail />} />
                    <Route path="/goods/list" element={<ProductList />} />
                    <Route path="/goods/all" element={<TotalList />} />
                    <Route path="/goods/pick" element={<PickList />} />
                    <Route path="/member/login" element={<Login />} />
                    <Route path="/member/signup" element={<SignUp />} />
                    <Route path="/goods/new" element={<NewProduct />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/review" element={<Review />} />
                    <Route path="/order/checkout" element={<Checkout />} />
                    <Route path="/success" element={<PaySuccess />} />
                </Route>
            </Routes>
            </ScrollToTop>
        </BrowserRouter>
        </CartProvider>
    );
}
