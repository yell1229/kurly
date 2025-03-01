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
import ProductTest from './pages/ProductTest.jsx';
import DetailTest from './pages/DetailTest.jsx';
import {PidProvider} from './context/ProductContext.js';
import { AuthProvider } from './components/auth/AuthContext.js';

import './scss/kurly.scss';

export default function App() {
    return (
        <AuthProvider>
        <PidProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Main />} />
                    <Route path="/goods/detail/:pid" element={<Detail />} />
                    <Route path="/goods/detail_test/:pid" element={<DetailTest />} />
                    <Route path="/goods/list" element={<ProductList />} />
                    <Route path="/member/login" element={<Login />} />
                    <Route path="/member/signup" element={<SignUp />} />
                    <Route path="/goods/new" element={<NewProduct />} />
                    <Route path="/cart" element={<Cart />} />
                </Route>
            </Routes>
        </BrowserRouter>
        </PidProvider>
        </AuthProvider>
    );
}
