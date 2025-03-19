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
        
    },
})

export const {  } = cartSlice.actions

export default cartSlice.reducer