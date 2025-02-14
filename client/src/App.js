import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from "./pages/Main.jsx";
import Detail from "./pages/Detail.jsx";
import Login from "./pages/Login.jsx";
import Layout from "./pages/Layout.jsx";
import SignUp from './pages/SignUp.jsx';
import NewProduct from './pages/NewProduct.jsx';
import ProductList from './pages/ProductList.jsx';

import './scss/kurly.scss';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Main />} />
                    <Route path="/goods/detail/:pid" element={<Detail />} />
                    <Route path="/goods/list" element={<ProductList />} />
                    <Route path="/member/login" element={<Login />} />
                    <Route path="/member/signup" element={<SignUp />} />
                    <Route path="/goods/new" element={<NewProduct />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
