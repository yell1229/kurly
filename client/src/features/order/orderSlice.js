import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isComplete: false
}

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setComplete(state){
            state.isComplete = true;
        }
    },
})

export const {setComplete } = orderSlice.actions

export default orderSlice.reducer