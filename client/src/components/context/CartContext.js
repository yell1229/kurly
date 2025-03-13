import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({children}){
    const [cartCount, setCartCount] = useState(0);
    const [cartList, setCartList] = useState([]);
    const [totalDc, setTotalDc] = useState(0);
    const [totalDcPrice, setTotalDcPrice] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [listArr, setListArr] = useState([]);
    const [selectList, setSelectList] = useState([]);


    return (
        <CartContext.Provider value={{cartCount, setCartCount, cartList, setCartList, totalDc, setTotalDc, totalDcPrice, setTotalDcPrice, totalPrice, setTotalPrice, listArr, setListArr,selectList, setSelectList}}>
            {children}
        </CartContext.Provider>
    )
}