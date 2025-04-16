import {setCartCount, setCartList, setListArr, setLodingListArr, setTotalPrice, setTotalDcPrice, setTotalDc, setSelectList, setLodingSelectList, setResetListArr} from '../features/cart/cartSlice.js';
import axiosApi from './axiosApi.js';

const id = localStorage.getItem('user_id');


// 장바구니 리스트 가져오기
export const getCartList = () => async (dispatch) => {
    const type='post';
    const url = 'http://localhost:9000/cart/getCartList';
    const data = { 'id': id };
    
    const result = await axiosApi({type, url, data});
    dispatch(setCartList({result}));
    dispatch(setTotalPrice({result}));
    dispatch(setTotalDcPrice({result}));
    dispatch(setTotalDc({result}));
    dispatch(getCount());

};

// 장바구니 전체 카운트
export const getCount = () => async(dispatch) => {
    const type = 'post';
    const url = 'http://localhost:9000/cart/getCartList';
    const data = { 'id': id };

    const result = await axiosApi({type, url, data});
    const length = result.length;
    
    dispatch(setCartCount({length}));
    // dispatch(setTotalDcPrice({length}));
    // dispatch(setTotalDc({length}));
};

// 장바구니에 담기
export const cartAddItem = (pid, count, cartCount) => async(dispatch) => {
    console.log(pid, count, cartCount);
        const cartItem = {
            'pid':pid,
            'qty':count ? count :1
        }
      
        const type='post';
        const url = 'http://localhost:9000/cart/check';
        const data = {'id':id, 'pid':pid};

        const result = await axiosApi({type, url, data});
        const findItem = result.count;

        if(!findItem){ // 추가
            const type='post';
            const url = 'http://localhost:9000/cart/add';
            const data = {'id':id, ...cartItem};

            const result = await axiosApi({type, url, data});

            if(result.result_rows === 1) alert(`장바구니에 추가되었습니다.`);
            dispatch(setCartCount(cartCount + 1));

        }else{ // 갯수 변경
            const type='post';
            const url = 'http://localhost:9000/cart/update';
            const data = {'id':id, ...cartItem};

            const result = await axiosApi({type, url, data});

            if(result.result_rows === 1) alert(`장바구니에 추가되었습니다.`);
        }
        dispatch(getCount());
}

// 선택 상품 삭제
export const deleteProduct =  (pid) => async(dispatch) => {
    const type = 'post';
    const url = 'http://localhost:9000/cart/deleteItem';
    const data = { 'id': id, 'pid': pid };

    const result = await axiosApi({type, url, data});
    if (result.result_rows) {
        dispatch(getCartList());
        dispatch(getCount());
    }
};


// 상품 갯수 수정
export const updatePidCount =  (qty, pid, types, cartList,listArr) => async(dispatch) => {
    // console.log('qty, pid, type',qty, pid, type);
    if(types==='decrease'){
        console.log('decrease');
        
    }else if(types==='increase'){
        console.log('increase');
        
    }
    if (qty === 1 && types === 'decrease') {
        alert('최소 수량은 1개입니다.');
    } else {
        const type= 'post';
        const url= 'http://localhost:9000/cart/setPidUpdate';
        const data= { 'id': id, 'pid': pid, 'types': types };
        const result = await axiosApi({type, url, data});

        if (result.result_rows === 1) {
            dispatch(getCartList());
            const newList = cartList.filter((item) => listArr.includes(item.pid));
            dispatch(setSelectList({newList}));
            const result = cartList;
            dispatch(setTotalPrice({result}));
            dispatch(setTotalDcPrice({result}));
            dispatch(setTotalDc({result}));
        }
    }
};

// 상품 선택 시 업데이트
export const updateListArr = (cartList,newList) => (dispatch) => {

    dispatch(setListArr({newList}));
    
    const result = cartList.filter((item) => newList.includes(item.pid)); // 선택된 상품의 정보를 담는 리스트
    console.log('상품 선택 시 업데이트 result',result);
    
    if (JSON.stringify(result) !== JSON.stringify(newList)) {
        dispatch(setSelectList({result}));  // selectList가 달라질 때만 업데이트   
    }

    dispatch(setTotalPrice({result}));
    dispatch(setTotalDcPrice({result}));
    dispatch(setTotalDc({result}));

}

// 상품 전체 해제 시 리셋
export const resetListArr = () => (dispatch) =>{
    console.log('check');
    
    const result = [];
    dispatch(setResetListArr());
    dispatch(setTotalPrice({result}));
    dispatch(setTotalDcPrice({result}));
    dispatch(setTotalDc({result}));
}

// 로딩 시 전체 상품 pid 수집
export const loadList = (cartList) => (dispatch) => {
    console.log('cartList',cartList);
    dispatch(getCartList());  
    dispatch(setLodingListArr({cartList}));
    dispatch(setLodingSelectList({cartList}));
    
}