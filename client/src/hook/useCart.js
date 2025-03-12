import React, { useContext } from "react";
import { AuthContext } from "../components/auth/AuthContext.js";
import { CartContext } from "../components/context/CartContext.js";
import axios from 'axios';

export function useCart(){
    const {isLogin} = useContext(AuthContext);
    const {cartCount, setCartCount} = useContext(CartContext);

    const id = localStorage.getItem('user_id');

    // 장바구니 전체 카운트
    const getCount = () => {
        axios
            .post('http://localhost:9000/cart/getCartList', {'id':id})
            .then(res => setCartCount(res.data.length))
            .catch(err => console.log(err));
    }

    // 로그아웃 장바구니 0
    const setCount = (value) => {
        setCartCount(value);
    }

    return { getCount, setCount };
}