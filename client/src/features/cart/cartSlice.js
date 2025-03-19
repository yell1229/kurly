import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartCount : 0,
    cartList : [],
    totalDc : 0,
    totalDcPrice : 0,
    totalPrice : 0,
    listArr : [],
    selectList : []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCartCount(state, action){
            state.cartCount = action.payload.length;
        },
        setCartList(state, action){
            state.cartList = action.payload.result;
        }
    },
})

export const { setCartCount, setCartList } = cartSlice.actions

export default cartSlice.reducer