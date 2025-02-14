import React,{useRef, useState} from 'react';
import '../scss/new_product.scss';
import ImageUpload from '../components/ImageUpload.jsx';
import ImageUploadMultiple from '../components/ImageUploadMultiple.jsx';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function NewProduct() {
    const navigate = useNavigate();
    const refs = {
        brendRef:useRef(null),
        depth1Ref:useRef(null),
        depth2Ref:useRef(null),
        subjectRef:useRef(null),
        descriptionRef:useRef(null),
        priceRef:useRef(null),
        dcRef:useRef(null)
    };
    const eventRef = useRef(null);
    const initForm = {
        brend:'',
        depth1:'',
        depth2:'',
        subject:'',
        description:'',
        price:'',
        dc:''
    }
    let [formData, setFormData] = useState(initForm);
    const [fname, setFname] = useState({});
    const [previewImg, setPreviewImg] = useState('');

    const depth2List = [
                {value:'default', text:"선택"},
                {value:'001', text:"스킨ㆍ미스트ㆍ패드"},
                {value:'002', text:"에센스ㆍ앰플ㆍ로션"},
                {value:'003', text:"크림ㆍ오일"},
                {value:'004', text:"클렌징"},
                {value:'005', text:"마스크팩"},
                {value:'006', text:"선케어"},
                {value:'007', text:"베이스메이크업"},
                {value:'008', text:"립메이크업"}
            ];

    const getFileName = (filenames) => {
        setFname(filenames);
        setPreviewImg(`http://localhost:9000/${filenames.uploadFileName}`);
    }
    // input formdata
    const changeFormData = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name] : value})
        if(name === 'depth1') console.log('check');
        
    }
    //validator
    const validator = () => {
        const newRef = Object.entries(refs);
        for(const item of newRef){
            const ref = item[1];
            if(ref.current.value !== 'default'){
                if(ref.current.value==='') {
                    ref.current.focus();
                    return false;
                }
            }else if(ref.current.name === 'depth1'){
                if(ref.current.value==='default') {
                    ref.current.focus();
                    return false;
                }
            }else if(ref.current.name === 'depth2'){
                if(ref.current.value==='default') {
                    ref.current.focus();
                    return false;
                }
            }
            
        }
        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        formData ={...formData,"uploadImg":fname.uploadFileName,"orgImg":fname.sourceFileName };
        if(validator() ) {
            console.log('formData',formData);
        
            axios.post('http://localhost:9000/product/new',formData)
                    .then(res => {
                        if(res.data.result_rows === 1){
                            alert('상품이 등록되었습니다.');
                            setTimeout(()=>{navigate('/goods/list')} ,1000);
                        }
                    })
                    .catch(err => console.log(err));
        }

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
                        <span>상품카테고리</span>
                        <div>
                        <Form.Select  name="depth1" onChange={changeFormData} ref={refs.depth1Ref}>
                            <option value="default" defaultChecked>선택</option>
                            <option value="101">스킨케어</option>
                            <option value="102">로션</option>
                        </Form.Select>

                            <Form.Select name="depth2" onChange={changeFormData} ref={refs.depth2Ref}>
                                {
                                depth2List.map((opt,i) =>
                                        <option name="depth2" value={opt.value} key={i}>{opt.text}</option>
                                    )
                                }
                            </Form.Select> 
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
                            <input type="text" name="dc" ref={refs.dcRef} onChange={changeFormData} placeholder='예) 10%할인 => 할인되는 숫자만 입력 10' />
                        </div>
                    </div>
                    <div className="f_wrap">
                        <span>라이브특가</span>
                        <div className='event'>
                            <label className="radio_box">
                                <div className='radio'>
                                    <input type="radio" name="event" value="1" ref={eventRef}/>
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
                    {/* <div className="f_wrap upload_file">
                        <span>상세 이미지들</span>
                        <div>
                            <ImageUploadMultiple getFileName={getFileName} />
                            <div>
                                <input type="text" name="upload" value={fname.uploadFileName} readOnly />
                                <input type="text" name="source" value={fname.sourceFileName} readOnly />
                            </div>
                        </div>
                        <div className='img'><img src={previewImg} alt="" /></div>
                    </div> */}
                </div>

                <div className="btn">
                    <button type="submit">등록하기</button>
                </div>
            </form>
        </div>
    );
}

