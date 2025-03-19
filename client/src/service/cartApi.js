import {setCartCount, setCartList} from '../features/cart/cartSlice.js';
import axiosApi from './axiosApi.js';

const id = localStorage.getItem('user_id');

// 장바구니 리스트 가져오기
export const getCartList = () => async (dispatch) => {
    const type='post';
    const url = 'http://localhost:9000/cart/getCartList';
    const data = { 'id': id };
    
    const result = await axiosApi({type, url, data});
    dispatch(setCartList({result}));
    // calculateTotalPrice();  // getCartList 후에 다시 total 계산

};

// 장바구니 전체 카운트
export const getCount = () => async(dispatch) => {
    const type = 'post';
    const url = 'http://localhost:9000/cart/getCartList';
    const data = { 'id': id };

    const result = await axiosApi({type, url, data});
    const length = result.length;
    
    dispatch(setCartCount({length}));
};

// 장바구니에 담기
export const cartAddItem = (pid, count, cartCount) => async(dispatch) => {
        
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
export const updatePidCount =  (qty, pid, type, cartList, listArr) => async(dispatch) => {
    if (qty <= 1 && type === 'decrease') {
        alert('최소 수량은 1개입니다.');
    } else {
        const type= 'post';
        const url= 'http://localhost:9000/cart/setPidUpdate';
        const data= { 'id': id, 'pid': pid, 'type': type };
        const result = await axiosApi({type, url, data});

        if (result.result_rows === 1) {
            dispatch(getCartList());
            // const newList = cartList.filter((item) => listArr.includes(item.pid));
            // setSelectList({newList});
            // calculateTotalPrice(); 
        }
    }
};