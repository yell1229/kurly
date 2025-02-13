import React,{useRef, useState} from 'react';
import '../scss/new_product.scss';
import ImageUpload from '../components/ImageUpload.jsx';
import axios from 'axios';

export default function NewProduct() {
    const refs = {
        brendRef:useRef(null),
        subjectRef:useRef(null),
        descriptionRef:useRef(null),
        priceRef:useRef(null),
        dcRef:useRef(null)
    };
    const initForm = {
        brend:'',
        subject:'',
        description:'',
        price:'',
        dc:''
    }
    let [formData, setFormData] = useState(initForm);
    const [fname, setFname] = useState({});
    const [previewImg, setPreviewImg] = useState('');


    const getFileName = (filenames) => {
        setFname(filenames);
        setPreviewImg(`http://localhost:9000/${filenames.uploadFileName}`);
    }
    // input formdata
    const changeFormData = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name] : value})
    }
    //validator
    const validator = () => {
        const newRef = Object.entries(refs);
        for(const item of newRef){
            const ref = item[1];
            if(ref.current.value==='') {
                ref.current.focus();
                return false;
            }
            
        }
        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        formData ={...formData,"uploadImg":fname.uploadFileName,"orgImg":fname.sourceFileName };
        if(validator() )console.log('formData',formData);
        
        axios.post('http://localhost:9000/product/new',formData)
                .then(res => console.log(res.data))
                .catch(err => console.log(err));

    }

    return (
        <div className="new_product">
            <h2>상품입력</h2>
            <form onSubmit={handleSubmit}>
                <div className="form_area">
                <div className="f_wrap">
                        <span>브랜드명</span>
                        <div>
                            <input type="text" name="brend" ref={refs.brendRef} onChange={changeFormData} placeholder='' />
                        </div>
                    </div>
                    <div className="f_wrap">
                        <span>상품제목</span>
                        <div>
                            <input type="text" name="subject" ref={refs.subjectRef} onChange={changeFormData} placeholder='' />
                        </div>
                    </div>
                    <div className="f_wrap">
                        <span>상품 설명</span>
                        <div>
                            <input type="text" name="description" ref={refs.descriptionRef} onChange={changeFormData} placeholder='' />
                        </div>
                    </div>
                    <div className="f_wrap">
                        <span>가격</span>
                        <div>
                            <input type="text" name="price" ref={refs.priceRef} onChange={changeFormData} placeholder='' />
                        </div>
                    </div>
                    <div className="f_wrap">
                        <span>할인율</span>
                        <div>
                            <input type="text" name="dc" ref={refs.dcRef} onChange={changeFormData} placeholder='' />
                        </div>
                    </div>
                    <div className="f_wrap">
                        <span>라이브특가</span>
                        <div className='event'>
                            <label className="radio_box">
                                <div className='radio'>
                                    <input type="radio" name="event" value="1" />
                                <div>
                                </div></div>
                                선택
                            </label>
                            <label className="radio_box">
                                <div className='radio'>
                                    <input type="radio" name="event" value="0" defaultChecked />
                                <div>
                                </div></div>
                                선택안함
                            </label>
                        </div>
                    </div>
                    <div className="f_wrap upload_file">
                        <span>대표이미지</span>
                        <div>
                            <ImageUpload getFileName={getFileName} />
                            <div>
                                <input type="text" name="upload" value={fname.uploadFileName} readOnly />
                                <input type="text" name="source" value={fname.sourceFileName} readOnly />
                            </div>
                        </div>
                        <div className='img'><img src={previewImg} alt="" /></div>
                    </div>
                </div>

                <div className="btn">
                    <button type="submit">등록하기</button>
                </div>
            </form>
        </div>
    );
}

