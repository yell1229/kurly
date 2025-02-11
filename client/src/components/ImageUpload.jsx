import React from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export default function ImageUpload({getFileName}) {
    const formData = new FormData();
    const handleFileUpload = (e) => {
        console.log(e.target.files[0]);
        formData.append('file',e.target.files[0])
        axios.post('http://localhost:9000/uploads',formData,{
            headers: { "Content-Type": "multipart/form-data" }
        })
                .then(res => {
                    // console.log('res.data ---->>', res.data);
                    getFileName(res.data);
                })
                .catch(err => console.log(err));
        
    }

    return (
        <div>
            <Form.Control type="file" accept="image/*" onChange={(e) =>{handleFileUpload(e)}} />
        </div>
    );
}

