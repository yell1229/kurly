import React,{useState} from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export default function ImageUpload({getFileName}) {
    const formData = new FormData();
    const [oldFile, setOldFile] = useState('');
    const imageUpload = (e) => {

        formData.append("file",e.target.files[0]);
        formData.append("oldFile",oldFile);
        axios.post('http://localhost:9000/upload/file',formData,{
                    "headers":{"Content-type":"multipart/form-data"}
                })
                .then(res => {
                    getFileName(res.data);
                    setOldFile(res.data.oldFile);
                })
                .catch(err => console.log(err));

    }

    return (
        <div>
            <Form.Control type="file" onChange={(e) => imageUpload(e)} />
        </div>
    );
}

