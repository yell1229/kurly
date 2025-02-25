import React,{useRef} from 'react';
import Nav from '../components/detail/Nav.jsx';
import '../scss/scroll.scss';

export default function ScrollTest() {
    const sections=[
            {id:'section01', ref: useRef(null)},
            {id:'section02', ref: useRef(null)},
            {id:'section03', ref: useRef(null)}
        ];
        
        return (
            <div className='scoll_area'>
                <Nav sections={sections} />
                <div ref={sections[0].ref} className='box'>section 1</div>
                <div ref={sections[1].ref} className='box'>section 2</div>
                <div ref={sections[2].ref} className='box'>section 3</div>
            </div>
        );
}

