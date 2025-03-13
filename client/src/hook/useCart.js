import React, { useContext } from "react";
import { AuthContext } from "../components/auth/AuthContext.js";
import { CartContext } from "../components/context/CartContext.js";
import axios from 'axios';

export function useCart(){
    const {isLogin} = useContext(AuthContext);
    const {cartCount, setCartCount, cartList, setCartList, 
        totalDc, setTotalDc, totalDcPrice, setTotalDcPrice, totalPrice, setTotalPrice,
         listArr, setListArr, selectList, setSelectList} = useContext(CartContext);

    const id = localStorage.getItem('user_id');

    // checkbox 선택 시 listArr 변경될 때마다 값을 계산함.
    const calculateTotalPrice = (cartList) => {
        if (!Array.isArray(cartList)) return;


        if(listArr.length > 0 ){
            setSelectList(cartList.filter((item) => listArr.includes(item.pid)));
        }
        
        // total dc price
        let totalDC = selectList.reduce((sum, item) => {
            let price = parseInt(item.price * (100 - item.dc) *0.01) || 0;
            let count = parseInt(item.qty) || 1 ;
            return sum + (price * count );
        } ,0);
        setTotalDcPrice(totalDC.toLocaleString());

        // total price
        const total = selectList.reduce((sum, item)=>{
            let price = parseInt(item.price) || 0;
            let count = parseInt(item.qty) || 1 ;
            return sum + (price * count);
        },0);
        setTotalPrice(total.toLocaleString());

        // total price
        const totalDc = selectList.reduce((sum, item)=>{
            let price = parseInt(item.price * (item.dc *0.01)) || 0;
            let count = parseInt(item.qty) || 1 ;
            return sum + (price * count);
        },0);
        setTotalDc(totalDc.toLocaleString());
    }

    // 장바구니 리스트 가져오기
    const getCartList = async () => {
        if(isLogin){
            const result = await axios.post('http://localhost:9000/cart/getCartList', {'id':id});
            setCartList(result.data);
            calculateTotalPrice(cartList);
        }
        
    }

    

    // 선택 상품 삭제
    const deleteProduct = async (pid) => {
        const result = await axios.post('http://localhost:9000/cart/deleteItem', {'id':id ,'pid':pid});
        if(result.data.result_rows) {
            getCartList();
        }

    }

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

    

    return { getCartList, deleteProduct, getCount, setCount, calculateTotalPrice };
}