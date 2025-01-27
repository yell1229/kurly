import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from "./pages/Main.jsx";
import Detail from "./pages/Detail.jsx";
import Login from "./pages/Login.jsx";
import Layout from "./pages/Layout.jsx";
import './scss/kurly.scss';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Main />} />
                    <Route path="/collection-groups/" element={<Detail />} />
                    <Route path="/member/login" element={<Login />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
