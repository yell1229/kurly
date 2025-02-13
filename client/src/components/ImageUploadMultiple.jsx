import React from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export default function ImageUploadMultiple() {
    
    

    const handleFileUploadMultiple = (e) => {
        const formData = new FormData();
        const files = e.target.files;

        for(const file of files){
            formData.append("files",file);
        }
        
        axios.post(`http://localhost:9000/uploads/multiple?maxFiles=${files.length}`,formData,{
            headers: { "Content-Type": "multipart/form-data" }
        })
                .then(res => {
                    console.log('res.data ---->>', res.data);
                    //getFileName(res.data);
                })
                .catch(err => console.log(err));
        
    }

    return (
        <div>
            <Form.Control type="file" accept="image/*" onChange={(e) =>{handleFileUploadMultiple(e)}}  multiple />
        </div>
    );
}

