import React, { useContext, useEffect } from "react";
import { AuthContext } from "../components/auth/AuthContext.js";
import { CartContext } from "../components/context/CartContext.js";
import axios from 'axios';

export function useCart(){
    const {isLogin} = useContext(AuthContext);
    const { setCartCount, cartList, setCartList, 
            setTotalDc, setTotalDcPrice, setTotalPrice,
            listArr, selectList, setSelectList} = useContext(CartContext);

    const id = localStorage.getItem('user_id');

    // checkbox 선택 시 listArr 변경될 때마다 값을 계산함.
    const calculateTotalPrice = (cartList) => {
        if (!Array.isArray(cartList)) return ;

        if(listArr.length > 0 ){
            setSelectList(cartList.filter((item) => listArr.includes(item.pid)));
        }else{
            return setTotalDcPrice(0), setTotalPrice(0), setTotalDc(0);
        }
        
        // total dc price
        let totalDC = selectList.reduce((sum, item) => {
            let price = parseInt(item.price * (100 - item.dc) *0.01) || 0;
            let count = parseInt(item.qty) || 1 ;
            return sum + (price * count );
        } ,0);
        setTotalDcPrice(totalDC);

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
     useEffect(() =>{
        if (cartList.length > 0 || listArr.length > 0) {
            calculateTotalPrice(cartList);
        }
     },[cartList, listArr]);

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
            getCount();
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

    // 상품 갯수 수정
    const updatePidCount = async (qty, pid, type) => {
        
        if(qty <= 1 && type === 'decrease'){
            alert('최소 수량은 1개입니다.');
        }else{
            const result = await axios.post('http://localhost:9000/cart/setPidUpdate',{'id':id, 'pid':pid, 'type':type})

            if(result.data.result_rows === 1) {
                getCartList();
                calculateTotalPrice(cartList);
            }

        }
        
    }

    return { getCartList, deleteProduct, getCount, setCount, calculateTotalPrice, updatePidCount };
}