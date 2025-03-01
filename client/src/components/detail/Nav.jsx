import React,{useState, useEffect} from 'react';

export default function Nav({scrolls,topInfoRef, reviewCount}) {
    const [activeEle, setActiveEle] = useState(scrolls[0].id);
    
    // tab nav click event
    const tabActive = (ref) => {
        ref.current.scrollIntoView({behavior: "smooth", block: "start"});
    }

    useEffect(() =>{
        let timeout;
        const handleScroll = () => {
            const currentScrollPos = window.scrollY; // 수직으로 스크롤 된 값
            const currentSection = scrolls.find(({ ref }) => {
                if(ref.current){
                        const offsetTop = ref.current.offsetTop;
                        const offsetBottom = offsetTop + ref.current.offsetHeight + topInfoRef.current.offsetHeight;
                        return currentScrollPos >= offsetTop && currentScrollPos < offsetBottom;
                    }
                return false;
            });
            // if(currentSection) setActiveEle(currentSection.id);        
            if (currentSection && currentSection.id !== activeEle) {
                setActiveEle(currentSection.id);
              }  
        };
        const debouncedScroll = () => {
            clearTimeout(timeout);
            timeout = setTimeout(handleScroll, 100); // 이벤트 호출을 줄이기 위해 스크롤 처리를 지연합니다.
          };
        window.addEventListener('scroll',handleScroll);
        return () =>{
            window.removeEventListener('scroll', debouncedScroll);
            clearTimeout(timeout); // 마운트 해제 시 시간 초과 정리
        } 
    },[scrolls, activeEle, topInfoRef]); // activeEle의 종속성 문제 방지

    return (
        <ul>
            {
                scrolls.map((el,i) =>
                    <li ref={el.ref}  onClick={()=>tabActive(el.ref)} className={(activeEle === el.id) ? 'on':''} key={i}>
                        { (el.id === '후기') ? `${el.id}(${reviewCount})` : el.id }
                    </li>
                )
            }
        </ul>
    );
}

