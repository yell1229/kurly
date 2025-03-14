import React, { useContext, useEffect } from "react"; 
import { AuthContext } from "../components/auth/AuthContext.js";
import { CartContext } from "../components/context/CartContext.js";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export function useCart() {
    const { isLogin } = useContext(AuthContext);
    const { cartCount, setCartCount, cartList, setCartList, 
            setTotalDc, setTotalDcPrice, setTotalPrice,
            listArr, selectList, setSelectList } = useContext(CartContext);
    const navigate = useNavigate();

    const id = localStorage.getItem('user_id');

    // checkbox 선택 시 listArr 변경될 때마다 값을 계산함.
    const calculateTotalPrice = () => {
        if (!Array.isArray(cartList)) return;

        if (listArr.length > 0) {
            // selectList가 변경될 때만 setSelectList 호출
            const newSelectList = cartList.filter((item) => listArr.includes(item.pid));
            if (JSON.stringify(newSelectList) !== JSON.stringify(selectList)) {
                setSelectList(newSelectList);  // selectList가 달라질 때만 업데이트
            }

            // total dc price
            let totalDC = newSelectList.reduce((sum, item) => {
                let price = parseInt(item.price * (100 - item.dc) * 0.01) || 0;
                let count = parseInt(item.qty) || 1;
                return sum + (price * count);
            }, 0);
            setTotalDcPrice(totalDC);

            // total price
            const total = newSelectList.reduce((sum, item) => {
                let price = parseInt(item.price) || 0;
                let count = parseInt(item.qty) || 1;
                return sum + (price * count);
            }, 0);
            setTotalPrice(total.toLocaleString());

            // total discount
            const totalDc = newSelectList.reduce((sum, item) => {
                let price = parseInt(item.price * (item.dc * 0.01)) || 0;
                let count = parseInt(item.qty) || 1;
                return sum + (price * count);
            }, 0);
            setTotalDc(totalDc.toLocaleString());
        } else {
            setTotalDcPrice(0);
            setTotalPrice(0);
            setTotalDc(0);
        }
    };

    useEffect(() => {
        if (cartList.length > 0 || listArr.length > 0) {
            calculateTotalPrice();  // 의존성 배열에 cartList와 listArr 추가
        }
    }, [cartList, listArr]);  // 의존성 배열을 적절히 설정

    // 장바구니 리스트 가져오기
    const getCartList = async () => {
        if (isLogin) {
            const result = await axios.post('http://localhost:9000/cart/getCartList', { 'id': id });
            setCartList(result.data);
            calculateTotalPrice();  // getCartList 후에 다시 total 계산
        }
    };

    // 선택 상품 삭제
    const deleteProduct = async (pid) => {
        const result = await axios.post('http://localhost:9000/cart/deleteItem', { 'id': id, 'pid': pid });
        if (result.data.result_rows) {
            getCartList();
            getCount();
        }
    };

    // 장바구니 전체 카운트
    const getCount = () => {
        axios
            .post('http://localhost:9000/cart/getCartList', { 'id': id })
            .then(res => setCartCount(res.data.length))
            .catch(err => console.log(err));
    };

    // 로그아웃 장바구니 0
    const setCount = (value) => {
        setCartCount(value);
    };

    // 상품 갯수 수정
    const updatePidCount = async (qty, pid, type) => {
        if (qty <= 1 && type === 'decrease') {
            alert('최소 수량은 1개입니다.');
        } else {
            const result = await axios.post('http://localhost:9000/cart/setPidUpdate', { 'id': id, 'pid': pid, 'type': type });

            if (result.data.result_rows === 1) {
                getCartList();
                setSelectList(cartList.filter((item) => listArr.includes(item.pid)));
                calculateTotalPrice(); 
            }
        }
    };

    // 장바구니에 담기
    const cartAddItem = async (pid, count) => {

        if(isLogin){
            
            const cartItem = {
                'pid':pid,
                'qty':count ? count :1
            }
          
            const result = await axios.post('http://localhost:9000/cart/check',{'id':id, 'pid':pid});
            const findItem = result.data.count;

            if(!findItem){ // 추가
                axios
                    .post('http://localhost:9000/cart/add',{'id':id, ...cartItem})
                    .then(res => {
                            if(res.data.result_rows === 1) alert(`장바구니에 추가되었습니다.`);
                            setCartCount(cartCount + 1);
                        })
                    .catch(err => console.log(err));
            }else{ // 갯수 변경
                axios
                    .post('http://localhost:9000/cart/update',{'id':id, ...cartItem})
                    .then(res =>  {
                            if(res.data.result_rows === 1) alert(`장바구니에 추가되었습니다.`);
                        })
                    .catch(err => console.log(err));
            }
            
        }else{
            const login = window.confirm(`로그인 후 이용 가능합니다 \n 로그인 하시겠습니까?`);
            if(login) navigate('/member/login');
        }
        
    }

    // console.log('장바구니 전체 갯수 : cartList', cartList);
    // console.log('선택된 리스트의 pid: listArr', listArr);
    // console.log('선택된 리스트의 정보: selectList', selectList);

    return { getCartList, deleteProduct, getCount, setCount, calculateTotalPrice, updatePidCount, cartAddItem };
}
