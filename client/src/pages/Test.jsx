import React, { useEffect, useRef, useState } from 'react';
import '../scss/test.scss';

export default function Test() {
  const contRefs = {
    cont1Ref: useRef(null),
    cont2Ref: useRef(null),
    cont3Ref: useRef(null),
    cont4Ref: useRef(null),
  };
useEffect(() => {
    const observer = new IntersectionObserver(
        (item) => {
            item.forEach((item) => {
                if(item.isIntersecting){
                    console.log(item.target, 'is visible');
                }             
            })
            
        },
        {
            root: null,            // 기본 root는 viewport
        rootMargin: '0px',     // root와의 마진을 0으로 설정하여 정확히 화면에 닿았을 때만 반응
        threshold: 1, 
        }
    );
    observer.observe(contRefs.cont2Ref.current);
},[]);

  return (
    <div>
      {/* <ul className="tab">
        <li className={activeIndex === 0 ? 'active' : ''}>menu1</li>
        <li className={activeIndex === 1 ? 'active' : ''}>menu2</li>
        <li className={activeIndex === 2 ? 'active' : ''}>menu3</li>
        <li className={activeIndex === 3 ? 'active' : ''}>menu4</li>
      </ul> */}
      <div className="cont1" ref={contRefs.cont1Ref} style={{height:'1000px',borderTop:'3px solid #000'}}>cont1</div>
      <div className="cont2" ref={contRefs.cont2Ref} style={{height:'1000px',borderTop:'3px solid #000'}}>cont2</div>
      <div className="cont3" ref={contRefs.cont3Ref} style={{height:'1000px',borderTop:'3px solid #000'}}>cont3</div>
      <div className="cont4" ref={contRefs.cont4Ref} style={{height:'1000px',borderTop:'3px solid #000'}}>cont4</div>
    </div>
  );
}

