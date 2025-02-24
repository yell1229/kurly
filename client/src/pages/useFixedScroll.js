import { useState, useEffect, useRef } from "react";

/**
 * 특정 요소를 스크롤 시 상단에 고정하는 커스텀 훅
 * @returns {Object} { ref, isFixed }
 * 
 */

// 위의 주석은 JSDoc 문법(협업 시 중요하게 사용됨.) : 훅이 반환하는 데이터 타입을 설명
// {Object} 객체를 반환
// { ref, isFixed } 반환된 객체에는 ref와 isFixed라는 두 가지 속성이 존재

export default function useFixedScroll() {
    // `isFixed`: 요소가 상단에 고정되었는지를 나타내는 상태
    const [isFixed, setIsFixed] = useState(false);

    // `ref`: 감시할 요소를 저장하는 `useRef`
    const ref = useRef(null);

    // `initialOffset`: 요소가 처음 로드될 때의 Y축 위치를 저장하는 `useRef`
    const initialOffset = useRef(0);

    useEffect(() => {
        // 컴포넌트가 처음 마운트될 때 실행
        if (ref.current) { // 탭 메뉴가 있을 떄            // console.log(ref.current); // <div> ...<div/>
            // 요소의 처음 위치를 저장 (화면 상단에서부터 해당 요소까지의 거리)
            initialOffset.current = ref.current.getBoundingClientRect().top + window.scrollY;
            //window.scrollY - 현재 문서(웹페이지)에서 세로 방향으로 얼마나 스크롤되었는지를 나타내는 숫자(픽셀 값) 
            console.log("[초기 위치]:", initialOffset.current);
 
        }

        // 스크롤 이벤트 핸들러
        const handleScroll = () => {
            if (!ref.current) return; // 요소가 존재하지 않으면 함수 종료

            // 현재 스크롤 위치
            const scrollY = window.scrollY;

            // 요소가 최초 위치보다 위로 올라가면 고정 (`isFixed` 상태를 true로 변경)
            if (scrollY >= initialOffset.current) {
                setIsFixed(true);
            } else {
                // 요소가 원래 위치보다 아래로 내려가면 다시 원래 위치로 (`isFixed` 상태를 false로 변경)
                setIsFixed(false);
            }
        };

        // 스크롤 이벤트 추가 (사용자가 스크롤할 때 `handleScroll` 실행)
        window.addEventListener("scroll", handleScroll);

        // 컴포넌트가 언마운트될 때 이벤트 리스너 제거 (클린업 함수)
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // `ref`를 요소에 연결하고, `isFixed` 상태를 반환
    return { ref, isFixed };
}
