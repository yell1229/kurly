import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartCount : 0,
    cartList : [],
    listArr : [], // 선택된 상품의 pid

    totalDc : 0,
    totalDcPrice : 0,
    totalPrice : 0,
    selectList : [] // 선택된 상품의 정보 []
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
        },
        setSelectList(state, action){
            state.selectList = action.payload.result;
        },
        setListArr(state, action){
            state.listArr = action.payload.newList;
        },
        setTotalPrice(state, action){
            if (state.listArr.length > 0) {
                const newSelectList = state.cartList.filter((item) => state.listArr.includes(item.pid)); // 선택된 상품의 정보를 담는 리스트
                if (JSON.stringify(newSelectList) !== JSON.stringify(state.selectList)) {
                    state.selectList = newSelectList;  // selectList가 달라질 때만 업데이트
                }

                const total = action.payload.result;
                if (Array.isArray(total)) {
                    state.totalPrice = total.reduce((sum, item) => {
                        let price = parseInt(item.price) || 0;
                        let count = parseInt(item.qty) || 1;
                        return sum + (price * count);
                    }, 0);
                }
            }else if(state.listArr.length === 0 || action.payload.result.length === 0){
                state.listArr = [];
                state.selectList =[];
                state.totalPrice = 0;
            }
            
        },
        setTotalDcPrice(state, action){
            if (state.listArr.length > 0) {
                const newSelectList = state.cartList.filter((item) => state.listArr.includes(item.pid)); // 선택된 상품의 정보를 담는 리스트
                if (JSON.stringify(newSelectList) !== JSON.stringify(state.selectList)) {
                    state.selectList = newSelectList;  // selectList가 달라질 때만 업데이트
                }

                const total = action.payload.result;
                
                if (Array.isArray(total)) {
                    state.totalDcPrice = total.reduce((sum, item) => {
                        let price = parseInt(item.price * (100 - item.dc) * 0.01) || 0;
                        let count = parseInt(item.qty) || 1;
                        return sum + (price * count);
                    }, 0);
                }
            }else if(state.listArr.length === 0 || action.payload.result.length === 0 ){
                state.listArr = [];
                state.selectList =[];
                state.totalDcPrice = 0;
            }
            
        },
        setTotalDc(state, action){
            if (state.listArr.length > 0) {
                const newSelectList = state.cartList.filter((item) => state.listArr.includes(item.pid)); // 선택된 상품의 정보를 담는 리스트
                if (JSON.stringify(newSelectList) !== JSON.stringify(state.selectList)) {
                    state.selectList = newSelectList;  // selectList가 달라질 때만 업데이트
                }

                const total = action.payload.result;
                if (Array.isArray(total)) {
                    state.totalDc = total.reduce((sum, item) => {
                        let price = parseInt(item.price * (item.dc * 0.01)) || 0;
                        let count = parseInt(item.qty) || 1;
                        return sum + (price * count);
                    }, 0);
                }
            }else if(state.listArr.length === 0 || action.payload.result.length === 0){
                state.listArr = [];
                state.selectList =[];
                state.totalDc = 0;
            }
            
        },
        setLodingListArr(state,action){
            const result = action.payload.cartList;
            
            state.listArr = [];
            if(result.length >0){
                result.forEach((item) =>{
                    state.listArr.push(item.pid);
                });
            }else{
                state.listArr = [];
                state.selectList =[];
            }
        },
        setLodingSelectList(state,action){          
            state.selectList = action.payload.cartList;
        },
        setResetListArr(state){
            state.listArr = [];
            state.selectList =[];
        }
        
    },
})

export const { setCartCount, setCartList, setSelectList, setListArr , setTotalPrice, setTotalDcPrice, setTotalDc, setLodingListArr, setLodingSelectList, setResetListArr} = cartSlice.actions

export default cartSlice.reducer