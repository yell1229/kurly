import React,{useState} from 'react';
import '../scss/new_product.scss';
import ImageUpload from '../components/ImageUpload.jsx';
import axios from 'axios';

export default function NewProduct() {
    const [fname, setFname] = useState({});
    const [previewImg, setPreviewImg] = useState({});
    const [formData, setFormData] = useState('');
    const [currentImg, setCurrentImg] = useState('');

    const getFileName = (filenames) => {
        setFname(filenames);
        setPreviewImg(`http://localhost:9000/${filenames.uploadFileName}`);
        setCurrentImg(previewImg.replace(/\\/g, '/'));
        // setCurrentImg(previewImg);
        setFormData(filenames);
    }
    console.log('previewImg',previewImg); // previewImg upload_files\1739284677715-KakaoTalk_20240213_211724594_02.jpg
    
    const handleSubmit = (e) => {
        e.preventDefault();

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
                        <span>상품이름</span>
                        <div>
                            <input type="text" name="id" placeholder='' />
                        </div>
                    </div>
                    <div className="f_wrap">
                        <span>가격</span>
                        <div>
                            <input type="text" name="id" placeholder='' />
                        </div>
                    </div>
                    <div className="f_wrap">
                        <span>상품이름</span>
                        <div>
                            <input type="text" name="id" placeholder='' />
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
                        <div className='img'><img src={currentImg} alt="" /></div>
                    </div>
                </div>

                <div className="btn">
                    <button type="submit">등록하기</button>
                </div>
            </form>
        </div>
    );
}

